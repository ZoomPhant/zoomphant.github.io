---
layout: default
title: 管理功能巡检
parent: 服务性能监控(SPM)
nav_order: 10
grand_parent: 教程
---
# 功能巡检
{:.header}

---
## 内容目录
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 什么是功能巡检?

功能巡检可以让用户快速,便捷的完成对用户服务端的性能数据监控和API监控.  支持周期性的HTTP GET/PUT/POST 等请求来访问1个或者多个页面, 与此同时还支持多种认证方式包括BASIC认证,TOKEN认证. 并且支持页面间数据共享传递. 将来择维士还将支持**多地域多节点**的全方位监控.

![10-telemetry-summary.png](/assets/images/tutorial/spm/10-telemetry-summary.png)

### 采集数据

功能巡检会采集服务端多方位数据.  功能包括但不限于:

- DNS域名解析时间.
- TCP连接时间. 衡量与服务端建立连接的时间.
- 首字节响应时间. 服务端收到请求多久后开始返回响应的时间.该时间不包括建立连接的时间.该时间反应了服务端处理请求所消耗的具体时间.
- 请求状态码校验.
- SSL状态. 包括是否使用SSL, SSL证书有效期检测, SSL弱算法检测.
- SSL连接时间. 包含执行SSL握手时间.
- 请求响应校验. JSON校验, 正则校验, 普通字符校验, XML校验.

![image-20220301112617151](/assets/images/tutorial/spm/10-telemetry-step.png)



## 添加功能巡检

进入功能巡检页面后，可点击“创建功能巡检”添加新的功能巡检

![spm-tele-add](/assets/images/tutorial/spm/spm-tele-add.png)

根据用户账号类型区别，一个功能巡检可以一个或多个步骤,比如如下的针对Bamboo的功能巡检,便包含3个步骤:

![spm-tele-build](/assets/images/tutorial/spm/spm-tele-build.png)

**巡检名称**: 为了让巡检更加方便维护而设置的可读性名称.

**基础路径**: 当前巡检的后续巡检步骤如果设置的是相对路径,便会已该地址作为基础路径进行拼接.

**变量列表**: 这里可以设置一些在该巡检后面步骤中全局可以使用的变量,或者展示在后续步骤中有使用到的变量.

**巡检步骤**: 定义巡检的具体请求流程.

**关键巡检**: 如果是关键巡检会在失败时触发告警.

### 巡检步骤编辑

巡检中主要包含以下部分:

- 步骤名称
- 步骤路径. 步骤的HTTP 请求路径.  可以使用相对路径, 比如/api/version 也可以使用绝对路径如 https://www.bamboo.com/api/version.  不要求必须以基础路径开头.
- 请求设置. 支持POST, GET, PUT, DELETE, HEAD等请求设置, 请求数据支持表单格式和JSON格式.
- 响应匹配. 支持对响应状态码和响应的校验. 校验方式包括: 文本校验, JSON校验,XML 校验.
- 变量定义. 支持将响应中的部分数据提取并设置为变量,后续步骤可通过${varName}调用该变量. 

![spm-tele-step](/assets/images/tutorial/spm/spm-tele-step.png)


### 响应匹配部分

我们支持对响应状态码, 响应标头,响应内容的多方位检测. 其中针对响应内容,支持json格式和普通文本格式的检查. 其中操作符包括:等于,不等于,包含,不包含,匹配正则表达式,不匹配正则表达式等等.

如果是JSON格式, 请参考[如何使用JSONPath]()

### 变量定义

为了方便的在同一巡检的多个步骤间传递可能的重要信息,我们支持将响应标头或者响应内容的部分通过json或者正则表达式提取其中的值并且设置为一个变量,便于后续步骤中可以访问.

如下图示例:

变量名为:myKbPlanKey,  从响应内容中提取, 将响应内容解析为JSON格式,并提取满足表达式`$.plans[?(@.planKey contains 'KB-')].planKey` 作为该变量的值. 该表达式含义是: 根对象中key为plans的数组中, 满足数组中对象的key为planKey,值包含KB-的对象的planKey作为变量的值.  在后续步骤中可以通过`${myKbPlanKey}` 引用该值.

![spm-tele-var](/assets/images/tutorial/spm/spm-tele-var.png)



### 巡检测试

如果需要可以单步测试巡检来调整或者定位巡检设置问题(您同时可以通过查看返回的响应标头,响应内容和提取到的变量值来查看是否符合预期):

![spm-tele-test](/assets/images/tutorial/spm/spm-tele-test.png)

继续阅读：
* [服务安全]({{ site.baseurl }}{% link docs/tutorial/spm/05-spm-security.md %})