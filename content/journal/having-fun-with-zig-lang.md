---
title: 'Having fun with zig lang'
description: 'Some fellow Notre Dame CS students made the awesome pbui-project, the POSIX-compliant BSD/Linux Userland Implementation, which is a userland implementation written entirely in zig. Out of curiosity for trying out zig I decided to make a small pull request implementing the pwd command. '
date: '2020-05-08'
---

## Introduction

Some fellow Notre Dame CS students made the awesome [pbui-project](https://github.com/pbui-project/pbui-main), the POSIX-compliant BSD/Linux Userland Implementation, which is a userland implementation written entirely in [zig](https://ziglang.org/). Out of curiosity for trying out zig I decided to make a small [pull request](https://github.com/pbui-project/pbui-main/pull/86) implementing the pwd command.

## Thoughts on Zig

Since I had next to no background knowledge on zig programming, there was a lot less time coding and a lot more time spent reading documentation.
Unfourtunately, I think that documentation might be Zig's greatest flaw, as I actually found a typo in the documentation at one point, and just navigating the docs was a lot more difficult than it probably needs to be.
That being said, there are a lot of positives I saw in zig, even for the brief amount of time I spent working with it.
The coolest feature from zig to me has to be how it handles [undefined behavior](https://ziglang.org/documentation/master/#Undefined-Behavior).
Especially as a newcomer to the language I found that mistakes I was making which led to undefined behavior were super easy to catch as it would be caught during compile time and really easy to figure out based on the corresponding error message.
I also like how zig does its [variables](https://ziglang.org/documentation/master/#Primitive-Types). I think that this part of the syntax is actually really nice although a bit unusual compared to any other strongly typed language I've worked with. The types are simply way more descriptive and don't ever leave me asking myself "how many bits is a long unsigned int" and needing to waste a minute on google.
In general, I think that zig has a lot of potential, but for how young it is and the docs being pretty bad I will probably hold off on working more with it for a while. In the meantime I think I would rather continue developing competency in C, and maybe trying out rust or go.
