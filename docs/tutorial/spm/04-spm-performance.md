---
layout: default
title: 性能指标
parent: 服务性能监控(SPM)
nav_order: 4
grand_parent: 教程
---
# 性能指标
{:.header}
---
性能指标页面体现服务性能情况，即前面章节[服务性能监控(SPM)]({{ site.baseurl }}{% link docs/about/zp/10spm.md %})中提到的"企业服务访问性能"

![spm-5.png](/assets/images/tutorial/spm/spm-5.png)

汇总数据部分包含如下性能数据：
- 性能评分：当前服务的性能评分
- 网页大小：对于网站服务来说，这个指标表示加载完成网页的大小
- 平均响应时间：从发送请求，到服务端返回消息的平均时间
- 响应时间：从发送请求，到服务端返回消息的时间
- 平均加载时间：从发送请求，到内容加载完成的平均时间，对于网站服务来说，包括HTML,CSS,图像，Javascript文件等的加载时间
- 加载时间：从发送请求，到内容加载完成的平均时间，对于网站服务来说，包括HTML,CSS,图像，Javascript文件等的时间

具体的性能数据部分包含如下性能数据：
- 加载时间：从发送请求，到内容加载完成的平均时间，对于网站服务来说，包括HTML,CSS,图像，Javascript文件等的时间
- 响应时间：从发送请求，到服务端返回消息的时间
- 首字节响应时间：TTFB(Time To First Byte)，是最初的网络请求被发起到从服务器接收到第一个字节的时间，包含了TCP连接时间，发送HTTP请求时间和获得响应消息第一个字节的时间
- 最大内容渲染时间：从发送请求到渲染完成最大可见内容元素所需的时间
- TCP连接时间：建立TCP连接所需时间
- DNS域名解析时间：完成域名到IP地址解析的时间

继续阅读：
* [功能巡检]({{ site.baseurl }}{% link docs/tutorial/spm/10-spm-telemetry.md %})