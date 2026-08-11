---
title: ClickHouse at 5+ TiB/day
layer: storage
layers:
  - ingestion
  - storage
stack:
  - ClickHouse
  - Apache NiFi
  - Apache Kafka
  - Hadoop CDP
  - SFTP
  - Scraping pipelines
  - Ansible
summary: Production ClickHouse warehouse — migration, failure recovery, and replication repair at multi-tebibyte daily ingest.
closed: true
---

Built and operated a ClickHouse warehouse ingesting **5+ TiB/day** from Kafka, SFTP, Hadoop CDP, and scraping pipelines, fed by **300+ Apache NiFi** flows for ingestion, marts, and self-monitoring.

The hard parts were operational: migrating to replicated engines without stranding consumers, recovering from node failures, repairing replication mismatches, and restoring from backup when the cluster lied about its own health. Generated data-quality views so problems showed up as queryable facts instead of Slack archaeology.

This is the work behind the ClickHouse Certified Developer ladder; from Associate through Professional, and finally to Advanced.
