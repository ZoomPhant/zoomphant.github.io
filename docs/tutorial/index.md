---
layout: default
title: Quick Start
nav_order: 3
has_children: true
permalink: docs/start
---

# Quick Start
{: .no_toc .header }

----
Starting using ZoomPhant is simple. Below steps will help you to get a community version running up in just one minute.

*Note: The community version is free for personal use only, if you want to use in your business please reach us by emailing to [info@zervice.us](mailto:info@zervice.us)*

1. Find a Linux box with docker installed. (Docker with version 20 or above would be recommended)
2. Open a console and execute **docker run zoomphant/pack:latest**
    * You can also usage image **zoomphant/aio:latest** which would be larger since collector packages are compiled in.
    * If you want to make sure your data be persistent, add -v option to mount /data volume to a local folder, like *docker run -v \<mylocal data path\>:/data zoomphant/pack:latest*
3. Wait few seconds and follow the direction on console to login the service.
    * Depending on your docker settings, you'll need to open a browser page and navigate to an address like http://172.17.0.46, then you can login to the system with initial default user **admin@zervice.local** and password **admin**


Once you have your service running, you can continue to setup your services and start your moniotoring.