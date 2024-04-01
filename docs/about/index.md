---
layout: default
title: Introduction
parent: About
nav_order: 1
---

# Product Introduction

---

## Why We Initiated This Project?

In our journey of project development, data analysis is an inevitable aspect. With over a decade of experience in the surveillance industry, we encountered a common sentiment among our clientele: "All surveillance software is a mess; we're just sifting through to find the least awful one."

Having experimented with various surveillance systems ourselves, we classified them into generations for better understanding.

### First Generation Surveillance Systems: Locally Deployed Dedicated Systems

Initially, surveillance systems were designed to manage computer systems, providing performance metrics and reporting functionalities. Subsequently, standards and protocols for network management, such as SNMP, emerged, followed by commercial surveillance software like IBM's Netview and HP's OpenView, alongside open-source solutions like Nagios and Zabbix. Despite variations in timing and features, these systems shared common traits:

- Local Deployment: Primarily deployed and managed on local servers, adding to operational overhead instead of streamlining it.
- Singular Purpose: Focused either on monitoring infrastructure performance metrics or network devices.
- Static Configuration: Manual configuration of monitoring parameters and alert rules, lacking flexibility and automation.
- Limited Visualization: Offering basic charts and reports, lacking in-depth analysis and visualization capabilities.

### Second Generation Surveillance Systems: SaaS-based Centralized Management Systems

Emerging in the era of SaaS, these systems addressed the pain points of traditional surveillance systems requiring localized operations. With just a few clicks, users could deploy a surveillance system, exemplified by cloud service providers like Amazon CloudWatch, Google Stackdriver, Microsoft Azure Monitor, and commercial SaaS companies like Datadog, New Relic, and Dynatrace. While promising, these systems incurred high data transmission and storage costs, compelling users to reduce monitored data and shorten its retention in the cloud. Despite advancements in AI data processing, users found themselves devoid of historical data, facing challenges in data exportation or encountering exorbitant export fees. This dilemma was epitomized in headlines like "NASA: We forgot the $30m bandwidth charges!"

### Third Generation Surveillance Systems: Next-Gen Monitoring Systems

Reassessing contemporary monitoring needs, we identified key functionalities that next-gen monitoring systems should embody:

- Data Sovereignty: Empowering users with greater autonomy over data storage, processing, and security. Users should choose to store monitoring data in their own environments for enhanced control over data security and compliance, with standardized data formats facilitating seamless data integration with third-party platforms.
- Cost-effectiveness: Providing more cost-effective solutions than second-generation counterparts, potentially through flexible pricing models, lower overall costs, and enhanced value propositions.
- Autonomous Deployment Options: Offering local deployment or hybrid deployment alongside SaaS models, enabling users to store critical data locally while utilizing cloud storage for non-essential data. This approach reduces users' data storage and transmission costs.

## Features of Zoomphant System

- All-in-One Image Deployment: All components are consolidated into a single image for one-click deployment. Users can effortlessly deploy via Docker locally or through cloud services like AWS ECS.
- Support for Hybrid Deployment: Systems deployed locally can be centrally managed in the cloud by registering with cloud services. Data remains stored locally, with cloud access limited to viewing, thus mitigating data transmission costs and saving on cloud storage fees.
- Standardized Local Data Usage: Metric storage utilizes Prometheus format, while log storage follows Loki format, facilitating seamless integration with various data analytics platforms without constraints.
- Built-in Visual Collector Task Management: UI interface enables direct configuration for data retrieval without the need for manual configuration files, with plugin extensions available for fetching arbitrary data.

