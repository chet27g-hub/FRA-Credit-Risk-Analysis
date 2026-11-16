const { chromium } = require('playwright');
(async () => {
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 const pageErrors=[],consoleErrors=[];
 page.on('pageerror',e=>pageErrors.push(e.message));
 page.on('console',m=>{if(m.type()==='error')consoleErrors.push(m.text());});
 const ids=['overview','peers','credit','risk','market','conclusions'];
 const check=async expected=>{
  const state=await page.locator('main > .section').evaluateAll(ns=>ns.map(n=>({id:n.id,display:getComputedStyle(n).display,active:n.classList.contains('active'),parent:n.parentElement.tagName})));
  const visible=state.filter(x=>x.display!=='none');
  if(state.length!==6||visible.length!==1||visible[0].id!==expected||!visible[0].active||visible[0].parent!=='MAIN')throw Error('Section leak: '+JSON.stringify(state));
  const leaked=await page.locator('canvas').evaluateAll((ns,activeId)=>ns.filter(c=>!c.closest('.section')||(getComputedStyle(c.closest('.section')).display!=='none'&&c.closest('.section').id!==activeId)).length,expected);
  if(leaked)throw Error('Chart canvases leaked: '+leaked);
 };
 const go=async id=>{await page.locator('.nav button[data-page="'+id+'"]').click();await page.waitForFunction(x=>document.querySelector('.section.active')?.id===x,id);await check(id);};
 try{
  await page.goto('http://127.0.0.1:4173/',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>document.querySelectorAll('.nav button[data-page]').length===6);
  await page.waitForFunction(()=>document.querySelectorAll('#bankPeerTable tbody tr').length===4&&document.querySelectorAll('#nbfcPeerTable tbody tr').length===4,{timeout:20000});
  await page.waitForFunction(()=>document.querySelectorAll('#creditTable tbody tr').length===10&&document.querySelectorAll('#standaloneMovementTable tbody tr').length===3,{timeout:20000});
  await page.waitForFunction(()=>window.Chart&&document.getElementById('bankGnpaChart'),{timeout:20000});
  await check('overview');
  if(!(await page.locator('#prevSection').isDisabled()))throw Error('Previous not disabled at first section');
  for(const id of ids.slice(1)){await page.locator('#nextSection').click();await page.waitForFunction(x=>document.querySelector('.section.active')?.id===x,id);await check(id);}
  if(!(await page.locator('#nextSection').isDisabled()))throw Error('Next not disabled at last section');
  await page.locator('#nextSection').click();await check('conclusions');
  for(const id of ids.slice(0,-1).reverse()){await page.locator('#prevSection').click();await page.waitForFunction(x=>document.querySelector('.section.active')?.id===x,id);await check(id);}
  if(!(await page.locator('#prevSection').isDisabled()))throw Error('Previous not disabled at first section');
  for(const id of ids)await go(id);
  await go('peers');
  await page.waitForFunction(()=>Chart.getChart(document.getElementById('bankGnpaChart'))&&Chart.getChart(document.getElementById('nbfcGnpaChart')));
  const peerIds=await page.evaluate(()=>['bankGnpaChart','nbfcGnpaChart'].map(id=>Chart.getChart(document.getElementById(id)).id));
  await go('credit');
  await page.waitForFunction(()=>Chart.getChart(document.getElementById('iciciTrendChart'))&&Chart.getChart(document.getElementById('bajajTrendChart')));
  const trendIds=await page.evaluate(()=>['iciciTrendChart','bajajTrendChart'].map(id=>Chart.getChart(document.getElementById(id)).id));
  for(const metric of ['gnpa','nnpa','pcr']){await page.locator('#metricSelect').selectOption(metric);await check('credit');}
  await go('market');await go('peers');await go('credit');
  const trendIds2=await page.evaluate(()=>['iciciTrendChart','bajajTrendChart'].map(id=>Chart.getChart(document.getElementById(id)).id));
  if(JSON.stringify(trendIds)!==JSON.stringify(trendIds2))throw Error('Trend charts recreated on tab switch');
  await go('peers');
  const peerIds2=await page.evaluate(()=>['bankGnpaChart','nbfcGnpaChart'].map(id=>Chart.getChart(document.getElementById(id)).id));
  if(JSON.stringify(peerIds)!==JSON.stringify(peerIds2))throw Error('Peer charts recreated on tab switch');
  await go('risk');await page.locator('#eventFilter').selectOption('idiosyncratic');
  if(await page.locator('.risk-group .event:visible').count()<3)throw Error('Risk event filter failed');
  await page.locator('#eventFilter').selectOption('all');
  await go('market');await page.locator('#marketPeriod').selectOption('ilfs');
  if(await page.locator('#marketReactionCard').isVisible())throw Error('Market filter did not hide snapshots');
  await page.locator('#marketPeriod').selectOption('regulatory');
  if(!(await page.locator('#marketReactionCard').isVisible()))throw Error('Market filter did not show snapshots');
  await page.waitForFunction(()=>document.querySelectorAll('#marketReactionTable tbody tr').length===3,{timeout:20000});
  await go('overview');await page.locator('#presentationToggle').click();
  if(!(await page.locator('.app').evaluate(e=>e.classList.contains('presenting'))))throw Error('Presentation did not activate');
  for(const id of ids.slice(1)){await page.locator('#nextSection').click();await page.waitForFunction(x=>document.querySelector('.section.active')?.id===x,id);await check(id);}
  await page.locator('#presentationToggle').click();
  if(await page.locator('.app').evaluate(e=>e.classList.contains('presenting')))throw Error('Presentation did not exit');
  await go('overview');await page.keyboard.press('ArrowRight');await page.waitForFunction(()=>document.querySelector('.section.active')?.id==='peers');await page.keyboard.press('ArrowLeft');await page.waitForFunction(()=>document.querySelector('.section.active')?.id==='overview');
  await page.setViewportSize({width:390,height:844});for(const id of ids)await go(id);await page.setViewportSize({width:1440,height:1000});
  if(pageErrors.length)throw Error('Page errors: '+pageErrors.join(' | '));
  if(consoleErrors.length)throw Error('Console errors: '+consoleErrors.join(' | '));
  await page.screenshot({path:'/tmp/fra-dashboard-qa.png',fullPage:true});
  console.log(JSON.stringify({result:'PASS',sections:6,nextPrevious:'PASS',sidebar:'PASS',chartIsolation:'PASS',chartReuse:'PASS',metricFilters:'PASS',eventMarketFilters:'PASS',presentationKeyboard:'PASS',mobileDesktop:'PASS',pageErrors,consoleErrors}));
 }finally{await browser.close();}
})();