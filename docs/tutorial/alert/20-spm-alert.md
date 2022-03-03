---
layout: default
title: 服务性能监控告警
parent: 异常告警
nav_order: 2
grand_parent: 教程
---

# 服务性能监控告警
{: .header}

---

## 内容目录
{: .no_toc .text-delta }

1. TOC
{:toc}

---

数象智云会为每一个服务性能监控自动创建告警，你所需要的仅仅是设置一下通知谁。

## 新建服务性能监控
创建服务监控时，系统会自动为你创建一个异常告警，用于在该服务无法访问或访问超时时通知你。你仅仅需要配置一下通知谁。如无告警通知渠道，请参阅 
* [通知渠道]({{ site.baseurl }}{% link docs/tutorial/alert/10-alert-channel.md %})

![](/assets/images/tutorial/alert/spm-alert-create.png)

## 编辑服务性能监控
如果你想要改变默认的告警阈值，可以在服务监控创建好后，点击编辑服务监控来进行修改。
在编辑页面，除了能看到通知渠道外，还能对加载时间和最长停工时间进行配置。

![img.png](/assets/images/tutorial/alert/alert-spm-update.png)
