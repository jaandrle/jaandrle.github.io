# Jan Andrle – Personal sites / Blog
This document covers building and managing my pages with [Jekyll](#jekyll). There are two main sections [my blogging info setup](#this-instance) and [general info](#general).

## Corrent progress/state
- [Technická část](https://github.com/jaandrle/jaandrle.github.io/projects/2?fullscreen=true) for technical beckground.
- [Správa příspěvků](https://github.com/jaandrle/jaandrle.github.io/projects/1?fullscreen=true) for posts progress.

## This instance
The `master` (`main`) branch reflects current public state of web page. There are some helpers/setups for speed up blogging.

### Pages/Posts options
The default options are saved in [_config.yml](./_config.yml).

| option            	| available 	| default / [R]equired      	| description                                                                                                                                                	|
|-------------------	|-----------	|----------------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| layout            	| all       	| default                    	| See [_layouts](./_layouts)                                                                                                                                 	|
| -\|\|-            	| posts     	| post                       	| -\|\|-                                                                                                                                                     	|
| in_menu           	| pages     	| null                       	| The name of item to show in page side menu/list                                                                                                            	|
| excerpt_separator 	| posts     	| `<!--more-->`                	|                                                                                                                                                            	|
| permalink         	| all       	| [R]                        	|                                                                                                                                                            	|
| -\|\|-            	| posts     	| /blog/:year-:month/:title/ 	|                                                                                                                                                            	|
| **title**         	| all       	| [R]                        	| Page/Post name                                                                                                                                             	|
| **category**      	| all       	| [R]                        	| See [blog](./blog) – mainly *(non)dev*                                                                                                                     	|
| **tags**          	| posts     	|                            	| List of tags, eg. `[tag_1]`                                                                                                                              	|
| show_toc          	| all       	| 0                          	| Headline level deep to generating TOC, see [_includes/show_toc.html](./_includes/show_toc.html)                                                            	|
| reference         	| posts     	|                            	| See [_includes/references_list.html](./_includes/references_list.html)                                                                                     	|
| redirect_from     	| all       	|                            	| See [jekyll/jekyll-redirect-from: Seamlessly specify multiple redirections URLs for your pages and posts.](https://github.com/jekyll/jekyll-redirect-from) 	|
| noindex           	| all       	| null                       	| See [robots.txt](./robots.txt) and [sitemap.xml](./sitemap.xml).                                                                                           	|
| date              	| all       	| based on filename           	| In form `YYYY-MM-DD HH:MM:SS`                                                                                                                              	|
| updated           	| posts     	|                           	| In form `YYYY-MM-DD`                                                                                                                              	|

### Helpers
In general `{% include file ...options %}` with standarized options
- `href`, `src` for links/images/…
- `title`, `alt` for links/images/…
- `caption` for description (eg. `<figcaption>`)
- `file`s
    - [`{% include code.html …`](./_includes/code.html)
    - [`{% include icon.html …`](./_includes/icon.html)
    - [`{% include image.html …`](./_includes/image.html)
    - [`{% include reference.html …`](./_includes/reference.html)
    - [`{% include kbd.html …`](./_includes/kbd.html)

### Automation
See [Schedule to Publish Future Posts](https://github.com/jaandrle/jaandrle.github.io/issues/65).

## General
### Jekyll
**Jekyll** is a static site generator that's perfect for GitHub hosted blogs ([Jekyll Repository](https://github.com/jekyll/jekyll)). The [**Build A Blog With Jekyll And GitHub Pages**](http://www.smashingmagazine.com/2014/08/01/build-blog-jekyll-github-pages/) article can be good accsess point for those interested in using it for their own blog.

### Local Development
1. Prerequisite, see [Installation | Jekyll • Simple, blog-aware, static sites](https://jekyllrb.com/docs/installation/).
1. Install Jekyll and plug-ins in one fell swoop. `gem install github-pages` This mirrors the plug-ins used by GitHub Pages on your local machine including Jekyll, Sass, etc.
1. Clone down your fork `git clone https://github.com/yourusername/yourusername.github.io.git`
1. Serve the site and watch for markup/sass changes `jekyll serve`
1. View your website at http://127.0.0.1:4000/
1. Commit any changes and push everything to the master branch of your GitHub user repository. GitHub Pages will then rebuild and serve your website.