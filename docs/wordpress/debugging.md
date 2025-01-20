---
sidebar_position: 4
---

# Debugging

Tricks to optimise local development (without compromising others)

## Debug a docker container

To test docker containers `dockerfile`, or docker-compose, run a temporary docker container and run commands in python.dockerfile individually:

```bash
> docker run --rm -it -v $(pwd):<CONTAINER_VOLUME_PATH> <DOCKER_IMAGE> bash
```

`<CONTAINER_VOLUME_PATH>`: path the current directory should be mapped to in the container (usually "/code", or "code/project_name")

`<DOCKER_IMAGE>`: image from which to create the container

### Examples

```bash
docker run --rm -it -v $(pwd):/code python:2.7.15 bash
docker run --rm -it -v $(pwd):/code/blueskyvillas ruby:2.4 bash
```

## Expose local project with an URL

Useful to:

- Expose project to other web users (fellow developers, clients, etc.)
- Test content that requires a domain name (social network sharing, meta content, SEO...)
- Work around CORS issues

### Process

Use Localtunnel (requires node.js) to expose your project with a custom domain accessible online:

```bash
# e.g.: npx localtunnel -h -p 8000 --subdomain "projectname"
> npx localtunnel -h -p <PORT>(--subdomain <SUBDOMAIN_NAME>)
```

## Plugin Recommendations

See Plugins for more details
