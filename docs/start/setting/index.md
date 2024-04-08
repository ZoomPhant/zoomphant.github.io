---
layout: default
title: Setting Up System
parent: Quick Start
nav_order: 1
---

# Setting Up
{: .no_toc .header }

----
Once you signed into the system for the first time, the system will ask you to finish a 5-step setup wizard to help you familar with the system as well as getting all the functions running.

1. Config Server: you need to provide basic information about the server information, which is used to to generate various email templates in the system and provide other important information for providing services to your users
2. Alert Delivery Settings: You need to setup your first alert delivery chain. The first alert delivery chain will be the default alert delivery chain, so when an alert happens, the notifications will be send to the targets as you given in the chain. You can jump to  [Alerting & Notifications](../../manual/00_alert)  for more details.
2. Add First Monitoring Service: This is an optional step, it will help to add a network monitoring service to get familiar with the system quickly. After you have finished this step, you may check  [Monitoring Service](../../manual/01_service)  for more.
2. Add An Infrastructure Monitoring: This is an optional step, it will introduce you to an advanced but important concept,  [Data Collectors](../../manual/02_collector) , the host running the data collector is monitored by an infrastructure monitoring service.
2. Add First Log Monitoring: This is an optional step. ZoomPhant is more than just performance monitoring, it could also handle logs and events and this step will help to try create a log monitoring to expand you knowledge in monitoring. You can find more information here about [Log Monitoring](../../manual/03_log).

Once you have finished all those steps, congratulations, you have your monitoring system running and you can play with ZoomPhant further by reading  [ZoomPhant References](../../manual) gradually!
