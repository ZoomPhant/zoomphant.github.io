---
layout: default
title: 状态指标
parent: 服务性能监控(SPM)
nav_order: 3
grand_parent: 教程
---
# 状态指标
{:.header}
---
状态指标页面体现服务是否在线以及SLA的相关信息，即前面章节[服务性能监控(SPM)]({{ site.baseurl }}{% link docs/about/zp/10spm.md %})中提到的"企业服务可达性"。

![spm-4.png](/assets/images/tutorial/spm/spm-4.png)

状态指标页面包括三个方面：
- 上面的总体状态栏显示4个状态相关的信息
    - 服务的当前健康度信息
        - 健康
        - 亚健康
        - 不健康
    - 服务的创建时间
    - 服务在选择时间范围内的停工时间
    - 服务的服务等级协议(SLA)，可在服务监控编辑页面中根据需要修改SLA默认配置
        - 达标
        - 不达标
- 中间部分是服务的响应时间实时图形
    - 图形右上角显示选择时间范围内的最大响应时间，最小响应时间和平均响应时间方便查看
    - 图形底部显示服务在线和停工的时间区间
- 下面部分的表格显示每次请求的响应情况

继续阅读：
* [性能指标]({{ site.baseurl }}{% link docs/tutorial/spm/04-spm-performance.md %})