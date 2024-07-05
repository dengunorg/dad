---
sidebar_position: 1
---

# Translations in Wordpress

This document has the following purposes:

- Instruct about and set standards for **code-level translations**
  - Instructions for themes and plugins
  - Best practices for translations
- Facilitate translation plugin selection (per project) 

## Code-level Translations

### How to translate themes or plugins

1. Mark text for translation with the respective domain
2. Create a POT file. We recommend running `wp-cli` (but Poedit is also an option):
   ```php
   
   ```
    

### Principles for Code-level Translations

- **Don't** use variables for translation domains (see why below)
   ```php
   // DON'T
  __('some text', TEXT_DOMAIN_VARIABLE);
  
  // DO
   __('some text', 'theactualdomain');
   ```
- Use `_x` or `_ex` to add context (see "Domain and Context explained" for clarification)


```php
// These two are the same:
<? echo __('translation'); ?>
<?= __('translation') ?>
```

## FAQ

### Why are not variables not valid for domains

As mentioned by the [I18n guide from Wordpress Developer Resources](https://developer.wordpress.org/themes/functionality/internationalization/#add-text-domain-to-strings):

> The text domain should be passed as a string to the localization functions instead of a variable. It allows parsing tools to differentiate between text domains.

As to **why** variables are not valid, it's because tools to make the `pot` file (like `wp i18n make-pot`, or `makepot.php`) don't execute php files, making it impossible to read variables.

For a more in-depth explanation, see [this article by Pascal Birchler](https://pascalbirchler.com/text-domain-wordpress-internationalization/).

### Domain and Context explained

- Domains: Area related to the translation. Always apply a domain on a theme or a plugin
- Context: Help text to avoid mistranslations due to an ambiguous
  - e.g.: "development" has a different meaning based on the context (e.g.: computer science VS real estate), which results in different words in portuguese 

## Sources

- 