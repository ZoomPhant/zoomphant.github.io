---
layout: default
title: Prometheus Plugins
parent: References
nav_order: 3
has_children: true
---

Prometheus and Grafana are the most widely used open-source monitoring solution, however it is not a complete monitoring solution (cubersome data collecting, alerting & configuration management, etc.). Also maintaining a working prometheus and Grafana stack along with Prometheus scrapers is not an easy task for most of the customers.

ZoomPhant provides a fully compatible way to re-use user's existing Prometheus plugins and Grafana dashboards without managing the Prometheus and Grafana instances. In Promeheus / Grafana world, the data collecting and presentations are separated. In ZoomPhant we can combine those together (plus many other concepts) using **Custom Monitoring Plugins**

This document will guide users to migrate their existing Prometheus / Grafana monitoring plugins to ZoomPhant Custom Monitoring Plugins in just two simple steps:

1. Create a Prometheus scraper compatible monitoring plugin
2. Import matching Grafana dashboards

