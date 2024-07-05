---
sidebar_position: 1
---

# Coding Style

Our standards for consistent and less error-prone coding in Wordpress environments

## Our style

We mostly follow [Wordpress Coding Standards for PHP](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/), with some changes (see below)

## Configuration

1. Install Composer in your local project (see a composer.json file)
2.
3. For VSCode, we recommend installing [PHP Sniffer and Beautifier](https://marketplace.visualstudio.com/items?itemName=ValeryanM.vscode-phpsab), for it's already prepared for local environment

## Changes from WordPress Coding Standards

We **disabled** the following Rules:

- [Long array syntax](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/#declaring-arrays)
- [Yoda Conditions](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/#yoda-conditions)
- Invalid character in inline comments (`Squiz.Commenting.InlineComment.InvalidEndChar`
)

### Why adapt the WordPress Coding Standards?

- Some rules are to ensure compatibility with older PHP versions (before v8); for most of our projects, this is not a problem
- We don't relate with the visual improvements it provides (e.g.: long notation array, full stops in inline comments)

## Additional rules (unrelated to )

Prefer `const` over `define`, unless:

- using an old version of PHP (below 8)
- you need conditionals

See [this stackoverflow thread](docs/wordpress/assets-caching.md)
 but with the following changes (or motivations).

## Motivation

- ensure code consistency
- set automatic formatting (thus saving time)
