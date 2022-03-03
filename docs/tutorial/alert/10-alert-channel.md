---
layout: default
title: 通知渠道
parent: 异常告警
nav_order: 1
grand_parent: 教程
---

# 通知渠道
{: .header}

---

## 内容目录
{: .no_toc .text-delta }

1. TOC
{:toc}

---

通知渠道用于预定义在异常发生时，通过何种方式通知哪些人进行处理。通知渠道在侧边栏的 *设置* -> *告警渠道* 中进行设置

![](/assets/images/tutorial/alert/sidebar-alert-channel.png)

目前我们支持下面几种通知方式：
* 邮件
* 短信
* webhook

如需其他方式，请联系客服。

## 新建通知渠道
在告警渠道管理页面，点击左上角的创建告警渠道，即可创建一个新的通知渠道。

![](/assets/images/tutorial/alert/alert-channel-create.png)

* 告警渠道的名称：
  用于描述该告警渠道，建议使用易于理解的方式。无需将渠道类型写在里面，系统会在选择时自动提示。
* 默认渠道：
  仅能选择一个通知渠道为默认，在创建异常告警时，界面上会默认预选择为该渠道。
* 告警渠道类型：
  根据选择的不同类型，下面会分别添加 *电子邮件*，*电话号码*，和 *webhook地址*
  
* 告警渠道描述：
  对告警渠道名称的补充说明，方便告警渠道的管理。
  
* 测试：
  为了确认通知能确实地送达，点击测试按钮会给该渠道的所有人发送一个测试的通知消息。
  
## 编辑通知渠道
在添加了告警渠道后，可以在告警渠道管理页面上看到所有渠道的列表，点击*编辑* ![img.png](/assets/images/tutorial/alert/icon-edit.png) 图标即可对该告警渠道进行编辑。

![](/assets/images/tutorial/alert/alert-channel-update.png)

