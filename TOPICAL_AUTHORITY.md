# Topical Authority — Jemaah.id

## Role and boundary

Jemaah.id is an Indonesian decision-support platform for prospective Hajj and Umrah pilgrims, their families, and licensed travel partners. Its evidence-backed editorial role is to help readers understand pilgrimage pathways, compare packages on like-for-like data, verify organizers and claims, prepare safely, and know what to do when delivery differs from the agreement.

The knowledge layer supports the existing search, comparison, package, agency, verification, review, booking, and partner-product routes. It does not replace Kementerian Agama, Indonesian or Saudi authorities, a licensed PPIU/PIHK, a qualified Hajj/Umrah guide, an Islamic scholar, a clinician, a lawyer, or a financial adviser. Dynamic prices, seats, departure dates, permits, visa rules, health requirements, and service availability belong to verified product data and must be time-stamped. Religious rulings require primary Islamic sources and named scholar review; differences of recognized scholarly opinion must not be flattened into an unattributed answer.

## Evidence audited

- Canonical evidence base: tracked `main` at commit `661325f`; the user's original checkout was not edited because it contained unrelated work.
- Stack and routes: React 19, TypeScript, Vite, React Router; `src/App.tsx` defines 44 route patterns including the catch-all, of which 43 are product/public/account/partner/admin routes.
- Screen inventory: 43 page components under `src/pages`; `PAGES.md` groups them into consumer discovery, partner operations, booking, verification, and specialist workflows.
- Product intent: `stitch/jemaah.id.md` defines an independent comparison platform for safe, transparent, budget-aware Hajj/Umrah decisions, with detailed logistics, accommodation, meals, worship support, legal verification, reviews, and fraud controls.
- Current data state: `src/data/dummyData.ts` contains six mock packages, three mock agencies, two mock bookings, two mock reviews, three mock searches, and two mock documents. These are prototypes, not publishable evidence.
- Crawl/editorial state: no tracked sitemap, `robots.txt`, content collection, blog/article directory, or article route was found. A `site:jemaah.id` search on 23 July 2026 returned no results; live deployment and crawl responses were not independently verified.
- Current primary-source baseline reviewed on 23 July 2026: [UU 14/2025 changing UU 8/2019](https://peraturan.bpk.go.id/Details/331538/uu-no-14-tahun-2025), [Kemenag's official manasik publication](https://dki.kemenag.go.id/informasi/tuntunan-manasik-haji-dan-umrah), [SISKOPATUH certification manual](https://siskopatuh.kemenag.go.id/api-izin/minio/download/pdf/public/manual-siskopatuh-permohonan-sertifikasi.pdf), [Saudi Ministry of Hajj and Umrah's Nusuk Card guidance](https://haj.gov.sa/About-the-ministry/Ministry-initiatives/Nusuk-Card), [Saudi Umrah and Visit Guide announcement](https://haj.gov.sa/fr/Media-Center/Ministry-News/2026/Ministry-of-Hajj-and-Umrah-Invites-Pilgrims-to-Benefit-from-the-Umrah-and-Ziyarah-Guide), and [Kemenkes meningococcal guidance updated 9 April 2026](https://infeksiemerging.kemkes.go.id/index.php/faq-meningokokus/frequently-asked-questions-faq-meningokokus).

## Existing coverage and risks

| Existing URL/pattern | Observed role/problem | Decision | Destination/owner | Verification needed |
|---|---|---|---|---|
| `/`, `/search`, `/popular`, `/package/:id`, `/compare` | Package discovery and comparison UI; current package facts and ratings are mock data | keep | Product routes own inventory, price, availability, and package-level conversion | Replace fixtures with sourced, time-stamped records before public claims |
| `/verification`, `/verified-partners`, `/agency/:id` | Organizer verification and profiles; “verified” is currently a fixture boolean | expand | Product routes own status badges; JEM-04 explains verification method and limitations | Connect to authoritative status evidence and show checked-at date, issuer, and failure state |
| `/hotel/:id`, `/airline/:id` | Entity detail routes are prototypes | keep | Entity routes own current property/flight facts; JEM-08 and JEM-09 teach evaluation | Confirm licensed data source, freshness, attribution, and correction process |
| `/favorites`, `/search-history`, `/saved-comparisons`, `/profile`, `/my-bookings`, `/booking/*` | Personalized account and transaction workflows | noindex | Application layer, not editorial search inventory | Enforce authentication where needed and verify robots meta/header behavior |
| `/partner/*`, `/admin/*`, `/login` | Partner and operational tools | noindex | Private application layer | Verify access control; noindex is not a substitute for authentication |
| `/write-review`, `/partner/reviews`, `/partner/reputation` | Review creation and response workflows; samples are fabricated fixtures | keep | Product routes own user-generated records; JEM-19 owns review literacy | Label prototypes and prohibit mock testimonials on production pages |
| `/faq` | Short product questions; can become an unstructured catch-all | expand | Product FAQ covers platform use only; substantive questions route to article hubs | Prevent duplicate answers that compete with planned articles |
| `/about`, `/contact`, `/privacy`, `/terms`, `/partner` | Corporate, legal, support, and partner acquisition pages | keep | Existing routes | Legal/privacy review and accurate operator identity required before launch |
| No article route, sitemap, or `robots.txt` | Search engines have no explicit editorial discovery layer | manual review | Future article/content architecture and sitemap implementation | Decide framework/content model, canonical rules, sitemap generation, and index policy before publication |
| Mock package, agency, booking, and review data | Plausible names, prices, ratings, permits, and claims may be mistaken for real facts | remove | Development fixtures only | Production build must use clearly labeled demo data or verified records |

## Coverage matrix

| Completeness lens | Topic owners | Coverage decision |
|---|---|---|
| Definition, vocabulary, taxonomy, history | JEM-01, JEM-02, JEM-03 | Explain Hajj/Umrah pathways and Indonesian terminology without turning doctrinal differences into SEO variants |
| Components, attributes, mechanisms, measurement | JEM-05, JEM-08, JEM-09, JEM-10 | Map package fields, evidence provenance, distance, room occupancy, flight, meal, transport, and service metrics |
| Need, readiness, survey, requirements | JEM-01, JEM-12, JEM-13 | Give readiness and support-plan tools; clinicians and scholars own personalized determinations |
| Comparison and selection | JEM-02–JEM-10 | Separate organizer, package, timing, flight, hotel, and service decisions so one query has one owner |
| Budget and procurement | JEM-05, JEM-06, JEM-17 | Cover total cost, payment controls, written agreements, cancellation, and recourse without financial guarantees |
| Preparation | JEM-07, JEM-11–JEM-16 | Cover documents, health, manasik, packing, apps, family coordination, and itinerary load |
| Delivery, operation, handover | JEM-08–JEM-10, JEM-18 | Translate promised services into checkpoints, evidence, escalation, and emergency actions |
| Inspection, diagnosis, repair/replacement | JEM-04, JEM-17–JEM-20 | Verify claims, diagnose delivery gaps, preserve evidence, escalate, review, and close post-trip issues |
| Stakeholders and accessibility | JEM-01, JEM-13, JEM-19 | Distinct paths for pilgrim, family decision-maker, caregiver, older adult, disabled traveler, reviewer, and partner |
| Geography and environment | JEM-07, JEM-12, JEM-15, JEM-18 | Cover Saudi heat, crowds, holy-site logistics, and official services; no city-swapped departure articles |
| Scale, quality level, and service model | JEM-03, JEM-05, JEM-09, JEM-10 | Compare economy/premium, group/private, occupancy, guide ratios, and service evidence without equating price with quality |
| Safety and health | JEM-11–JEM-13, JEM-18 | Medical review, current official requirements, emergency stop conditions, and protection of sensitive documents |
| Failure modes and fraud | JEM-04, JEM-06, JEM-17–JEM-19 | Organizer, payment, contract, delivery, identity, review, and badge failure modes |
| Standards, regulation, and governance | JEM-02, JEM-04, JEM-11, JEM-17, JEM-19 | Date-stamped primary Indonesian/Saudi sources; never infer legal status from a logo or self-claim |
| Environmental impact | JEM-10, JEM-12, JEM-16 | Practical waste, hydration, consumption, medication disposal, and low-waste packing; no unsupported “green pilgrimage” claims |
| Evidence quality and myths | JEM-04, JEM-05, JEM-14, JEM-19 | Claim-to-source rules, recognized scholarly differences, structured review evidence, and correction workflows |
| Fundamentals, how-to, comparison, diagnosis | JEM-01–JEM-20 | Each format has a distinct intent owner and explicit escalation boundary |
| Calculators, checklists, and visual references | JEM-05–JEM-13, JEM-16–JEM-18 | Total-cost worksheet, load map, distance evidence, document matrix, medication plan, packing list, and incident log |
| Case studies | JEM-04, JEM-05, JEM-18, JEM-19 | Only documented, consented cases; never invent outcomes or “real pilgrim” evidence |
| FAQ and glossary | JEM-01 plus topic hubs | Short questions stay inside hubs unless they support a distinct task |
| Commercial support | JEM-03–JEM-10, JEM-17 | Education may link contextually to package/agency routes; product availability and booking stay separate |
| News and trends | JEM-02, JEM-11, JEM-12 | Maintained rule-change notices only; volatile requirements need checked-at dates and expiry/review owners |

## Topical map

| Topic ID | Parent topic | Reader outcome | Required subtopics/questions | Evidence/formats | Boundary | Article target |
|---|---|---|---|---|---|---:|
| JEM-01 | Memahami perjalanan dan kesiapan awal | Distinguish Hajj and Umrah, identify an appropriate pathway, and start a realistic readiness conversation | Hajj versus Umrah; obligation and capability vocabulary; lifecycle from intention to return; readiness dimensions; family decision roles; glossary of Indonesian and Saudi service terms | Kemenag manasik, scholar-reviewed explanations, lifecycle diagram, readiness worksheet | Does not compare Hajj schemes (JEM-02), Umrah packages (JEM-03), or give personal religious/medical eligibility rulings (JEM-12/JEM-14) | 6 |
| JEM-02 | Jalur Haji Indonesia | Understand official Hajj pathways, queues, status evidence, and service differences before committing money | Regular and special pathways; non-quota/visa risk; portion and queue concepts; current cost components; transfer/cancellation administration; PIHK role | Current BPK/Kemenag rules, official process map, comparison matrix, checked-at stamp | Does not sell packages or quote evergreen waiting times/prices; live offers belong to `/package/:id`, organizer checks to JEM-04 | 6 |
| JEM-03 | Memilih paket Umrah | Match a package model to worship goals, time, support needs, and acceptable complexity | Economy/premium; group/private; Ramadan and seasonal packages; first-timer support; Umrah-plus tours; inclusions/exclusions and change conditions | Decision tables, specimen package scope, Kemenag/Saudi official checks, buyer checklist | Does not rank current packages or agencies; those belong to `/search`, `/compare`, and `/agency/:id` | 6 |
| JEM-04 | Legalitas penyelenggara dan pencegahan penipuan | Verify organizer identity and status, distinguish branch/agent claims, and preserve evidence before payment | PPIU/PIHK roles; status check; company identity; agent/branch authority; red flags; claim provenance; incident trail | Current Kemenag/SISKOPATUH evidence, entity-resolution checklist, screenshots with dates, fraud decision tree | Does not declare an organizer fraudulent or provide legal representation; current profiles belong to `/verification` and `/agency/:id` | 6 |
| JEM-05 | Membandingkan paket secara adil | Compare offers using normalized fields, evidence quality, and personal priorities rather than headline price | Apple-to-apple schema; missing values; claim provenance; brochure extraction; weighted decisions; misleading averages; shortlist workflow | Field dictionary, comparison worksheet, annotated brochure, scoring model with sensitivity note | Does not publish current inventory or “best travel” rankings; `/compare` owns live comparisons and JEM-19 owns ratings | 6 |
| JEM-06 | Anggaran, harga, dan pembayaran aman | Estimate total trip exposure and choose safer payment and contingency practices | Headline versus total cost; allowance and add-ons; payment milestones; account-name checks; refunds; insurance scope; emergency reserve | Cost worksheet, contract/payment checklist, official bank/provider evidence, legal/financial review | Does not promise refunds, returns, or affordability and does not replace contract advice; disputes belong to JEM-17 | 6 |
| JEM-07 | Waktu, durasi, dan beban itinerary | Evaluate when to travel and whether an itinerary is physically and operationally realistic | Season and crowds; duration; direct/transit effects; hotel moves; worship/rest balance; Umrah-plus load; itinerary red flags | Timeline diagrams, load scorecard, official seasonal notices, sample itinerary annotation | Does not predict weather/crowds as certainty or teach rituals; health load belongs to JEM-12 and manasik to JEM-14 | 6 |
| JEM-08 | Penerbangan, bagasi, dan bandara | Verify flight promises and prepare for connections, baggage, delays, and airport assistance | Ticket versus reservation; direct/transit; layover; baggage rules; group handling; mobility assistance; disruption evidence | Airline/airport primary sources, PNR evidence guide, connection timeline, baggage checklist | Does not display live schedules or airline profiles; `/airline/:id` owns current facts and JEM-18 owns incident escalation | 6 |
| JEM-09 | Hotel, kamar, dan jarak ke masjid | Judge accommodation by usable access, room reality, and documented location—not labels alone | Star/rating distinctions; walking route versus straight-line distance; room occupancy; hotel changes; lifts/crowds; accessibility; evidence freshness | Map-method diagram, room checklist, hotel primary data, original/consented media | Does not publish current hotel availability or guarantee accessibility; `/hotel/:id` owns entity facts and JEM-13 owns traveler support plans | 6 |
| JEM-10 | Makan, transportasi lokal, dan layanan rombongan | Evaluate everyday service delivery and identify what must be written into the package | Full/half board and boxes; dietary needs; buses/rail; transfer timing; guide/muthawwif roles and ratios; group communication; service checkpoints | Service matrix, menus/specimens, transport primary sources, handover checklist | Does not adjudicate worship rulings or live transport schedules; JEM-14 owns rituals and JEM-18 owns failures in delivery | 6 |
| JEM-11 | Paspor, visa, izin masuk, dan aplikasi resmi | Build a current, secure document path and recognize unsupported visa claims | Passport readiness; name consistency; visa purpose; official processing responsibility; ICV/e-ICV; copies and custody; Nusuk/card/app use | Indonesian/Saudi authority sources, document matrix, redacted examples, checked-at date | Does not guarantee visa issuance, store reader documents, or teach medical requirements; JEM-12 owns health and `/profile` owns secure account functions | 6 |
| JEM-12 | Kesehatan perjalanan Haji dan Umrah | Prepare questions for clinicians, follow current public-health requirements, and recognize stop/escalation conditions | Pre-travel assessment; vaccination; medication; heat and exertion; infection prevention; hydration; acute warning signs; post-travel follow-up | Current Kemenkes/Saudi health sources, clinician review, medication worksheet, emergency card | Education only—no diagnosis, prescription, or “fit to travel” decision; individualized care belongs to licensed clinicians | 6 |
| JEM-13 | Lansia, disabilitas, perempuan, anak, dan pendamping | Design a support plan around function, dignity, worship access, and caregiver capacity | Mobility and wheelchair; chronic needs; sensory/cognitive support; menstruation/pregnancy questions; children; caregiver handoff; accessible hotel/transport | Function-first checklist, clinician and scholar review, accessibility evidence, caregiver plan | Does not promise accommodations or issue medical/religious rulings; hotel evidence is JEM-09, health JEM-12, manasik JEM-14 | 6 |
| JEM-14 | Literasi manasik dan pertanyaan fiqih | Learn the sequence and vocabulary well enough to join qualified manasik and ask precise questions | Ihram/miqat; tawaf; sa'i; tahallul; Hajj sequence; common mistakes; dam/exception questions; recognized differences | Qur'an and authenticated hadith checked by scholar, current Kemenag manasik, diagrams, question prompts | Not a fatwa service or substitute for a guide; disputed/personal cases must be referred to a named qualified scholar | 6 |
| JEM-15 | Adab, orientasi Tanah Suci, dan ziarah | Navigate sacred spaces respectfully while separating worship guidance from tourism claims | Crowd etiquette; mosque orientation; Rawdah/permit; Makkah/Madinah visits; evidence for site claims; photography/privacy; avoiding invented virtues | Saudi official guidance, Kemenag manasik, scholar review, maps and etiquette scenarios | Does not promise access or assign unverified religious merit to places; live permits belong to official apps and rituals to JEM-14 | 6 |
| JEM-16 | Perlengkapan, komunikasi, uang, dan kesiapan rumah | Pack and organize practical systems that reduce avoidable friction without overbuying | Layered packing; ihram/clothing logistics; phone/eSIM; money/cards; labels/emergency contacts; low-waste choices; home/work arrangements | Packing matrix, device checklist, budget guardrail, printable emergency card | Does not endorse vendors or give customs/medical guarantees; documents are JEM-11 and medicines JEM-12 | 6 |
| JEM-17 | Pemesanan, akad layanan, pembatalan, dan pengaduan | Understand written commitments, protect personal data, and escalate contractual problems proportionately | Offer versus contract; receipts; substitutions; cancellation/reschedule; force majeure; data consent; complaint channels; evidence bundle | Current law and terms, clause checklist, incident chronology, legal/privacy review | Not legal representation and no guaranteed remedy; current transaction state belongs to `/booking/:id`, operational emergencies to JEM-18 | 6 |
| JEM-18 | Masalah saat perjalanan dan keadaan darurat | Take calm first actions, contact the right party, and preserve evidence when plans or safety break down | Lost/separated; document loss; illness/injury; missed flights; luggage; hotel/transport failure; unmet package promises; official contacts | Triage cards, authority/provider contacts, incident log, clinician/legal review | Does not replace emergency services, consular help, insurer, or tour leader; post-return claims belong to JEM-20 | 6 |
| JEM-19 | Ulasan, rating, badge, dan kualitas bukti | Interpret platform trust signals and contribute fair, privacy-respecting evidence | Verified-trip definition; granular ratings; sample-size and recency; photos; conflicts; moderation; right of reply; badge provenance and expiry | Methodology disclosure, rating distributions, moderation policy, consent/privacy review | Does not guarantee truth from a badge or host current reviews in articles; `/write-review` and product profiles own records | 6 |
| JEM-20 | Setelah pulang dan penutupan perjalanan | Close health, financial, evidence, privacy, and reflection tasks responsibly | Health follow-up; reconciliation; missing/damaged items; complaint deadlines; fair review; document cleanup; gratitude and sustaining lessons | Post-trip checklist, clinician/legal prompts, review template, scholar-reviewed reflection | Does not diagnose illness, decide disputes, or promise spiritual outcomes; JEM-17 owns formal complaints and JEM-19 owns review methodology | 6 |

## Related-domain opportunities

- Hajj/Umrah organizers can use Jemaah.id's neutral field dictionary when supplying data, but each organizer remains responsible for proof and current status.
- Travel, hotel, airline, health, insurance, and payment domains may provide primary entity data or expert review. Jemaah.id should link to evidence, not copy volatile facts without dates.
- Other Syamsul-owned domains may independently discuss religious travel or consumer safety. That is not same-domain cannibalization; Jemaah.id retains the comparison-and-verification viewpoint.
- No geographic subdomain or city-swapped article program is proposed. Embarkation location belongs in package data unless a genuinely different process, authority, or facility warrants a maintained guide.

## Consolidation plan

1. Preserve product routes and define them as dynamic/entity/application pages, not editorial articles.
2. Remove or unmistakably label mock names, prices, ratings, reviews, permits, distances, and booking records in any public deployment.
3. Add a content model with stable `/panduan/<slug>` routes; reserve all catalog slugs before publishing.
4. Keep `/faq` limited to platform usage and link substantive answers to their owning hub.
5. Add canonical tags, article schema only where accurate, an XML sitemap containing indexable public/editorial URLs, and explicit noindex controls for account, partner, admin, login, and transaction routes.
6. Define verification-badge provenance: source, entity matched, status, checked-at time, expiry/recheck rule, and “unable to verify” state.
7. Require a migration map before changing any route that later gains impressions or backlinks; preserve useful URLs rather than replacing them for wording alone.

## Internal-link architecture

- Create `/panduan` as the editorial directory and one hub per topic. Every catalog article links upward to its topic hub; each hub lists all six children.
- The decision path runs JEM-01 → JEM-02 or JEM-03 → JEM-04 → JEM-05 → JEM-06/JEM-07 → service-detail hubs → JEM-17.
- Preparation runs JEM-11 → JEM-12/JEM-13 → JEM-14/JEM-15 → JEM-16. Safety articles link to JEM-18 emergency actions.
- Product links are contextual: organizer verification education may link to `/verification`; package-selection articles to `/search` or `/compare`; hotel/airline evaluation to entity routes only when real data exists.
- Diagnostic and complaint pages link from symptom → immediate safety action (JEM-18) → evidence/contract path (JEM-17) → post-return closure (JEM-20).
- Review pages link from JEM-19 to live review forms/profiles only after methodology and eligibility are implemented. No fixed “related article” widget should replace semantic in-copy links.

## Evidence and editorial standards

1. **Religious claims:** cite the Qur'an and authenticated hadith with exact references only after verification; use current Kemenag manasik as the Indonesian operational baseline; name the qualified scholar reviewer and review date. Present recognized differences fairly and send individualized cases to a scholar. Never manufacture consensus, virtues, prohibitions, prayers, or hadith grades.
2. **Regulatory claims:** use current BPK/JDIH, Kemenag/BP Haji as applicable, immigration, Saudi Ministry of Hajj and Umrah, Nusuk, airline, and airport sources. Record jurisdiction, effective date, checked-at date, and next review. The July 2026 baseline includes UU 14/2025; recheck before publication.
3. **Health claims:** require Kemenkes/Saudi health authority sources and clinician review. Requirements can change by season and traveler profile. Include red-flag escalation, contraindication prompts, and “not diagnosis/prescription” boundaries.
4. **Commercial and financial claims:** distinguish advertised, contracted, paid, and delivered facts. Do not infer quality from price; do not promise refunds, insurance coverage, seat availability, or savings.
5. **Verification:** a badge is a time-bounded claim about a defined source, not a guarantee of future conduct. Retain source identifiers, match logic, checked-at timestamps, manual-review trail, and correction/appeal paths.
6. **Reviews and media:** publish only consented, attributable, privacy-screened evidence. Never convert prototype testimonials or stock imagery into “real pilgrim” proof. Disclose moderation, incentives, sampling, and right of reply.
7. **Style:** use calm Indonesian, define Arabic/technical terms, respect worship and pilgrim dignity, avoid fear-based conversion, sectarian bait, sensational fraud accusations, and “pasti aman/mabrur/berangkat” promises.
8. **Update cadence:** event-season, visa, vaccine, app, permit, price, and route claims require an owner and expiry. Evergreen articles still receive annual source and broken-link review.

## First bounded publication cluster

Publish 12 connected assets first: JEM-01-01, JEM-01-03, JEM-02-01, JEM-03-01, JEM-04-01, JEM-04-02, JEM-04-04, JEM-05-01, JEM-05-05, JEM-06-01, JEM-11-01, and JEM-12-02. This cluster establishes the Hajj/Umrah decision fork, organizer verification, comparable package data, total-cost literacy, document readiness, and a current-health gate before commercial discovery.

The cluster links from the readiness hub to pathway/package selection, then to verification and comparison, then to cost/documents/health. Success signals are: valid indexation and canonical selection; impressions separated by pathway, verification, comparison, cost, document, and health intent; completion/use of checklists; contextual transitions to `/verification` and `/compare`; qualified queries rather than raw clicks; source-update compliance; and Search Console evidence that two pages are not alternating for the same query.

## Definition of done

- All 20 parent topics have six distinct, evidence-specified catalog briefs and functioning hub/child links.
- Article IDs, titles, and slugs are unique; no slug collides with the 44 current route patterns.
- Every religious, health, legal, visa, safety, and financial page has the required reviewer/source gate and checked-at date.
- Dynamic package/entity facts are sourced, time-stamped, and separated from evergreen education.
- Mock data is absent from public truth claims; verification badges expose provenance and limitations.
- Editorial and product sitemaps/canonicals/noindex rules are tested, including account, booking, partner, admin, and login routes.
- Same-domain overlap is monitored after each wave using query, outline, canonical, and Search Console checks.
- Publication remains bounded: a later wave begins only after the prior wave passes accuracy, indexation, task-completion, and cannibalization review.
