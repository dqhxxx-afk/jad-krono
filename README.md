# JAD KRONO 1.0.1 — Copy & Search Fix

This release focuses on two issues reported on the live website:

1. Mobile search appeared not to work when a brand filter was already selected.
2. Several English phrases sounded repetitive, overly formal or AI-written.

## Collection search

- Typing a search now automatically switches the brand filter to **All Watches**.
- Search ignores spaces, slashes and hyphens when matching references.
- Selecting a brand clears the previous search.
- Added a visible **Clear** action.
- Added separate empty states for:
  - no search matches;
  - no watches available for a selected brand;
  - no watches listed at all.
- Search field uses 16 px text on mobile to avoid Safari zoom behaviour.

## Copy rewrite

Rewritten across:

- Home
- Collection
- Services
- About
- Sell Your Watch
- Contact
- FAQ
- Privacy Policy
- Terms & Conditions
- Product details
- 404 page
- SEO metadata

Removed wording such as:

- Private services for collectors
- Private response
- Searches for specific references...
- Private enquiries
- Private sourcing
- Direct response

The replacement copy is shorter and more practical.

## Product data

- Sourcing references no longer display a specific year, condition or set.
- Sourcing cards show only factual reference information.
- Status options in Admin are now:
  - Available
  - Reserved
  - Sourcing
  - Archived

## Build

Production build completed successfully with Next.js 16.2.10.
