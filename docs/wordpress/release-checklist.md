---
sidebar_position: 2
---

# Project Release — Checklist

**Purposes**:

- ensure a release goes as smoothly as possible (without hiccups)
- identify issues, to act fast and accordingly
- set a precendent for other projects, and make further releases faster

## First Release

### Response team

Are team members ready to respond to a last-minute intervention? This includes:

- System administrator
- The lead developer (to coordinate, do hotfixes, and post-release updates)
- Project manager (to coordinate the team and update the client)
- QA testers (to test the website, with or without automated tests)
- Marketing/content specialist (for SEO and meta content)
- Are there additional procedures outlined in the project's README file?

### Infrastructure

- does sysadmin have enough info on hosting? (production URL, hosting machine, etc.)
- Is there a project backup ready? (of code, content, and data)
- Are we using the latest possible (and **tested**) PHP version and Wordpress version?
- Are plugins updated to the latest versions matching this project's WordPress version?
    - and were they tested beforehand?
- Is the infrastructure ready for the expected caching mechanisms (e.g.: is Redis installed? Is Zend OpCache set up)
- Server: Prepare production configuration files and pipelines
    - this includes final domain and media upload URLs
    - in Wordpress, that's `wp-config.php`
- Set up proper caching (based on what the Infrastructure allows). This includes:
    - Pages (useful for Elementor websites, for example)
    - OpCache (Zend OpCache, by default)
    - Object cache (e.g.: with Redis)
    - Asset caching (only if needed, as browsers already do that)
- Is e-mail set up? Do we have a way to check for successful e-mails send or received, like FluentSMTP?
- Do a database backup (you can set up a plugin for Database Backups)
- Install a debugging plugin to test queries, check server configurations, and check warnings (which must be
  fixed)

### Assets

- are scripts and stylesheets optimized and configured for cache-busting?
- are images optimized (or a project set)
- do we have a cookie consent policy set up? (usually by a plugin)

### Content & SEO

- Is database content and uploads ready to move to production?
- Is all placeholder content removed?
- Is content SEO-friendly?
    - Is indexable meta content ready?
    - have proper h1 headings (and ideally, a proper heading structure)
    - meta titles and descriptions
    - meta tags to avoid indexing
    - open graph (if applicable)
    - sitemap and robots.txt
    - redirects
- Are there any pages to NOT release yet (if so, mark them as drafts)
- Is the database optimized (e.g.: removed of post revisions)
- Are there any "testing" accounts removed
- do we have analytics accounts properly set up? (Google Tag Manager, Analytics, Facebook Pixel, etc.)
- Write a list of content updates after the release (e.g.: page content, plugins to disable, etc.)
- Set up cookie consent plugin
- Do we have default pages for:
    - 404 page
    - search results (if not available, omit searchbars until it's developed)

### QA and Performance

After release:

- Follow a plan for common QA scenarios (if any, e.g.: opening a property listing page)
- Test page performance with Google Lighthouse/PageSpeed, on an **anonymous** session
- Test at least one page on Safari and Firefox browsers
- Test navigating on the website on desktop and mobile
- Test the Elementor editor (which tends to break when unexpected stuff occurs)
- Test sharing a page on a social network
- Check for console errors
- Test authentication (can you access the backoffice with your account?)

## Ongoing/recurrent releases

Focus on:

- Recurrent QA and Performance
- Project-specific **release instructions** (if any, see project's README)
- Cleaning up server-side cache (e.g.: from WP Rocket)
- Doing post-release routines (e.g.: update content, publish content, sync data structures)
