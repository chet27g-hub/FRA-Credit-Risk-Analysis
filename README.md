# FRA Credit Risk Intelligence — ICICI Bank vs Bajaj Finance

A six-section financial risk analytics dashboard for the Financial Risk Analytics Group Project 2.

## Dashboard

Open the published dashboard: https://chet27g-hub.github.io/FRA-Credit-Risk-Analysis/

## Structure

1. Research Framework & Institution Selection
2. Peer Benchmarking — FY2026 annual snapshot
3. Growth & Credit Risk Trends — separate standalone/consolidated historical bases
4. Risk Attribution & Stress Events
5. Market Reaction & Correlation — market-return outputs withheld until daily price data is validated
6. Research Conclusions & Methodology

## Canonical data files

- `data/fy2026_peer_snapshot.csv` — primary-source FY2026 peer observations and separately identified FY2027 interim observations. The dashboard reads the FY2026 peer tables and charts from this file.
- `data/historical_credit_risk_working.csv` — legacy historical working series. Values remain provisional until source-to-cell reconciliation; blank cells are not zeros.
- `research/FY2026_SOURCE_REGISTER.md` — source URLs, reporting bases, definitions and verification notes.
- `research/PRESENTATION_SCRIPT_AND_VIVA.md` — 15-minute presentation narrative and faculty viva questions.
- `research/PROJECT_COMPLIANCE_MATRIX.md` — assignment coverage and remaining limitations.

## Reporting-basis rules

- ICICI bank historical ratios are standalone.
- Bajaj historical working ratios are consolidated; FY2026 standalone and consolidated observations are shown separately.
- NBFC RBI GNPA/NNPA and Ind AS Stage 3 are not interchangeable.
- Credit-cost denominators differ by institution and must be reconciled before peer ranking.
- No unverified daily-price or event-study statistic is presented as a finding.

## Run locally

Open `index.html` in a browser. For CSV-driven peer data, use a local static server rather than opening the file directly (browser fetch restrictions apply). GitHub Pages serves the CSV files from the same origin.
