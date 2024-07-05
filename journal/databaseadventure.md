- Issue loading a database dump done for Vale do Lobo (Wordpress)
- `ERROR 1064 (42000) at line 12: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '&#039;+00:00&#039; */;`
- After a long while and a lot of VIM-ming through a former valid dump and a new one
    - Realized `&#039;` was `'`
    - Replaced them all with `/%s/&\#39\;/'/g` (first, I used '/gc' instead, to validate my choice as it prompts you)
- Still got errors, because there were probably now `'` in places like messages for postmeta (e.g.: you're)
- Deleted an entry in options (elementor_log), replaced "you're" with "youre", "valentines"...
    - interesting: some `'` were already escaped, some weren't. Prevalent cases were `can't`, `Valentine's`... possibly
      texts translated via translatedpress