---
sidebar_position: 1
---

# Translations

## Translation functions, what to use

**Summary**: `_e` VS `__` vs `_x` or `_ex`

- use _e('')

**Explanation**: `e` stands for "echo", `x` for "context".

```php
// These two are the same:
<? echo __('translation'); ?>
<?= __('translation') ?>
```

## Domains vs Context

Domains: Area related to the translation, provided in any translation function
Context: Help text to set that translation apart from other contexts requiring another translation
