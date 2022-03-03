---
layout: default
title: 服务性能监控(SPM)
parent: 教程
nav_order: 3
has_children: true
---

# 服务性能监控(SPM)
{: .header}
---

## 关于服务性能监控(SPM)
前面部分已经解释说明了服务性能监控(Service Performance Monitoring，简写SPM)的含义和主要功能，可参考[服务性能监控(SPM)]({{ site.baseurl }}{% link docs/about/zp/10spm.md %})。

## 服务性能监控(SPM)的组成
![spm-0.png](/assets/images/tutorial/spm/spm-0.png)

在介绍如何创建服务性能监控(SPM)前，先介绍下服务性能监控(SPM)的界面体现，有个总体印象，每个部分的具体细节在后续章节中会详细介绍：
- 健康度：衡量服务健康状态的指标，是一个综合性的指标，由三个状态组成：健康，亚健康和不健康
- 状态指标：体现服务是否在线，即前面章节[服务性能监控(SPM)]({{ site.baseurl }}{% link docs/about/zp/10spm.md %})中提到的"企业服务可达性"，同时SLA的信息也在这个页面中
- 功能巡检：检测服务的功能情况，即前面章节[服务性能监控(SPM)]({{ site.baseurl }}{% link docs/about/zp/10spm.md %})中提到的"企业服务可用性"
- 性能指标：体现服务性能情况，即前面章节[服务性能监控(SPM)]({{ site.baseurl }}{% link docs/about/zp/10spm.md %})中提到的"企业服务访问性能"
