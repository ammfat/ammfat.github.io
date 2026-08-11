---
title: Superset that doesn't rot
layer: serving
stack:
  - Apache Superset
  - Python
  - ClickHouse
summary: Programmatic dataset swaps and bulk chart resave across hundreds of charts, with dry-run, apply, and revert.
closed: true
---

When a warehouse schema moves, hundreds of Superset charts become wrong at once. Manual edits do not scale and leave no audit trail.

Built tooling that swaps datasets and bulk-resaves charts with dry-run, apply, and revert — so a migration is a reviewed change instead of a weekend of clicking. The same surface later became an MCP server so an internal AI workspace can inspect and operate Superset without giving agents raw DB credentials.
