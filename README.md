# JAD KRONO Next.js V9 Social Contact Upgrade

V9 updates the official social/contact links and improves the contact section.

## Updated

- Facebook Page updated to:
  https://www.facebook.com/share/1BjRy9MPKg/?mibextid=wwXIfr
- No WeChat added
- WhatsApp kept as primary enquiry channel
- Instagram kept
- Email kept
- Contact panel upgraded
- Structured data Facebook URL updated

## Upload to GitHub

Upload the contents of this folder to your GitHub repository root:

- app/
- components/
- data/
- public/
- package.json
- next.config.js
- README.md
- .gitignore

Do not upload the parent folder itself.

## Change social links later

Edit:

`data/site.js`

Look for:

```js
export const site = {
  whatsapp: "...",
  email: "...",
  instagram: "...",
  facebook: "..."
}
```
