---
title: 'My first open source contribution! (dracula/tmux)'
description: 'Recently I have begun using the awesome dracula theme for most of my development tools. Unfortunately, one of my favorite tools, tmux did not have a dracula theme (until now).'
date: '2020-04-09'
---

## Introduction

Recently I have begun using the awesome [dracula theme](https://draculatheme.com/) for most of my development tools.
Unfortunately, one of my favorite tools, [tmux](https://github.com/tmux/tmux/wiki) did not have a dracula theme (until now).

## Methodology

A couple weeks ago, towards the beginning of corona virus quarantine here in the Bay Area, I decided to take it upon myself to develop a dracula theme extension for tmux while I had a bit of extra time due to Notre Dame going online.
Mostly I just wanted to have a tmux environment that would match my vim, vs code, slack, and terminal.app theme.
Something else that was important to me in designing the theme though was to make sure that it would be entirely plug and play.
My goal was to make it as easy as adding a line to your .tmux.conf and the rest would be handled by your plugin manager such as tpm.

## Features

Ultimately, I decided I wanted a few things displayed in my tmux status bar:

- Date / time information
- Network information
- Laptop battery percentage and charging status
- Current location and weather
- Prefix activation status

## Implementation

Most of this was relatively easy to implement as I already had experience with bash scripting.
I mostly just had to find some of the commands for changing tmux configurations.

- Date / time: This was extremely easy. There is built in functionality for including date / time information to the tmux status bar.
- Prefix activation: Similarly easy as date/time for the same reasons
- Battery: Getting battery information was not terribly difficult. But it did take a decent bit of troubleshooting. Ultimately I settled on using a Unix pipeline that retrieved the relevant information and then displays that in the status bar.
- SSID: Very similar to battery. Create a unix pipeline to retrieve the information and then include it in the tmux status bar.
- Weather: This was by far the most challenging. Basically the solution I ended up with uses ipinfo.io to retrieve current location data and then I scrape weather information from a government site with US weather data.

## Challenges

A challenge I ran into with the weather was the limit on requests I could recieve with out needing to authenticate on ipinfo.io.
For the other features of the status bar, I needed to have a fairly frequent refresh rate (it is currently 5 seconds).
However, at that rate I would run out of requests after just several minutes of usage.
There is no native solution for tmux to have different refresh rates for different parts of the status bar, so I needed to do a little bit of hackery to make things work.
I added a wrapper script that would run my script for gaining weather information every 20 minutes while tmux is open.
Then, in the main file which runs the entire extension every time you start tmux, I run the wrapper script and have it's output redirected to a weather.txt file.
Instead of calling the the script to be outputted to the status bar, I simply `cat weather.txt` instead.
Now the file is catted every 5 seconds as the refresh rate is going to match the rest of the status bar, but I only really update it every 20 minutes in order to use a reasonable number of API calls because the wrapper function only updates weather.txt every 20 minutes!

## Deployment

Deploying the extension was super easy as tmux plugin manager automatically will pull it from a github account when you add the appropriate line to your .tmux.conf

## Open Source

The coolest part of this project was getting added to the official dracula theme.
I noticed some random github users star and fork my theme, so I figured I would post a link to my repo on the official dracula theme page where there was an open issue requesting for a tmux theme.
The next morning I woke up to an issue opened on my repo from the founder of dracula asking me if I would like to transfer the repo to the official dracula organization and become the maintainer.
Of course, I was super stoked and said yes right away!
Now that it is part of the actual dracula organization I have been able to get significantly more exposure to my project and have had several issues opened asking for new features and have already merged three pull requests too.
Watching people from around the world contribute to something I made is definitely a really fulfulling and cool experience, so it's safe to say I absolutely want to continue getting more involved with open source.

## Check It Out!

You can checkout my page on the official dracula website and the github repo below :)  
[draculatheme.com/tmux](https://draculatheme.com/tmux)  
[github.com/dracula/tmux](https://github.com/dracula/tmux)
