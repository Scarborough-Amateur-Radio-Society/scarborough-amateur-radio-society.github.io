# g4bp.org – Scarborough Amateur Radio Society website

A static site built with Jekyll and hosted free on GitHub Pages.
There is no database, no login and no server to maintain.

Most day-to-day changes are made by editing one file in `_data/`,
directly on github.com. GitHub rebuilds the site within a minute or two.

## Everyday edits

| To change...           | Edit                       |
|------------------------|----------------------------|
| Events                 | `_data/events.yml`         |
| Silent Keys            | `_data/silent_keys.yml`    |
| Useful links           | `_data/links.yml`          |
| Menu                   | `_data/nav.yml`            |
| Morse exercises        | `_data/morse.yml`          |
| Home page text         | `index.html`               |
| Repeater details       | `repeater.html`            |
| Colours and fonts      | `assets/css/site.css`      |

To edit a file on github.com: open it, click the pencil icon, make the
change, then click **Commit changes**.

YAML is fussy about indentation: use spaces, not tabs, and copy the
layout of an existing entry. If a change breaks the build, GitHub emails
the person who made it and the old version of the site stays up.

Events: dates must be written `"YYYY-MM-DD"` with quotes. Past events
hide themselves automatically, so you don't need to delete them straight away.

Fonts: the site uses each device's built-in fonts (no Google Fonts), so
nothing is loaded from third-party servers. Change them in the `--display`
and `--body` lines at the top of `assets/css/site.css`.

## Before going live

1. **Copy content from the old site** while it is still online:

       wget --mirror --page-requisites --no-parent -e robots=off -P old-site https://www.g4bp.org/

   Then copy into this repository:
   - Morse audio (`day1.mp3` to `day37.mp3`, and `day35a.mp3`) into `assets/audio/morse/`.
     The old site used both `Content/` and `CONTENT/` folders, so check both.
     The Morse page is currently hidden (`published: false` in `morse.html`).
     Once the audio is in, delete that line, add the menu entry back to
     `_data/nav.yml` (`- title: Morse practice` / `  url: /morse/`), and add the
     three old-site Morse redirects back to `404.html` if wanted.
   - Silent Key photos (`M0GAP.jpg`, `M3CTW.jpg`, `PA1AXE.jpg`, `G4GWC.jpg`)
     into `assets/images/silent-keys/`.
   - The whole `Gallery/` folder, as is, into the root of this repository.
     The menu links to `/Gallery/web/Index.html` (capitals matter on GitHub Pages).
   - Any links from the old `useful_links.php` page into `_data/links.yml`.

   The `old-site/` folder is excluded from the build; don't commit it.

2. **Check the facts flagged for checking**
   - Silent Keys marked `# check year` in `_data/silent_keys.yml`.
   - Founding year: 1922, confirmed by the chairman. The 1932 reference on an
     older page of the old site is treated as an error.
   - Repeater locator: the old page said IO94SO, but its own
     coordinates (54.43 N, 0.57 W) give IO94RK, which is what this site shows.

3. **Contact form**: create a free account at formspree.io using the
   secretary's email address, create a form, and replace `YOUR_FORM_ID`
   in `contact.html`. Until then the form won't send.

## Hosting on GitHub Pages

1. Create a GitHub **organisation** for the club (e.g. `g4bp-sars`), not a
   personal account. Make at least two people Owners.
2. Create a repository in it and upload these files.
3. Settings → Pages → Build and deployment → Source: *Deploy from a branch*,
   branch `main`, folder `/ (root)`.
4. Custom domain: `www.g4bp.org` (the `CNAME` file sets this too).
   Tick *Enforce HTTPS* once it becomes available.

## DNS at 123-reg (g4bp.org)

Change only these records. Leave MX, `email`, the two `_domainkey`
records, `_domainconnect`, NS and SOA alone, or club email will break.

| Type  | Name | Value                       |
|-------|------|-----------------------------|
| A     | @    | 185.199.108.153             |
| A     | @    | 185.199.109.153             |
| A     | @    | 185.199.110.153             |
| A     | @    | 185.199.111.153             |
| CNAME | www  | `<organisation>.github.io.` |

Delete the old `A @ 31.125.37.63` and the `A * 31.125.37.63` wildcard.

For g4bp.com, use 123-reg's web forwarding to send it to https://www.g4bp.org.

## Previewing locally (optional)

    gem install bundler jekyll
    jekyll serve

then open http://localhost:4000.

## Accounts the club must keep hold of

- 123-reg (domains g4bp.org and g4bp.com): at least two committee members.
- GitHub organisation: at least two Owners.
- Formspree: registered to the secretary's club email address.
