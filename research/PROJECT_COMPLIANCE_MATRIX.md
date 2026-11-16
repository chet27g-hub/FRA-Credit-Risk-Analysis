# FRA Group Project 2 — assignment compliance and verification matrix

Research cutoff: 16 November 2026  
Repository: https://github.com/chet27g-hub/FRA-Credit-Risk-Analysis  
Website: https://chet27g-hub.github.io/FRA-Credit-Risk-Analysis/

## Current implementation status

| Master-brief requirement | Status | Evidence / remaining work |
|---|---|---|
| Preserve existing website and codebase | Done | Existing single-file HTML/Chart.js implementation retained and extended. |
| Six navigation sections | Done in repository code | Research Framework; Peer Benchmarking; Growth & Credit Risk; Risk Attribution; Stock Market Reaction; Conclusions & Methodology. |
| Opening thesis and three research questions | Done | Added to Research Framework page. |
| Institution profiles and peer rationale | Partial | Profiles and peer groups added; portfolio-mix breakdowns and full latest balance-sheet context remain to be completed. |
| FY2026 ICICI standalone snapshot | Done for headline ratios | GNPA 1.44%, NNPA 0.35%, PCR 75.8%, advances ₹15,53,893 crore; source register includes links and page reference. |
| FY2026 Bajaj standalone snapshot | Done for headline ratios | GNPA 1.27%, NNPA 0.52%, Stage 3 PCR 60%, AUM ₹3,72,986 crore; loan-loss/provision caveat documented. |
| FY2026 peer snapshots | Partial | FY26 snapshot for four banks and four NBFCs added. Definitions differ and are disclosed. Some scale metrics use AUM while Shriram is balance-sheet loans. |
| H1 FY2027 Bajaj update | Done | AUM ₹4,26,879 crore, GNPA 1.33%, NNPA 0.53%, Stage 3 PCR 60%, displayed separately. |
| FY2017–FY2026 ICICI history | Partial | Existing working observations retained; FY17–FY19 gaps and historical source-to-cell audit remain. FY25–FY26 anchors corrected to the supplied official figures. |
| FY2017–FY2026 Bajaj history | Partial | Existing consolidated working series retained; full annual-report reconciliation and separation of RBI NPA vs Ind AS Stage 3 remain. |
| Ten-year historical data for all six peers | Pending | FY21–FY25 chart series remain provisional; annual-report extraction required. |
| Slippages, recoveries, upgrades and write-offs | Pending | Need year-by-year extraction and NPA stock reconciliation from company reports. |
| Comparable credit cost | Pending | Must harmonize numerator and denominator or show separate definitions. |
| Systematic and idiosyncratic risk framework | Partial | COVID-19, IL&FS, monetary/regulatory channels and company-specific RBI events are included; quantified before/after peer effects remain. |
| Stock-market annual series | Partial | Working closes are shown, but corporate-action and exchange-source audit remains incomplete. |
| Event-window abnormal returns | Pending | Requires verified daily adjusted prices, event dates, estimation windows and suitable benchmarks. |
| Correlation and regression | Pending | Requires aligned annual/monthly observations, sufficient sample size and diagnostics. |
| Merger and data-break controls | Partial | Methodology notes included; detailed HDFC merger and Shriram restructuring series adjustments remain. |
| CSV dataset | Partial | FY2026 peer snapshot with 40 rows, sources, units, basis and verification status; not yet the complete ten-year dataset. |
| Source register | Partial | FY2026 primary source register and definitions created; historical year-by-year source citations still needed. |
| Fifteen-minute presentation script | Done as a draft | Script and 24 viva questions are in the companion presentation file. It explicitly avoids unsupported historical and market claims. |
| Mobile / browser / interaction testing | Pending | Repository code structure checked; full browser QA has not been completed. |
| Live GitHub Pages deployment | Not confirmed | Commits are on the default branch. Published URL could not be independently fetched in this session; do not claim live deployment success. |
| Original assignment PDF reconciliation | Pending | Original project PDF was not included with the master prompt. |

## Verification rules used

1. Every FY2026 snapshot identifies standalone or consolidated basis.
2. Missing values are blank, not zero.
3. RBI GNPA/NNPA and Ind AS Stage 3 are kept distinct.
4. Credit-cost ratios are not ranked until their numerators and denominators are reconciled.
5. Annual share-price changes are not represented as event-day abnormal returns.
6. Historical legacy series remain labelled provisional until their original annual-report source and page are verified.
7. The FY2027 interim Bajaj observation is shown separately from FY2026 annual data.

## Remaining critical path

1. Extract FY2017–FY2026 annual-report data for ICICI and Bajaj, then the six peer institutions.
2. Build a source-to-cell audit trail for every historical observation.
3. Reconcile NPA movements: opening stock + additions − recoveries − upgrades − write-offs ± other disclosed adjustments = closing stock.
4. Extract slippage, write-off and credit-cost series with exact company definitions.
5. Obtain adjusted daily stock prices and benchmark data, including corporate actions and dividends.
6. Calculate event-window returns and abnormal returns for pre-specified events.
7. Add charts only after the underlying time series pass validation.
8. Complete desktop/mobile browser QA and confirm the GitHub Pages deployment.

**Project status:** The website structure and FY2026 research layer have been materially improved, but the full project is not yet complete. Historical data verification and market event-study work are the main remaining analytical deliverables.


## Addendum — final execution pass (16 November 2026)

- Replaced the duplicated opening overview with research questions, institution classification and peer-selection rationale only.
- Removed the duplicated overview asset-quality chart and FY26 KPI repetition from Page 1.
- Peer Benchmarking now uses FY2026 annual scorecards and two FY2026 horizontal comparison charts; the previous FY2021–FY2025 hard-coded peer trend charts were removed from this page because they were not source-audited.
- Historical trends now show separate ICICI standalone and Bajaj consolidated working panels; FY2026 standalone movement and FY2027 interim disclosures are separate.
- Removed the unverified annual share-price series, fabricated annual event-return table and unsupported investment-growth narrative. Market reaction remains unquantified until daily adjusted-price data are sourced and validated.
- Replaced conflicting dark/light style overrides with one light design system; added section progress, previous/next controls, keyboard navigation and full-screen presentation mode.
- Added ICICI Q2 FY2027 official asset-quality, NPA additions, recoveries/upgrades and write-off observations to the canonical FY2026 peer CSV as a separately labelled interim period.
- Remaining material gaps: historical FY2017–FY2025 source-to-cell audit, complete slippage/write-off/credit-cost series, and daily-price event study/correlation.


## Historical-series update — ICICI Bank FY2017–FY2019

The historical working CSV now contains source-referenced ICICI standalone GNPA, NNPA and PCR observations for FY2017, FY2018 and FY2019. These complete a ten-year ICICI ratio horizon through FY2026. FY2017–FY2018 figures use ICRA rating disclosures; FY2019 uses the bank's Q4 FY2019 performance review. PCR is explicitly on an excluding technical/prudential write-off basis. FY2020–FY2024 still require full annual-report source-to-cell reconciliation. Bajaj Finance remains a FY2018–FY2026 consolidated working series, with the standalone FY2025–FY2026 comparison shown separately.


## Market-reaction evidence update

Three secondary-source short-term market-reaction snapshots have been added to Page 5: Bajaj Finance after the November 2023 RBI restriction, Bajaj Finance after the May 2024 lifting, and ICICI Bank after the May 2025 penalty. They are labelled as unadjusted observations only. Daily adjusted-price event windows, abnormal returns and statistical correlation remain pending.


## Further risk and credit-flow research update

- Page 3 now includes a fully reconciled ICICI gross NPA stock bridge for FY2025, FY2026 and Q2 FY2027, including gross additions, recoveries/upgrades/others, write-offs and NPA sales.
- Page 4 now covers the 2016–2018 banking NPA recognition cycle, IL&FS liquidity contagion, 2022–2023 monetary tightening, the ICICI Videocon governance controversy, Bajaj Finance FY2025 provision growth and 2025 leadership changes.
- An institution-specific comparison matrix distinguishes governance/credit-approval risk at ICICI from digital-lending compliance at Bajaj Finance.
- Page 5 restores a period selector for Banking NPA Stress, IL&FS, COVID-19, Monetary Tightening and Regulatory Developments. It explicitly shows where no verified price window is available.
- Three secondary-source market reaction snapshots are documented; a full daily adjusted-price event study and correlation analysis remain pending.
