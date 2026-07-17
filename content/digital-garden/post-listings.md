---
title: Post Listings
seoTitle:
description: All digital garden posts in five different view formats.
tags:
  - nav-exclude
modified: 05-26-2026
created: 05-26-2026
draft: false
---

```base
filters:
  and:
    - "file.inFolder(\"digital-garden\")"
    - "file.name != \"index\""
    - "file.name != \"post-listings\""
    - not:
        - "file.hasTag(\"nav-exclude\")"
properties:
  title:
    displayName: Title
  description:
    displayName: Summary
  note.tags:
    displayName: Tags
  modified:
    displayName: Modified
  created:
    displayName: Created
views:
  - type: table
    name: Table
    sort:
      - property: modified
        direction: DESC
    order:
      - title
      - summary
      - note.tags
      - modified
      - created
    summaries:
      title: Count
  - type: cards
    name: Cards
    sort:
      - property: modified
        direction: DESC
    order:
      - description
      - note.tags
      - modified
  - type: gallery
    name: Gallery
    sort:
      - property: title
        direction: ASC
  - type: list
    name: List
    groupBy:
      property: note.tags
      direction: ASC
    sort:
      - property: modified
        direction: DESC
    order:
      - title
      - description
      - modified
  - type: board
    name: Board
    groupBy:
      property: note.tags
      direction: ASC
    sort:
      - property: modified
        direction: DESC
    order:
      - description
      - modified
```
