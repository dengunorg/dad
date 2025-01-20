## Security Principles

Basic standards to prevent hacking of WordPress-based websites:

- Disable **theme and file editor** in backoffice
  - See [this tutorial](https://www.wpbeginner.com/wp-tutorials/how-to-disable-theme-and-plugin-editors-from-wordpress-admin-panel/)
- Escape rendered content (including translations)
  - Configure PHP CodeSniffer with WordPress Coding Standards
  - Check [Wordpress tutorial](https://developer.wordpress.org/apis/security/escaping/) on which escaping function to use
- [Sanitize inputs](https://developer.wordpress.org/apis/security/sanitizing/)
