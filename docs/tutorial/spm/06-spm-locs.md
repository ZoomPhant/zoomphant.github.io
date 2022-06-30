---
layout: default
title: 监测位置
parent: 服务性能监控(SPM)
nav_order: 6
grand_parent: 教程
---
# 监测位置
{:.header}
---

如今的服务都是分布式的部署，还往往需要满足很大地理区域的客户使用要求，因此从监控的角度来说，我们往往需要使用多个跨越不同地理区域和物理网络的监测位置才能对服务的状态进行准确的评估。

SPM 支持用户从不同的监测位置进行监测，也可根据用户自身需要部署私有监测位置（如从企业内部监测内部服务的状态）。

点击监测位置进入SPM监测页面可以看到服务当前所有的监测位置，展开监测位置可以进一步看到监测位置的详细信息，以及该监测位置采集到的和服务相关的各种详细数据，如下图所示：

![spm-locs.png](/assets/images/tutorial/spm/spm-locs.png)

继续阅读：
* [服务事件]({{ site.baseurl }}{% link docs/tutorial/spm/07-spm-events.md %})