When running a slow project, I ventured a bit through the database, only to figure out that we had a lot of redundant
post revisions.
In fact, I figured out that even a **revision is a post type** — Indeed, pretty much everything is a post type in
Wordpress!

So I'd like to share some of the basic MySQL skills I put to practice:

### The queries in question

> **NOTE**: `WP_PREFIX` refers to the wordpress table prefix

## Group articles by their number of revisions

Figure out which posts have the most revisions:

```sql
SELECT post_parent, COUNT(*) as n_revisions
from wordpress.WP_PREFIX_posts
WHERE post_type = "revision"
GROUP BY post_parent
ORDER BY -n_revisions;
```

In my case, I figured out that the header (and then the footer) Elementor templates were the ones with the most
revisions (I didn't even realize that they were posts to begin with!)

-### Remove all revisions from items that have more than 10 revisions

```sql
DELETE
FROM wordpress.WP_PREFIX_posts
WHERE post_parent IN (SELECT post_parent
                      FROM (SELECT post_parent
                            FROM wordpress.
                                     WP_PREFIX_posts
                            WHERE post_type = "revision"
                            GROUP BY post_parent
                            HAVING COUNT(*)
                                       > 10) AS sub_table);
```

## But why?

This website had already gone down when edited frequently.
According to our system administrator department, it might've been due to the database being overloaded,
so we restricted the number of revisions to 10 per post. But by then, "posts" like the Header and Footer elementor
templates
already had hundreds of revisions (which stuck until they were removed with an optimization plugin).

And the **result**? Cleaning up revisions from this website reduced our database from about 200MB to about 20MB (to 10%
of what it once was)!

If there's a **lesson** to be learned from this, I'd say: **restrict your post revisions from the START of development
**,
otherwise you may end up with too much revisions.