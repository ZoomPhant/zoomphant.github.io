---
layout: default
title: Search
parent: 书写规范
nav_order: 7
---

# Search
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

Just the Docs uses [lunr.js](http://lunrjs.com) to add a client-side search interface powered by a JSON index that Jekyll generates.
All search results are shown in an auto-complete style interface (there is no search results page).
By default, all generated HTML pages are indexed using the following data points:

- Page title
- Page content
- Page URL

## 在配置中启用搜索

在你网站的 `_config.yml`, 开启搜索:

```yaml
# Enable or disable the site search
# Supports true (default) or false
search_enabled: true
```

### 搜索粒度

页面被分割成可以单独搜索的部分。
章节由页面上的标题定义。
每个部分显示在一个单独的搜索结果中。

```yaml
# Split pages into sections that can be searched individually
# Supports 1 - 6, default: 2
search.heading_level: 2
```

### 搜索预览

搜索结果可以包含显示搜索词在特定部分中的位置的预览。

```yaml
# Maximum amount of previews per search result
# Default: 3
search.previews: 3

# Maximum amount of words to display before a matched word in the preview
# Default: 5
search.preview_words_before: 5

# Maximum amount of words to display after a matched word in the preview
# Default: 10
search.preview_words_after: 10
```

### 搜索分词方式

The default is for hyphens to separate tokens in search terms:
`gem-based` is equivalent to `gem based`, matching either word.
To allow search for hyphenated words:

```yaml
# Set the search token separator
# Default: /[\s\-/]+/
# Example: enable support for hyphenated search words
search.tokenizer_separator: /[\s/]+/
```

### 在显示结果中展示 URL

```yaml
# Display the relative url in search results
# Supports true (default) or false
search.rel_url: false
```

### 显示搜索按钮

搜索按钮显示在屏幕的右下角，并在单击时触发搜索输入。

```yaml
# Enable or disable the search button that appears in the bottom right corner of every page
# Supports true or false (default)
search.button: true
```


## Hiding pages from search

Sometimes you might have a page that you don't want to be indexed for the search nor to show up in search results, e.g, a 404 page.
To exclude a page from search, add the `search_exclude: true` parameter to the page's YAML front matter:

#### Example
{: .no_toc }

```yaml
---
layout: default
title: Page not found
nav_exclude: true
search_exclude: true
---
```


## Generate search index when used as a gem

If you use Just the Docs as a remote theme, you do not need the following steps.

If you use the theme as a gem, you must initialize the search by running this `rake` command that comes with `just-the-docs`:

```bash
$ bundle exec just-the-docs rake search:init
```

This command creates the `assets/js/zzzz-search-data.json` file that Jekyll uses to create your search index.
Alternatively, you can create the file manually with [this content]({{ site.github.repository_url }}/blob/master/assets/js/zzzz-search-data.json).
