---
layout: default
title: Windows Monitoring
parent: References
nav_order: 20
type: infrastructure
has_children: false
---

# Windows Monitoring
{: .no_toc .header }

----
Lots of enterprises are still heavily relying on Windows servers for their business, as an all-in-one monitoring solution, ZoomPhant would support Windows monitoring from the start!

The first step to do Windows monitoring is to setup one or more Windows data collecting agent. Those agent are can perform both general data collecting tasks as well as supporting many Windows specific collecting tasks using Windows specific mechanisms like WMI, PDH, etc.

## Install Windows Collector

Follow the instructions in  [Install Collectors](../collector/index.md) and choose Windows as underlying infrastructure, you'll be able to install a Windows collector.

In the second step, you need to give basic information of the the Windows system you will need to install the collector on:

![image-20240401145234615](./image-20240401145234615.png)



And in step three, you'll be required to open a Windows command window to execute the command that are shown:

![image-20240401145324845](./image-20240401145324845.png)

If you are using powershell, you could modify the command accordingly before you execute the command

## Understanding Windows Monitoring Data

tbd
