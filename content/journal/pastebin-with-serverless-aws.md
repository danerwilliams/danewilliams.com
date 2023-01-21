---
title: 'Building a pastebin and url shortener with serverless AWS'
description: "I recently set out to build an application with serverless AWS that would visualize imessage chat data in d3. After some digging and learning more about AWS I figured out that my idea wasn't really viable with the exact vision that I had. Not wanting to let the work I put in go to waste, I pivoted to making a pastebin and url shortener instead."
date: '2020-12-23'
---

## Overview

I recently set out to build an application with serverless AWS that would visualize imessage chat data in d3.
After some digging and learning more about AWS I figured out that my idea wasn't really viable with the exact vision that I had.
Not wanting to let the work I put in go to waste, I pivoted to making a pastebin and url shortener instead.
I build it in Python using the [Chalice](https://aws.github.io/chalice/) framework, to develop serverless Lambda function, S3 buckets, and API Gateway that make up the backend of the pastebin.

## Architecture

The general architecture is as follows:

- Frontend client is hosted in the site folder of S3 Bucket
- Communicate with backend via POST requests to the [API Gateway](https://aws.amazon.com/api-gateway/?nc2=h_ql_prod_serv_apig) endpoints, which call [Lambda](https://aws.amazon.com/lambda/?nc2=h_ql_prod_serv_lbd) functions that upload files or generate link forwarding objects in [S3](https://aws.amazon.com/s3/?nc2=h_ql_prod_st_s3) with [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html).

![architecture](/images/pstbin_architecture.jpg)

## Takeaways

Overall this was a great opportunity to learn about serverless cloud computing, which I've heard a lot of hype about recently but not tried out until now.
Aside from bugs I encountered with Chalice, this was extremely straight forward to learn, and incredibly cost effective compared to spinning up an EC2 instance to host a flask server, so I definitely plan to utilize AWS serverless offerings again in the future.

## Next Steps

Especially considering that I encountered some frustrating bugs with Chalice, I would like to experiment with some other serverless frameworks, either for AWS or for Azure. If I'm going to stick within the AWS ecosystem then [AWS SAM](https://github.com/aws/serverless-application-model) would probably be the next thing I try out.
