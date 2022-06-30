---
layout: default
title: 创建服务性能监控(SPM)
parent: 服务性能监控(SPM)
nav_order: 1
grand_parent: 教程
---

# 创建服务性能监控(SPM)
{:.header}
---
## 服务性能监控(SPM)入口
以下部分，我们将通过引导创建一个实际的监控服务开始，逐步介绍SPM的各项功能。

创建服务性能监控(SPM)的入口在"服务监控"页面中，进入系统后点击"服务监控"页面即可进入服务监控页面：

![spm-start.png](/assets/images/tutorial/spm/spm-start.png)

进入服务监控页面后，就可以开始创建您的第一个服务性能监控(SPM)，点击如下图所示的"创建服务监控"，即可出现添加服务的对话框：

![spm-create.png](/assets/images/tutorial/spm/spm-create.png)

## 配置服务性能监控(SPM)基本信息

添加服务对话框如下：

![spm-add.png](/assets/images/tutorial/first/spm_add.png)

创建服务性能监控(SPM)时，有些信息是必须配置的，同时有些信息是可选配置，如下：
- 服务类型：目前主要支持的是http/https类型的服务，如果有其他类型的服务监控需求，可与我们联系
- 服务监控名称：自定义的名称，用来区分不同的服务监控，必须设置
- 服务监控地址：服务地址，即服务的入口地址。如果是网站类服务需要以http/https开头，比如https://www.example.com
- 监测位置：系统提供多个监测位置供选择，根据用户账户类型，也可以部署私有监控位置供选择。根据用户类型的不同，你可以选择一个或多个监测位置，或只能试用系统预置监测位置进行服务监控。

## 服务性能监控(SPM)信息概览
完成服务性能监控(SPM)创建后，在服务监控主页会看到所有服务性能监控(SPM)的状态：

![spm-stats.png](/assets/images/tutorial/spm/spm-stats.png)

点击服务列表，则可看到服务的详细状态：

![spm-list.png](/assets/images/tutorial/spm/spm-list.png)

服务信息包括：
- 服务监控名称：创建服务性能监控(SPM)时自定义的名称
- 服务类型：创建服务性能监控(SPM)时选择的服务类型，比如网站服务等
- 当前状态：服务的当前综合状态
- 历史状态：过去24小时（一天）服务的综合状态历史及变化情况。

继续阅读：
* [健康度]({{ site.baseurl }}{% link docs/tutorial/spm/02-spm-healthy.md %})