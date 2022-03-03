---
layout: default
title: 编辑服务性能监控(SPM)
parent: 服务性能监控(SPM)
nav_order: 6
grand_parent: 教程
---
# 编辑服务性能监控(SPM)
{:.header}
---

创建服务性能监控(SPM)时为了简化操作，有些配置项采用了默认值，没有直接暴露出来，完成SPM的创建后，如果对这些信息比较关系，可以通过编辑服务性能监控的方式修改默认值。

![spm-7.png](/assets/images/tutorial/spm/spm-7.png)

![spm-8.png](/assets/images/tutorial/spm/spm-8.png)

基本设置：
- 服务类型：目前主要支持的是http/https类型的服务，如果有其他类型的服务监控需求，可与我们联系，创建后不能修改
- 服务监控名称：自定义的名称，用来区分不同的服务监控，可根据需要修改
- 服务监控地址：服务地址，如果是网站类服务需要以http/https开头，比如https://www.example.com，创建后不能修改
- 告警设置：系统会自动生成相关告警，健康度不健康产生严重告警，健康度亚健康产生警告告警，停工时间超过SLA设置值产生严重告警
    - 告警通知渠道：是否接收告警信息，如果想接收告警信息则可自定义告警通知渠道，见后续章节。如果不想接收告警通知则选择"不通知"
    - 触发策略：是否达到告警条件即产生告警，有3种策略可供选择：立即，持续时间和持续次数
        - 立即：达到告警条件后立即触发告警
        - 持续时间：达到告警条件后持续指定时间后再触发告警
        - 持续次数：连续指定次数达到告警条件后才触发告警，比如设定持续次数为3次，表示连续3次检测都达到触发告警的条件才触发告警
- 服务等级协议(SLA)设置
    - 服务等级协议时间，可根据需要选择SLA的时间范围
    - 最长停工时间，选择时间范围内最长的停工时间，比如要保证3个9(99.9%)则停工时间不能超过8.76小时/年
    - 加载时间(90分位)小于，保证90%的用户加载时间不能超过的时间