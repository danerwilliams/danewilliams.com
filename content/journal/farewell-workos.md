---
title: 'Farewell, WorkOS'
description: 'Adapted from LinkedIn. Today is very bittersweet as it is my final day at WorkOS. This is the company that took a chance hiring me when I was a new grad, and I could not be more grateful for the opportunity.'
date: '2023-12-15'
---

Adapted from [LinkedIn](https://www.linkedin.com/posts/danerwilliams_today-is-very-bittersweet-as-it-is-my-final-activity-7141456876898025472-U4EJ?utm_source=share&utm_medium=member_desktop).

Today is very bittersweet as it is my final day at WorkOS.

This is the company that took a chance hiring me when I was a new grad, and I could not be more grateful for the opportunity.

I truly believe I have worked with some of the most talented colleagues in the industry these past two years and hope to cross paths with you all again one day.
It has been a distinct pleasure of mine to learn from such a remarkable group of people.
I am incredibly thankful for each of you.

## How it all began

When I first heard of WorkOS, I was entering my senior year at Notre Dame, and [Zeno Rocha](https://zenorocha.com) had just announced that he would be departing Liferay after several years to join WorkOS as the VP of Developer Experience.
I always had a curiosity for startups and was looking at opportunities post-graduation.
WorkOS only was advertising senior engineering roles at the time, but I'm a strong believer in "the worst case is they say no", so I sent a long-shot email to Zeno inquiring about roles anyways.

> Hi Zeno, I saw your LinkedIn post about opportunities at WorkOS. I help maintain the dracula theme tmux project and am very interested in potential roles. Attached is my resume for your reference. Let me know if there are any roles you feel would be a good fit, excited to see all that WorkOS has in store!

I was overjoyed when Zeno got back to me!

> Hey Dane, It's so nice to hear from you. The tmux theme is one of my favorite and it would be awesome to work full-time with a fellow vampire 😆 Let's have a call so we can finally meet each other? Feel free to book some time this week

From there we kicked things off and I was eventually introduced to [Mark Tran](https://www.linkedin.com/in/marktran) who was WorkOS' first employee and my manager for my first year at the company.

A couple of months later I had finished our interview process, met many other members of the team, and signed my offer!
By January 2022 I had finished up at Notre Dame and began my full-time career as a software engineer!

## A few learnings

Since then, it has been an incredible journey. I've learned more than I could possibly list here. Alas, here are a few takeaways I have:

### Earn trust

During my time at WorkOS, I was the only new grad engineer on the team.
Most of my colleagues were former staff-level engineers at companies like Stripe, Auth0, and Lyft.
This meant I had a lot to prove, and I quickly realized that proving myself meant earning the trust of other ICs and leadership.

There are a few ways I found myself earning the trust of leadership and IC colleagues:

**1. Just get stuff done**:
I came across an interview clip of President Obama recently, where he gives some career advice: ["just learn how to get stuff done"](https://www.tiktok.com/@linkedin/video/7256866367763270958).
There's not a better way to say it.
Raise your hand to take on lots of work, and then actually do it.

**2. Put aside the ego**:
Admittedly, there is way more work to be done at a startup than anyone could complete.
If you're getting lots of stuff done, you'll probably find yourself in a situation where you suddenly realize you signed up for more work than you can handle.
That's OK!
Be honest with your colleagues and managers in those situations and ask for help.
I promise you that a manager would much rather be told you don't think something is going to get done on time than be in for a surprise because you're trying to be a hero, especially when they already think of you as someone who gets stuff done.

**3. Leave no doubt**:
Engineers with 10+ years of experience shouldn't immediately trust a 23-year-old who graduated from college less than 2 years ago.
That is why you need to leave no doubt.
**Prove that you're way better than what is expected.**
You're asked to have a feature complete by Friday?
Finish it by Thursday.
Explaining how a complex bug works?
Cite your sources with links back to the codebase.
Claiming that customers would use a certain feature?
Provide customer data and conversations as proof.

### Publish demos early

My first project at WorkOS failed initially.

We had a meeting called "Design Weekly" at the time with management and our CEO involved.
In the meeting, we would scrutinize projects before they shipped to ensure they met our high bar for quality.

The designer I was working with at the time and I presented what we had worked on, a feature for allowing teams to create a Slack channel with our customer support directly from the WorkOS dashboard.
Unfortunately, it got torn apart.
The project was killed after that meeting, although we resurrected it a few quarters later.

Needless to say, I was pretty discouraged after that experience.
I was determined to ensure my next project would not suffer the same fate.
So I planned to get feedback as early as possible in the development process.

To some degree, we had already done that with the Slack project.
We published an RFC outlining exactly what we wanted to build and how we planned to build it, and it was well received!
However, I learned that many people who later had things to say about the project did not pay attention to the original RFC.

I needed to **earn their attention**.
And this is where the demo comes in.

Everyone loves a demo, and if you're doing it right, you should demo a prototype before you've built anything real.
That's because people pay attention to demos, a short 5-minute video of you showing off a shiny new feature is going to get some views.
After people watch the demo, you'll then receive criticism that you can now address early on before writing production code.
Continue posting these throughout the project's lifecycle and it will have a far greater chance of succeeding.

If that isn't enough to convince you to start posting demos, they're also a great way to promote your work and yourself!

### Tech debt is not always bad

After my first couple of quarters at WorkOS I became very familiar with our monorepo and started asking more questions.
_"This seems wrong, why don't we fix it?"_
The answer, it turns out, is almost always, _"We don't have time right now."_
There's nothing wrong with that!

I think about tech debt the same way you would financial debt.
Sometimes unintuitively, you want a reasonable amount of it.
If you're going to buy a home, you probably want a mortgage if you can get a reasonable rate.
That's because you could purchase the home now, and have more capital left over to invest in other markets that will yield a return.

The same idea applies to technical debt.
Say that we have a fictional to-do list app and we want to add reminder notifications to it.
The most scalable and maintainable way to build this could be to build a service that queries our database for upcoming tasks and sends them off to a message queue like Kafka where the reminders can be processed in another notification service.
That's a lot of work though, and we don't have any other notifications to process at the moment.
Instead, we could punt on building out those services, and simply write a cron job that occasionally queries our database and delivers the appropriate notifications.

Much like the mortgage example, this might slow us down a little bit in the short term.
We have to make a monthly mortgage payment, and we have to work with a messy codebase that could also run into scalability issues in the future.
But we saved a couple of months' worth of work and now can spend that time building a new task-filtering feature instead.
And for our mortgage, the $X we took out as a loan with a 4% interest rate can now be invested into the S&P 500 to generate a 7% annual return.

All of this is just another way of saying, [do things that don't scale](http://paulgraham.com/ds.html).

### Leverage yourself

When I left WorkOS I was the 2nd most tenured engineer in the company out of ~30.

I quickly realized that made me extremely valuable to my colleagues in certain situations and vice versa.

I could most effectively leverage myself when helping onboard new teammates, sharing context on past decisions, giving tours of the codebase and product, etc.
This is because very few people in the company knew as much about WorkOS as I did.
I worked with experienced engineers who are highly knowledgeable about being a software engineer in general, therefore transferring WorkOS-specific knowledge allowed those people to have a huge impact.

On the other hand, many of my colleagues effectively leveraged themselves by sharing more general technical knowledge with me.
For example, some amazing colleagues of mine on our infrastructure team spent a lot of time teaching me how to use Datadog.
Combining that with my WorkOS-specific knowledge made me highly effective at managing incidents and availability.

### Be creative

One of the great things about working at a startup is that you never have someone telling you to stay in your lane.
If you're curious about something and can make the time to explore it, no one is going to stop you.
I had some great opportunities to embrace curiosity and be creative during my time working on the Admin Portal.

Every startup says that you need to understand users, and WorkOS is no exception.
However, sometimes your users aren't so easy to learn about.
Learning about Admin Portal users was a real challenge.

For context, the Admin Portal is a product used to configure and maintain enterprise features built with WorkOS.
Meaning that it is used by our customers' customers, who are usually IT admins.

We didn't have contact with Admin Portal users directly, so we had to get creative:

- Queried to find which of our customers were using each other's products so that we could talk to their IT admins
- Joined IT admin forums like [Mac Admins](https://www.macadmins.org/)
- Attended meet-ups to get introduced to IT admins in real life
- Observed IT admin user sessions in [Datadog RUM](https://www.datadoghq.com/product/real-user-monitoring/)
- Built dashboards with customers' customers' demographic info enriched by [Clearbit](https://clearbit.com/)

There may not always be a clear path given to you when solving a problem (such as learning about customers' customers).
Embrace your curiosity and explore whatever leads you can come up with, you'll be surprised by the results you might yield.

## What comes next

Something else I learned during my time at WorkOS that I have not mentioned yet is _what I want to do with my life_.
While it would be foolish to think I know that now, I do have significantly more clarity.
Most importantly, I know the next step I want to take in my journey.

Career discernment is an underrated aspect of a first job.
One reason I chose to work at a growth-stage startup out of school is I knew I'd get broad exposure to the business.

At WorkOS I got to see what it's like to work in product and engineering, but even got a little exposure to other aspects of the business like sales.
I learned that I love having a hand in everything.

Pair this with my hyper-competitive nature and belief in the ["stress is enhancing" mindset](https://www.hubermanlab.com/episode/how-to-enhance-performance-and-learning-by-applying-a-growth-mindset), and I've realized that becoming a founder or working at a very early-stage startup is a great fit for my interests and goals.

For the next couple of weeks, I'll be spending time with family and friends, as well as hacking on some side projects.

After New Year's I'll be joining something new.
We haven't launched yet so I can't say too much publicly at this time, but I'm excited to share more soon. 🙂
