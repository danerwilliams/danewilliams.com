---
title: 'Developing an http web server in C'
description: 'As the final project for my systems programming class at Notre Dame my partner, Conor Murphy, and I developed a simple http web server server (similar to nginx). We did this entirely in C, which was a great opportunity to learn about networking specific issues such as commication over sockets,'
date: '2020-05-03'
---

## Introduction

As the final project for my [systems programming](https://www3.nd.edu/~pbui/teaching/cse.20289.sp20/) class at Notre Dame my partner, Conor Murphy, and I developed a simple http web server server (similar to nginx).
We did this entirely in C, which was a great opportunity to learn about networking specific issues such as commication over sockets, as well as low level functions and system calls for memory allocation and file/directory manipulation.

## Development

I'll spare the details here but the development process for this was very reading heavy. There were a lot of new concepts my partner and I needed to familiarize ourselves with, so this developed a strong habit for reading the man pages.  
There were a few areas of focus that we needed to research and mess around with in order to get things up and running:

- Parent/child processes and fork/exec - forking versus single mode for the server
- Sockets - opening a socket and sending/recieving information through that socket
- Browsing directories - crawling a directory to be displayed for the user browsing the contents of the server
- Reading files - determining a file's mimetype and appropriately reading the file based on its type
- File execution - executing cgi scripts and using the popen command
- Memory allocation - malloc/calloc and freeing memory from the heap

## Deployment

We deployed this server on aws which was great for gaining a bit of experience in the cloud. The server is live on port 9898 of an AWS EC2 virtual machine:  
[aws.danewilliams.me:9898](http://aws.danewilliams.me:9898)  
This was a fairly simple process overall since both of us were already well versed with linux and the command line.
The only roadblock we ran in to was figuring the AWS security groups feature which is basically a special Jeff Bezos firewall managed in the AWS console. For a while we couldn't figure out why our server wasn't accessible when there was no firewall turned on in Ubuntu.
It turned out that the default "security group" which wouldn't be visible in the actual VM rather only in the AWS console only allows for traffic through port 22 which is for SSH connections.
Once this was figured out everything else was smooth sailing.

## Takeaways

There were a few key takeaways that stood out to me in this project:

- Git branches are the best - My partner and I were able to get done so much work in parrallel by just working on different branches and then merging changes later in gitlab.
- Use valgrind regularly throughout development - We waited until the very end to test for memory leaks with valgrind and I think this was much more of a headache than it would have been had we tested more regularly throughout the development process.
- learn gdb, it's totally worth it - I can't overstate how much better gdb is for debugging in C than printf("wtf"), well worth my time to have learned it.
