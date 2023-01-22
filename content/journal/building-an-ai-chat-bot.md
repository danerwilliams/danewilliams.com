---
title: 'Building an AI chatbot'
description: 'In the Notre Dame CSE slack we have a bot named bobbit which performs many commands providing a lot of entertainment and functionality. I decided that it could be fun to build my own bot for use in my water polo team groupme so that we could easily get information about tournament schedules, pool time openings, etc.'
date: '2020-05-17'
---

## Introduction

In the Notre Dame CSE slack we have a bot named [bobbit](https://github.com/pbui/bobbit) which performs many commands providing a lot of entertainment and functionality.
I decided that it could be fun to build my own bot for use in my water polo team groupme so that we could easily get information about tournament schedules, pool time openings, etc.
This led me down a rabbit hole of python bots where I eventually discovered [ChatterBot](https://github.com/gunthercox/ChatterBot), a machine learning conversational dialog engine for chatbots.
Curious how a bot trained on my friends and I's group chat conversations would behave and speak, my original chatbot project morphed in to a conversational bot trained on only the text conversations of 20 year old college students.
The result is [Pork Chop](https://github.com/danerwilliams/pork-chop), an AI chatbot that is highly entertaining when trained right.
For obvious privacy reasons the neural network created by ChatterBot is not on github and neither is the training data, but all the code my friends and I wrote for training and deploying the bot is on github and is designed to be modular so that someone can easily train Pork Chop to their own conversation data.

## Gathering Data

While I deployed Pork Chop in a groupme conversation, we trained him from 70,000 texts in an imessage group chat.
Getting this data is simpler than you'd think.
Simply navigate to `/Users/yourUsernameHere/Library/Messages/chat.db` where there is a sql database file containing all of the imessages currently on your mac.
From here we isolated the message data from the specific conversation we wanted to pull data from and exported the messages to a single column in a csv.
We found that preprocessing the data was very useful for training Pork Chop especially because with a group chat people's thoughts are pretty scattered which can make things difficult for the ChatterBot algorithm to work with effectively.
The biggest thing for us was eliminating the reacts i.e. 'laughed at "a previous message"', which we simply filtered out by using grep and some regex.

## Using ChatterBot

Chatterbot made training and using your chat bot super simple.
All we had to do was write a function to turn our csv data into a list, and then use ChatterBot's list trainer method which will train based on the data and export the neural network into a .sqlite3 file.
From here all you really need to do is pass a message through the ChatterBot get response function and it will return a string which is Pork Chop's best guess on how to reply based on it's neural net!

## Deployment

For deployment on an AWS server I used flask to handle the post requests sent by GroupMe every time a message is sent in groupme. The [groupme docs](https://dev.groupme.com/tutorials/bots) give pretty clear instructions on how this works. Next I want to work on migrating it from a VM to serverless functions using [AWS Lambda](https://aws.amazon.com/lambda/).
