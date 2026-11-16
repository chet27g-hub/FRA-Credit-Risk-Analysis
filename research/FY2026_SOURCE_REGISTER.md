# FRA Group Project 2 — FY2026 verified source register

Research cut-off: 16 November 2026. Period: FY2026 annual observations (31 March 2026), unless stated otherwise.

## Basis and comparability rules

- Bank GNPA/NNPA ratios are reported under RBI bank asset-classification conventions.
- NBFCs may report RBI GNPA/NNPA and Ind AS Stage 3/Net Stage 3 as separate measures. These are not automatically interchangeable.
- All rows in `data/fy2026_peer_snapshot.csv` identify standalone or consolidated basis explicitly.
- Bajaj Finance standalone values (GNPA 1.27%, NNPA 0.52%, Stage 3 PCR 60%, AUM ₹372,986 crore) must not be mixed with consolidated values (GNPA 1.01%, NNPA 0.41%, consolidated AUM ₹509,975 crore).
- Chola reports both revised-RBI NPA ratios (GNPA 4.36%, NNPA 2.87%) and Ind AS Stage 3 ratios (Gross Stage 3 3.05%, Net Stage 3 1.61%, Stage 3 coverage 47.29%). Keep both classifications visible.
- Mahindra Finance FY26 results release gives Stage 3 (3.4%) and Stage 2 (4.8%); do not relabel these as GNPA/NNPA.
- Shriram Finance's FY26 audited standalone filing defines Gross NPA ratio as Gross Stage 3 loans / Gross loans and Net NPA ratio as Net Stage 3 loans / (Gross loans less Stage 3 ECL). Its reported NPA PCR is ECL on Stage 3 / Gross Stage 3.
- Credit-cost denominators differ by institution. Do not compare credit-cost values until each definition and denominator are reconciled.

## Primary source register

| Institution | Source | Relevant disclosure |
|---|---|---|
| ICICI Bank | [FY26 Financial Statements](https://www.icici.bank.in/content/dam/icicibank/managed-assets/docs/investor/annual-reports/2026/icici-bank-2026-financial-statements.pdf) | Standalone GNPA, NNPA and PCR; page 200. FY26 GNPA 1.44%, NNPA 0.35%, PCR 75.8%. |
| ICICI Bank | [FY26 Management Discussion & Analysis](https://www.icici.bank.in/content/dam/icicibank/managed-assets/docs/investor/annual-reports/2026/icici-bank-2026-managements-discussion-and-analysis.pdf) | Standalone assets, advances, deposits, provisions and strategy; page 117 onwards. |
| HDFC Bank | [FY26 Integrated Annual Report](https://www.hdfc.bank.in/telugu/content/dam/hdfcbankpws/in/en/pdf/annual-reports/2025-26/reports/HDFC_Bank_IR26.pdf) | Standalone GNPA 1.15%, NNPA 0.38%, PCR 67.2%, gross advances ₹29,37,166 crore. |
| Axis Bank | [FY26 Integrated Annual Report](https://www.axis.bank.in/annual-reports/2025-2026/index.html) | Standalone GNPA 1.23%, NNPA 0.37%, PCR 70%, gross advances ₹12,33,570 crore. |
| Kotak Mahindra Bank | [Q4 FY26 Investor Presentation](https://www.kotak.bank.in/content/dam/Kotak/investor-relation/governance/governance-sebi-tab/2026/fy26-audited-financial-results-earnings-call/investor-presentation-0205-2026signed.pdf) | Standalone GNPA 1.20%, NNPA 0.25%, PCR 79%; slippages, recoveries, write-offs and credit cost. |
| Bajaj Finance | [Q4 FY26 NSE filing](https://nsearchives.nseindia.com/corporate/BAJFINANCE_29042026163927_BSENSEOUTCOME.pdf) | Audited standalone and consolidated FY26 results. Standalone GNPA 1.27%, NNPA 0.52%, Stage 3 PCR 60%, AUM ₹372,986 crore; loan losses/provisions ₹9,290 crore, or ₹8,523 crore before additional ECL and presentation change. |
| Bajaj Finance | [FY26 Annual Report](https://www.bajajfinserv.in/finance-digital-annual-report-fy26/index.html) | Consolidated FY26 highlights: AUM ₹509,975 crore, GNPA 1.01%, NNPA 0.41%. |
| Cholamandalam | [FY26 Investor Presentation](https://files.cholamandalam.com/Investor_Presentation_Mar2026_6088750f9e.pdf) | Standalone business AUM ₹2,42,630 crore; revised RBI GNPA 4.36%, NNPA 2.87%; Ind AS Gross Stage 3 3.05%, Net Stage 3 1.61%, Stage 3 coverage 47.29%. |
| Shriram Finance | [FY26 audited standalone results](https://cdn.shriramfinance.in/sfl-kalam/files/2026-04/SFL_Quarterly-Results-Standalone-March-2026.pdf) | Standalone GNPA 4.58%, NNPA 2.33%, NPA PCR 50.34%; definitions in Annexure 1, page 13. Loans ₹2,82,452.44 crore on balance sheet. |
| Mahindra Finance | [FY26 results release](https://www.mahindra.com/news-room/press-release/en/financial-results-quarter-4-and-full-year-fy26-standalone-and-consolidated-results) | Standalone Stage 3 3.4%, Stage 2 4.8%, credit cost 1.7% of average total assets, business AUM ₹1,34,096 crore; includes management/labour-code overlays. |

## Verified calculations from primary disclosures

- ICICI standalone GNPA movement: 1.44% − 1.73% = −0.29 percentage points.
- ICICI standalone NNPA movement: 0.35% − 0.42% = −0.07 percentage points.
- ICICI standalone PCR movement: 75.8% − 76.2% = −0.4 percentage points.
- Bajaj standalone GNPA movement: 1.27% − 1.18% = +0.09 percentage points.
- Bajaj standalone NNPA movement: 0.52% − 0.56% = −0.04 percentage points.
- Bajaj standalone AUM growth: (372,986 / 308,832 − 1) × 100 = approximately 20.8%.
- Bajaj standalone loan-loss/provision growth headline: (9,290 / 7,027 − 1) × 100 = approximately 32.2%. Before additional ECL provisions and presentation change, FY26 ₹8,523 crore versus FY25 ₹7,524 crore implies approximately 13.3% growth. Do not attribute the full reported increase to borrower deterioration.

## Known gaps

1. The full FY2017–FY2026 historical series for all eight institutions has not yet been extracted and reconciled from each annual report.
2. Historical slippage, write-off and credit-cost series remain incomplete.
3. FY2026 peer snapshot is not a substitute for ten-year peer trends.
4. HDFC NNPA and some peer historical figures need a page-level audit trail before use in a fully automated chart.
5. Historical adjusted daily market prices, corporate actions, dividends, benchmark series and event windows still require source-level validation.
6. The original assignment PDF was not included with the master prompt; this source register follows the supplied master specification.

Do not remove these limitations until the corresponding source extraction and checks are complete.

## Separate interim observation — Bajaj Finance H1 FY2027 (30 September 2026)

The interim standalone communication reports AUM ₹4,26,879 crore, GNPA 1.33%, NNPA 0.53% and Stage 3 PCR 60%. These observations are shown separately from FY2026 annual figures and must not be blended into FY2026 peer rankings. [Official NSE filing](https://nsearchives.nseindia.com/corporate/BAJFINANCE_07112026162848_Half_yearly_communication_Signed.pdf).


## Interim source update — ICICI Bank Q2 FY2027 (30 September 2026)

[Official Q2 FY2027 performance review](https://www.icici.bank.in/about-us/news-room/2026/performance-review-quarter-ended-september-30-2026)

- Standalone GNPA ratio: 1.20%; NNPA ratio: 0.30%; PCR: 75.0%.
- Standalone advances: ₹18,31,580 crore.
- Gross NPA additions during Q2: ₹4,833 crore.
- Recoveries and upgrades, excluding write-offs and sale: ₹3,620 crore.
- Gross NPA write-offs: ₹1,592 crore.
- Net additions to gross NPAs, excluding write-offs and sale: ₹1,213 crore.

These are quarterly interim observations and are kept separate from FY2026 annual peer comparisons. The additions/recoveries/write-offs figures do not form a complete stock reconciliation without sales and other adjustments.


## Historical ICICI Bank asset-quality series — FY2017 to FY2019

The historical working CSV now includes a source-referenced ICICI standalone GNPA/NNPA/PCR series for FY2017–FY2019:

| FY | GNPA | NNPA | PCR excluding technical/prudential write-offs |
|---|---:|---:|---:|
| FY2017 | 7.89% | 4.89% | 40.2% |
| FY2018 | 8.84% | 4.77% | 48.4% |
| FY2019 | 6.70% | 2.06% | 70.6% |

Sources: [ICRA ICICI Bank rating rationale](https://www.icra.in/Rating/GetRationalReportFilePdf/79066) for FY2017 and [ICRA FY2018 rating rationale](https://www.icra.in/Rating/ShowRationalReportFilePdf/72272); [ICICI Bank Q4 FY2019 performance review](https://www.icici.bank.in/about-us/news-room/2019/news-dadad) for FY2019. PCR values exclude technical/prudential write-offs; do not mix with coverage measures that include them.


## Descriptive market-reaction snapshots (not an event study)

- **16 November 2023 — Bajaj Finance:** [Business Standard](https://www.business-standard.com/markets/news/bajaj-fin-falls-4-as-rbi-bars-lending-under-ecom-insta-emi-card-schemes-123111600189_1.html) reported an approximately 4% intraday fall after the RBI restriction, followed by recovery and a close 1.9% higher. Intraday low and closing return are different measures.
- **3 May 2024 — Bajaj Finance:** [The Indian Express](https://indianexpress.com/article/business/market/bajaj-finance-shares-rally-rbi-lifts-restriction-9305037/) reported a roughly 7.5% early-session rise after the restrictions were lifted.
- **5 May 2025 — ICICI Bank:** [MarketWatch](https://www.marketwatch.com/story/icici-bank-falls-monday-outperforms-competitors-4a6fe256-699094bef78e) reported a 0.21% decline while the Sensex rose 0.37%, following the RBI penalty announcement.

These are secondary-source, unadjusted trading snapshots. They are not close-to-close adjusted returns, abnormal returns or evidence of causation. The full event study remains pending daily adjusted price and matched benchmark data.


## ICICI Bank NPA movement bridge — FY2025, FY2026 and Q2 FY2027

The annual FY2025 and FY2026 movement figures are from the FY2026 Management Discussion & Analysis; the Q2 FY2027 movement is from the [ICICI Q2 FY2027 investor presentation filed with NSE](https://nsearchives.nseindia.in/corporate/ICICI2022_17102026164525_BSENSE17102026.pdf).

| ₹ crore | FY2025 | FY2026 | Q2 FY2027 |
|---|---:|---:|---:|
| Opening gross NPAs | 27,962 | 24,166 | 23,847 |
| Gross additions | 20,211 | 19,147 | 4,833 |
| Recoveries, upgrades and others | (11,763) | (11,492) | (3,620) |
| Net additions before write-offs/sales | 8,448 | 7,655 | 1,213 |
| Write-offs | (9,270) | (8,424) | (1,592) |
| Sale of NPAs | (2,974) | (345) | (133) |
| Closing gross NPAs | 24,166 | 23,052 | 23,335 |

The stock bridge reconciles exactly. Q2 FY2027 ratio measures are based on customer assets; the FY2026 standalone financial-statement GNPA ratio of 1.44% is defined as gross NPA to gross advances. Keep these denominator definitions distinct.

## Risk-event evidence additions

- **2016–2018 banking NPA recognition:** ICICI standalone GNPA was 7.89% in FY2017, 8.84% in FY2018 and 6.70% in FY2019; FY2017–FY2018 values are from ICRA rating rationales and FY2019 from ICICI's Q4 FY2019 performance review.
- **IL&FS, August–September 2018:** RBI documents the default on commercial paper, funding-market risk aversion, higher funding costs and liquidity stress across parts of the NBFC/HFC sector. [RBI Bulletin](https://www.rbi.org.in/scripts/BS_ViewBulletin.aspx?Id=19658) and [RBI Annual Report 2018–19](https://www.rbi.org.in/Scripts/AnnualReportPublications.aspx?Id=1257).
- **Videocon governance controversy, 2018–2019:** the ICICI independent enquiry found code-of-conduct, conflict-of-interest and recusal/disclosure violations; the bank stated the report had no implications for its published financial statements. The loan itself became an NPA; do not treat the full sanctioned amount as a realised loss. [Independent enquiry coverage](https://indianexpress.com/article/india/videocon-loan-case-independent-enquiry-finds-chanda-kochhar-violated-code-of-conduct/).
- **Monetary tightening, May 2022–February 2023:** RBI increased the repo rate cumulatively by 250 bps from 4.0% to 6.5%. [RBI Annual Report 2022–23](https://rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1384).
- **Bajaj Finance FY2025 provisioning:** consolidated loan-loss provisions increased 72% to ₹7,966 crore from ₹4,631 crore, while AUM grew 26%; management cited macro deterioration and increasing leverage on unsecured loans. [Bajaj Finance FY2025 Annual Report](https://www.bajajfinserv.in/finance-digital-annual-report-fy25/bajaj-finance-ltd-ar-2024-25-assets/pdf/annual-report-fy2025.pdf).
- **Bajaj Finance leadership changes, 2025:** Rajeev Jain moved from MD to Vice Chairman on 1 April 2025; Anup Saha became MD and resigned on 21 July 2025, after which Rajeev Jain was re-designated VC & MD. [FY25 corporate information](https://www.bajajfinserv.in/finance-digital-annual-report-fy25/corporate-information.html) and [Q1 FY26 investor presentation](https://cms-assets.bajajfinserv.in/is/content/bajajfinance/bajaj-finance-q1-fy26-investor-presentationpdf?amp%3Bscl=1&fmt=pdf).
