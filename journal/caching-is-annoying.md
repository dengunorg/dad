# Caching is annoying

Guess what, I had another cache-related issue that compromised the whole website this week.

Here's the thing about having multiple "caches" (as in "detours to prevent fully requesting a resource"): it's hard to figure out the cause of pending issues.

## Why are caching issues hard to diagnose?

Even though they're usually caused by an update (to the theme or plugin), it might take hours for these issues
to be diagnosed.

## What are the symptoms of caching issues?

- page is not loading at all
- page is taking too long to load, and lacks a lot of styles or widget behaviours (e.g.: popups, menus, etc.)
- it has many CSS resources throwing the `TOO_MANY_REDIRECTS` error (usually from Elementor)
- page raises a critical error (that would've been found immediately, had it not been for caching)

## How to prevent this

A solution to this is undergoing maintenance routine checks. But first, what's considered a **maintenance routine**?

- Regenerate Elementor Assets
  - Elementor (Sidebar) > Tools > Regenerate CSS & Data
- Flush caches for
  - WP Rocket (in `Settings > WP Rocket > Dashboard > Quick Actions > Clear and Preload Cache`)
  - Redis Object Cache (in `Settings > Redis > Flush Cache`)

### When should I clean the cache

- on a major release (outlined in Git, for example)
- when updating Elementor

## Learn more

- [WP Rocket blog](https://wp-rocket.me/blog/err-too-many-redirects)
- [Hostinger tutorial on Too Many Redirects](https://www.hostinger.com/tutorials/how-to-fix-err-too-many-redirects#What_Causes_ERR_TOO_MANY_REDIRECTS)
