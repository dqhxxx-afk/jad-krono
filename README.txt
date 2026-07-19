JAD KRONO 1.1.7 SITEWIDE AUDIT PATCH

Changes:
- Home: removes redundant small section labels and keeps one headline per section.
- About: removes the numbered Listings / Viewings / Transactions template cards.
- Contact: removes the duplicate WhatsApp button from the intro and simplifies the copy.
- Services: replaces passive, template-like wording with direct dealer language.
- Sell Your Watch: clarifies that the date is the date on the card or papers.
- FAQ: shortens repetitive and passive answers.
- Product detail: hides generic descriptions and duplicate reference rows.
- SEO/schema: standardises the primary domain to https://www.jadkrono.com.
- Adds site-audit.css as a separate override file for safer merging.

Not changed:
- data/watches.json
- stock list, product names, prices or quantities
- MB&F
- Admin or Supabase
- DNS, SSL, favicon or images

Safe deploy:
Copy the listed files into the matching folders in the repository.
Replace individual files only. Do not Replace the whole app folder.
Commit: Apply sitewide copy and page audit
