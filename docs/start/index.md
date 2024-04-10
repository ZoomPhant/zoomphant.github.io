---
layout: default
title: Quick Start
nav_order: 3
has_children: false
---

# Quick Start
{: .no_toc .header }

----
Starting using ZoomPhant is simple. Below steps will help you to get a community version running up in just one minute.

*Note: The community version is free for personal use only, if you want to use in your business please reach us by emailing to [info@zervice.us](mailto:info@zervice.us)*

## Local Deployment

To deploy locally, ensure your environment has Docker 20+ installed. For stable performance, it's recommended to allocate 2 CPU cores and 8GB of free memory. Then, start with the following command:

```bash
docker run --hostname zoomphant -d -v /root/data:/data -p 8080:80 --name zoomphant zoomphant/pack:latest
```
- `--hostname zoomphant`: Avoid the hostname of the container changed each time it restarts.
- `-v /root/data:/data`: Specifies the persistent data storage directory. You can modify it as needed. Failure to configure this will result in data loss after container restart.
- `-p 8080:80`: Sets the external port. Default external port is 80, if you want to set the port to other like 8080, you can add this param.
- `--name zoomphant`: Sets the container name for easy use in docker command.
- Two image options are available: `zoomphant/pack:latest` and `zoomphant/aio:latest`. The former uses collectors directly from GitHub, while the latter integrates the latest collectors into the image, albeit with a larger size.

After the container is started, you can check the logs to see if the system is running:
```bash
docker logs zoomphant
```

When you see the following log, it means the system is running:
```bash
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 System is ready! You can access the service as follows:
     URL: http://172.17.0.36
     User: admin@zervice.local
     Password: admin

 Any question or suggestion, please reach out to info@zervice.us! Enjoy!!!
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
```

If you want to upgrade the system, you can use the following command:
```
#!/bin/bash

echo "Upgrade ..."
docker pull zoomphant/pack:latest
docker stop zoomphant
docker rm zoomphant
docker run --hostname zoomphant -d -v /root/data:/data -p 8080:80 --name zoomphant zoomphant/pack:latest
echo "Upgrade Done!"
exit
```

## Cloud Deployment

For cloud deployment using AWS ECS as an example, follow these steps:

1. Create a Task Definition in ECS and configure the Container:
    - Set the Image URI to `zoomphant/pack:latest`.
    - Map at least port 80 to facilitate UI access and collector data reporting. For example, set Host port to 8080.

![img.png](img.png)

2. Configure Volumes to map `/data` to an EBS volume to ensure data persistence. If you don't add the volume, the data will be lost after restarting the container.

![img_1.png](img_1.png)

3. Launch a Service in a Cluster using the Task Definition.

## Getting Started

Access the system via `http://<your_ip>:8080` in your browser. The default credentials are `admin@zervice.local/admin`. Upon initial login, remember to change the password.

![img_3.png](img_3.png)

Upon login, you'll enter the Wizard page by default. Follow the prompts to configure:

1. **System Configuration**: Configure the system domain name for subsequent alert URLs and new collector installations.
   1. **External Service Host and External Service Port**: Important settings that would be used when a new collector installed. You need to make sure the address can be accessible. If you are in AWS environment, we recommend to use the private IP of the EC2 instance. Then all the network traffic will not be charged. 
   2. **Enable Release Server**: Check it if you are using pack image.

![img_2.png](img_2.png)

2. **Alert Delivery**: Set up Alert Delivery to ensure timely notifications. 
   1. **Delivery Channel**: Configure the method like email, Slack, etc. to send an alert.
   2. **Delivery Chain**: Configure a set of sequential step to use different channels.

![img_5.png](img_5.png)

3. **Creating Monitors**: Utilize the built-in collector to create your first monitor. We use HTTP monitor as an example here for it just need to provide the URL to create the monitor.

![img_6.png](img_6.png)

4. **Infrastructure Monitoring**: If you want to monitor other infrastructure and find it too cumbersome to open SNMP or WMI, you can choose to install a collector. Not only can you monitor that device in more detail today, but you can also collect local log files. Select your desired server type (e.g., Linux) and execute the provided command on the target server to establish monitoring.
   1. You can see the Address in the command line, that's configured in the first step. So you need to make sure it's accessible.
   2. The command should be executed by root user.
   3. If there is no wget command, you can install it by download the installation package manually in the target server and run the option2 command.

![img_4.png](img_4.png)
![img_7.png](img_7.png)

5. **Log Monitoring**: Enable log monitoring by specifying the log file path, ensuring accessibility by the collector. You can use the nginx access log in our system by the built-in collector for a try
   1. We use grok to parse the log. You can change the grok if you changed the nginx log formation.

![img_8.png](img_8.png)

Upon completion, click "Finish Now" to exit the Wizard. You can access monitoring details and manage services from the left sidebar's Services page.

![img_9.png](img_9.png)


