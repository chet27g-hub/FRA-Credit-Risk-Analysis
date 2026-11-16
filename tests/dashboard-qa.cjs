const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));

  try {
    await page.goto('http://127.0.0.1:4173/', { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => document.querySelectorAll('.nav button[data-page]').length === 6);
    await page.waitForFunction(() =>
      document.querySelectorAll('#bankPeerTable tbody tr').length === 4 &&
      document.querySelectorAll('#nbfcPeerTable tbody tr').length === 4,
      { timeout: 15000 }
    );
    await page.waitForFunction(() => document.querySelectorAll('#creditTable tbody tr').length === 10, { timeout: 15000 });
    await page.waitForFunction(() => document.querySelectorAll('#standaloneMovementTable tbody tr').length === 3, { timeout: 15000 });
    await page.waitForFunction(() => window.Chart && document.getElementById('bankGnpaChart'), { timeout: 15000 });

    const sections = await page.locator('.section').count();
    if (sections !== 6) throw new Error(`Expected 6 sections, found ${sections}`);

    await page.locator('[data-page="credit"]').click();
    await page.locator('#metricSelect').selectOption('nnpa');
    await page.waitForTimeout(300);

    await page.locator('[data-page="risk"]').click();
    await page.locator('#eventFilter').selectOption('idiosyncratic');
    const visibleRiskEvents = await page.locator('.risk-group .event:visible').count();
    if (visibleRiskEvents < 3) throw new Error(`Expected idiosyncratic events, found ${visibleRiskEvents}`);

    await page.locator('[data-page="market"]').click();
    await page.locator('#marketPeriod').selectOption('ilfs');
    if (await page.locator('#marketReactionCard').isVisible()) throw new Error('Market reaction snapshots should be hidden for IL&FS period');
    if (!(await page.locator('#marketEventsTable tr[data-period="ilfs"]').isVisible())) throw new Error('IL&FS event row did not filter correctly');

    await page.locator('#marketPeriod').selectOption('regulatory');
    if (!(await page.locator('#marketReactionCard').isVisible())) throw new Error('Regulatory market reaction snapshots should be visible');
    await page.waitForFunction(() => document.querySelectorAll('#marketReactionTable tbody tr').length === 3, { timeout: 15000 });

    await page.locator('[data-page="overview"]').click();
    await page.locator('#presentationToggle').click();
    if (!(await page.locator('.app').evaluate(el => el.classList.contains('presenting')))) throw new Error('Presentation mode did not activate');
    await page.locator('#presentationToggle').click();
    if ((await page.locator('.app').evaluate(el => el.classList.contains('presenting')))) throw new Error('Presentation mode did not deactivate');

    if (errors.length) throw new Error('Browser errors: ' + errors.join(' | '));
    await page.screenshot({ path: '/tmp/fra-dashboard-qa.png', fullPage: true });
    console.log(JSON.stringify({ result: 'PASS', sections, bankPeerRows: 4, nbfcPeerRows: 4, historicalRows: 10, visibleRiskEvents }));
  } finally {
    await browser.close();
  }
})();
