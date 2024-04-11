---
layout: default
title: Linux Monitoring
parent: Infrastructure Monitoring
grand_parent: References
nav_order: 10
type: infrastructure
has_children: false
---

# Linux Monitoring
{: .no_toc .header }

Linux monitoring entails a suite of tools designed to monitor the health and performance of Linux servers. We offer two modes for monitoring Linux servers:

- [Deep monitoring by installing collectors on Linux.](.)
- [Monitoring Linux via SNMP. ](../../99_plugins/linux)

## Deep Monitoring by Installing Collectors on Linux

Navigate to the "Monitoring Services" section in the sidebar to access the Service page. Click the "add" button at the top-left corner.

![img.png](img.png)

In the pop-up window, select "Single addition" under "Infrastructures".

![img_1.png](img_1.png)

Next, choose the "Linux" option.

![img_2.png](img_2.png)

Begin by providing a name for the monitoring task. It's essential to differentiate between monitoring tasks for ease of management, especially during alarm occurrences, which aids in quick identification.

In-depth monitoring refers to comprehensive monitoring of Linux servers, encompassing CPU, processes, memory, disk, network, and even security logs. We offer monitoring data at a 1-minute granularity, which is highly recommended in cloud environments like AWS to optimize CloudWatch costs.

![img_3.png](img_3.png)

Click "next" to proceed. Here, you'll need to copy the script and execute it on the Linux server to be monitored. Please note that executing the script requires root privileges.

![img_4.png](img_4.png)

Upon successful script execution, you'll see the following prompt. If the collector fails to download, please verify the External Host configuration in accordance with the Quick Start guide to ensure the Collector Server is enabled. For script execution failures, kindly contact our support team.

![img_5.png](img_5.png)

After successful collector installation, click the "validate" button. Successful validation indicates that the collector has been installed and successfully connected to the server.

![img_6.png](img_6.png)

At this point, you can view the successfully added collector in the Service page.

![img_7.png](img_7.png)


