---
title: HIMSIKA Event Feedback Analysis
layer: orchestration
layers:
  - orchestration
  - storage
  - analytics
stack:
  - Apache Airflow
  - BigQuery
  - Looker Studio
repo: https://github.com/ammfat/himsika-event-feedback-analysis
summary: End-to-end event feedback pipeline. Bringing unstandardized scattered data with Airflow to BigQuery, and landed as analytical dashboard on Looker Studio.
closed: false
---

Student-organization feedback collected, transformed, and published. Airflow orchestrates the load into BigQuery; Looker Studio surfaces the results so organizers can act without waiting on a one-off spreadsheet.