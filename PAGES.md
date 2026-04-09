# Jemaah.id Sitemap & Page Documentation

This document maps the UI screens from the `stitch/` directory to their respective functional modules.

## 1. Consumer (Jamaah) App/Web
Focuses on searching, comparing, and managing personal pilgrimage plans.

| Page Name | Folder Reference | Description |
| :--- | :--- | :--- |
| **Home Screen (Mobile/Desktop)** | `home_screen`, `desktop_home_screen` | Entry point with featured packages and smart search. |
| **Search Results & Filters** | `search_results_filters`, `search_results_filters_desktop` | Package discovery with detailed criteria. |
| **Search Empty State** | `search_results_empty_state` | Fallback when no results match criteria. |
| **Package Detail** | `package_profile_detail`, `package_profile_detail_desktop` | Comprehensive day-by-day itinerary and hotel verification. |
| **Comparison Engine** | `comparison_engine_desktop`, `competitor_comparison_deep_dive` | Side-by-side analysis of up to 4 packages. |
| **My Favorites** | `my_favorites`, `my_favorites_empty_state` | Saved packages for later review. |
| **Search History** | `search_history`, `search_history_empty_state` | Quick access to previous search parameters. |
| **User Profile & Docs** | `user_profile_updated_documents_section`, `upload_documents` | Management of traveler documents (Passport, etc.). |
| **My Bookings** | `my_bookings_history` | History of past and upcoming trips. |
| **Write Review** | `write_a_review_granular_ratings` | Verified review submission with detailed metrics. |

## 2. Travel Agency (Partner) Portal
The dashboard for agencies to manage their business and packages.

| Page Name | Folder Reference | Description |
| :--- | :--- | :--- |
| **Partner Dashboard** | `b2b_partner_portal_dashboard`, `b2b_partner_portal_dashboard_updated` | Overview of performance, leads, and financials. |
| **Agency Profile** | `agency_profile_view`, `agency_profile_desktop` | Public-facing agency profile and ratings. |
| **Package Management** | `package_management_dashboard` | List and status of all published packages. |
| **Add Package Wizard** | `add_new_package_step_1` to `add_new_package_step_4_review_publish` | Multi-step "Anti-Ngawur" package creation flow. |
| **Booking Leads** | `booking_leads_dashboard` | Management of potential customer inquiries. |
| **Agency Financials** | `agency_financials_dashboard` | Commission tracking and revenue reports. |
| **Market Analytics** | `market_analytics_dashboard` | Insights into competitor pricing and user behavior. |
| **Reputation Management** | `reputation_management_report`, `reviews_dashboard` | Analysis of user sentiment and review responses. |
| **Agency Verification** | `agency_verification_claim_flow`, `agency_profile_reviews_tab_desktop` | Onboarding and legal document submission. |

## 3. Booking & Transaction Flows
The critical path from interest to confirmed payment.

| Page Name | Folder Reference | Description |
| :--- | :--- | :--- |
| **Select Room** | `booking_select_room` | Selection of Quad/Triple/Double room types. |
| **Passenger Details** | `booking_passenger_details` | Data entry for all travelers in the group. |
| **Booking Summary** | `booking_summary` | Final review of pricing and inclusions. |
| **Payment Confirmation** | `booking_payment_confirmation` | Success/Pending state after payment. |
| **Booking Details** | `booking_details` | Post-booking management (itinerary, tickets). |

## 4. Operational & Verification Modules
Backend tools for system integrity and manual verification.

| Page Name | Folder Reference | Description |
| :--- | :--- | :--- |
| **Claims Queue** | `claims_queue_dashboard` | Admin interface for agency claim approvals. |
| **AI Brochure Scanner** | `ai_brochure_scanner_upload`, `ai_scan_results_review_add_agency` | Tool to extract package data from image brochures. |
| **Verified Partner Directory** | `verified_partner_directory` | Master list of all verified travel agencies. |
| **Certificate View** | `view_certificate_dashboard`, `document_verified_success` | Display and validation of legal certifications. |

## 5. Specialized Interaction Flows
| Page Name | Folder Reference | Description |
| :--- | :--- | :--- |
| **Passport Interaction** | `passport_upload_interaction` | UX for capturing and verifying passport data. |
| **Claim Success** | `claim_success_package_verified` | Feedback loop after package verification. |
| **Saved Comparisons** | `saved_comparisons`, `saved_comparisons_empty_state` | Persistent storage of comparison results. |
