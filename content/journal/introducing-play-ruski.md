---
title: 'Introducing playruski.com'
description: "As a final project for our databases class my friends Jack, Conor, Billy, and I decided to make a web app for a popular sport in our dorm at Notre Dame called Ruski. I won't get into the specifics of the game, but basically we thought it would be interesting to collect data on game results so that we could then rank players."
date: '2021-05-14'
---

As a final project for our databases class my friends [Jack](https://www.linkedin.com/in/jackmasciopinto/), [Conor](https://www.linkedin.com/in/cnrmrphy/), [Billy](https://www.linkedin.com/in/billyporter5347/), and I decided to make a web app for a popular sport in our dorm at Notre Dame called Ruski.
I won't get into the specifics of the game, but basically we thought it would be interesting to collect data on game results so that we could then rank players.

Games are typically played in a 2v2 format, so we came up with an algorithm that modifies the [Elo rating system](https://en.wikipedia.org/wiki/Elo_rating_system) in order to rank players.

Then, we just had to start collecting data.
In order to do this we built a web app using an Angular / Node tech stack that allows players to record games, and then can be viewed in a social feed where players can comment and like game results.
Seperately, we crunch the numbers from all of the games recorded to our database to rank players, and eventually discover the first Ruski grand master!

There were a few cool problems we got to solve in the process of building this app.
One problem I primarily worked on had to do with the extensive amount of nested data we were dealing with.
For example, in our database, a game contains 4 players, and each player has information on them such as profile photo URL, Name, ID, etc.
If we want to access this data we have a couple of options when using a traditional rest api.
The first option is that we get the ID's of those players, and then run seperate queries to get the information on them.
The next option is to write a custom endpoint that grabs all of the exact information for us.
Neither of these solutions are particularly clean, however, because the first one requires us to make multiple queries, and then the second solution forces changes to be made to the api endpoint if the data you want on the frontend changes.
This is where [GraphQL](https://graphql.org/) comes into play.
As an alternative to REST, we can now make queries on the frontend that will evaluate the player id's into their corresponding objects with the exact properties we ask for.
So now instead of getting

```
{
  players: [id1, id2, id3, id4]
}
```

we can write a query that might return

```
{
  players: [
    {
      name: "name1",
      id: id1,
      url: "https://example.com"
    },
    {
      name: "name2",
      id: id2,
      url: "https://example.com"
    },
    ...
  ]
}
```

This is so much easier to work with and greatly simplifies things for us on both the frontend and backend.

Another fun technology I worked with on the project was AWS S3 Buckets.
I had used these before for my [paste bin](/posts/pastebin-with-serverless-aws/), but this was a bit of a different use case as this time we used it to store user profile images.
Then, instead of storing the actual images on our Mongo database with blog storage, we could just store a string containing the link to the image stored in S3.

We got awesome feedback on our project, in fact our instructor, [Professor Tim Weninger](https://timweninger.com/), said it was one of his "all-time favorite projects".
He even played a game of Ruski with us to celebrate launching the app!

![professorski](/static/journal/introducing-play-ruski/professorski.jpg)

Right now, we are continuing to let the app run on our Netlify + AWS EC2 deployment as a few hundred students at Notre Dame are using it.
We'll see how long we keep it running since we have to spend some money to keep it deployed, but regardless this was an awesome learning experience and some of the most fun I've had on a software development project!
