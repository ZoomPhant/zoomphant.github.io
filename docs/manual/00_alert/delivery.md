---
layout: default
title: Alert Delivery
parent: Alerting & Notifications
grand_parent: References
nav_order: 1
type: basic
has_children: false
---

# Alert Delivery

{: .no_toc .header }

----

In ZoomPhant, alerts are delivered using an **alert delivery chain**. The chain consists of one or more stages, with each stage be called an **alert delivery channel**. An alert delivery channel can appear in multiple in mulitple alert delivery channels. Following diagram can give you a rough idea about alert delivery chains and alert delivery channels.

![image-20240406175018998](/Users/ning/work/zpm/zpdocs/docs/manual/00_alert/image-20240406175018998.png)

Here user defines few alert delivery channels, with each channel contains one or more recipients. The alert delivery channels can be used by one or more alert delivery chains.

### Create Alert Delivery Channel

