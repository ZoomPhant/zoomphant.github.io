---
layout: default
title: 告警规则管理
parent: 异常告警
nav_order: 4
grand_parent: 教程
---

# 告警规则管理
{: .header}

---

## 内容目录
{: .no_toc .text-delta }

1. TOC
{:toc}

---

针对专业用户，还可以通过侧边栏的 *设置* -> *告警管理* 对告警规则进行管理，也可以在这里创建自定义的告警配置。

![](/assets/images/tutorial/alert/sidebar-alert-manage.png)

## 告警配置管理页面
该页面仅展示自行创建的告警配置。自动创建的告警配置，如服务性能监控的告警配置，不会在该列表显示。

![](/assets/images/tutorial/alert/alert-rule-manage.png)

## 新建自定义告警配置
点击页面左上方的"创建告警配置"按钮，开始创建自定义告警

![](/assets/images/tutorial/alert/alert-custom-create.png)

首先填写"告警配置名称"，然后通过下面的提示一步一步选择所需的指标。选择到指标后可以在图上直接看到基于当前过滤条件的指标。

![](/assets/images/tutorial/alert/alert-custom-create-2.png)

如果确定，就点击"选定为指标"按钮，就将该指标选定。此时，可以点击回"过滤指标"继续选定新的指标。也可以点击"添加表达式"对当前已经选定好的指标进行计算。

![](/assets/images/tutorial/alert/alert-custom-create-3.png)

有多个指标的情况下，通过最左边的单选按钮选择最终要用作告警的数据

![](/assets/images/tutorial/alert/alert-custom-create-4.png)

最后，选择到"告警设置"页，配置好阈值，通知渠道，告警描述等，点击确定即可

![](/assets/images/tutorial/alert/alert-custom-create-5.png)
