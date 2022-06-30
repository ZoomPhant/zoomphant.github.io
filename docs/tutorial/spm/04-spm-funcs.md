---
layout: default
title: 功能巡检
parent: 服务性能监控(SPM)
nav_order: 4
grand_parent: 教程
---
# 功能巡检
{:.header}
---

一个服务所提供的功能一般是由若干粒度更小的功能组成，如
- 登录
- 提交记录
- 删除记录
- 结账，等等

在现实中，往往服务所包含的功能点太多，某个或多个功能点处于异常后往往导致整个服务的功能不可用或不稳定。为了随时确保这些重要的功能点稳定可靠，我们则可以使用功能巡检。

功能巡检帮助对服务的每项核心或关键功能进行定期巡检，以了解该功能的状况，如：
- 功能稳定性
- 功能性能
- 巡检执行状况

下图为一个测试巡检，对Bing的搜索功能进行定期检查：

![spm-funcs.png](/assets/images/tutorial/spm/spm-funcs.png)

展开指定巡检，可以看到详细的巡检执行记录和每次完成状况及相关详情信息：

![spm-func-detail.png](/assets/images/tutorial/spm/spm-func-detail.png)

继续阅读：
* [管理功能巡检]({{ site.baseurl }}{% link docs/tutorial/spm/10-spm-telemetry.md %})
* [服务安全]({{ site.baseurl }}{% link docs/tutorial/spm/05-spm-security.md %})