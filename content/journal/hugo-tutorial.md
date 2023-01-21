---
title: 'Hugo tutorial for total beginners'
description: 'Recently my younger brother who is in high school and is beginning to learn more about programming expressed interest in building his own portfolio site, similar to this one. I figured I would help him out by making a tutorial for complete beginners.'
date: '2020-08-05'
---

# Hugo Website Tutorial

Recently my younger brother who is in high school and is beginning to learn more about programming expressed interest in building his own portfolio site, similar to this one. I figured I would help him out by making a tutorial for complete beginners.

This is an all inclusive tutorial on how to make a static personal site using the [Hugo](https://gohugo.io/) framework. Experience with command line, git, markdown, etc. isn't needed, all the basics will be covered.

## What is hugo?

Hugo is a static site framework / generator.

What is a static site?  
A static site is a site like this one, where once it is loaded, the information doesn't change. Static sites differ from dynamic sites which have new information loaded to them, usually from a database, and are significantly more complex.

What is a framework / generator?  
A framework is a tool that allows you to utilize existing programming languages in a more simple way, in order to achieve a common use case. In this case that use case is to build a static website. Hugo is more specifically a static site generator, because it actually take information from a set of files you feed it, and then creates all of the HTML/CSS code necessary for the static website.

## Prereqs: Git, Command Line, and Markdown

In order to use the hugo framework, you will need to know some very basic git and command line. It may seem a bit overwhelming, but go slow and over time with practice it will feel super natural. This honestly might be the hardest part of the whole tutorial if you are totally new.

#### Command Line Basics

The command line is another way of interfacing with your computer. On Mac, this is the app called terminal. Mac and Linux systems have a very similar terminals because Linux is just an open source version of [Unix](https://en.wikipedia.org/wiki/Unix), the operating system invented by [Bell Labs](https://en.wikipedia.org/wiki/Bell_Labs) which changed computing forever and is still in use today, most notably in Mac systems.
Unfourtunately, if you run [Winblows](https://www.microsoft.com/en-us/windows), then you have a [MS-DOS](https://en.wikipedia.org/wiki/MS-DOS) based system, and the command line interface is significantly different, and much less powerful. This is why most developers either use Mac or Linux computers. You can still use Hugo with Windows, and the best way to do this is with [Windows Subsystem Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10). WSL is essentially Linux terminal as an app on your Windows machine, enabling you to do the rest of the tutorial.

To get started, open up the terminal on your Mac. There are a few very basic command you should know. These commands simply allow you to browse the file system of your computer with typed out commands, rather than using a graphic user interface like in the finder app. You can run any command by simply typing it and then pressing enter.

- `ls` - Lists everything in your current directory (folder)
- `cd path/to/directory` - Change directory
  - cd on it's own will take you to your home directory
  - the home directory can also be referenced with ~
  - An example command you might run would be `cd ~/Documents`, which would simply take you to your documents folder
  - .. references the parent directory
  - . references the current directory
  - \- references the most recent directory you visited
- `mkdir myDirectory` - make a new directory
- `touch myFile.file` - make a new file

And that's it! With those three commands, you should be able to navigate through your computers file system, and make new files and directories using the command line.

#### Git Basics

Git is a command line tool created by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds), who also famously created Linux. Git was actually created in order to help make contributing to Linux easier and more efficient!

There are many different aspects to git, but for now lets just stick to the basics. Git allows us to manage versions of a software project. Essentially what it allows you to do is create "commits" which effectively save your project at a certain point in time. The other big part to git is branching, but we won't cover that. You may have heard of [GitHub](https://github.com/) which is a popular website for people to share their code online. GitHub is simply store git repositories in the cloud so that other people can access and contribute to the projects.

Let's go ahead and make a repository on GitHub to use for this project. If you haven't made a GitHub account already, go ahead and do that.

- Log in to GitHub (feel free to follow me @danerwilliams)
- Click the plus symbol in the upper right hand corner, then click new repository
- Give your project a name (i.e. "my-website")
- Check "Initialize this repository with a README"
- Click "create repository"

Now that you have the repository created, you need to put it on your local computer.

- Fire up the terminal, and navigate to whichever folder you wish to have a local copy of this project (this is totally up to you, I choose to organize my git repos in a GitRepos folder inside of my Documents directory)
- Back on GitHub, find the green button that says "Code" on it, and click it, this should give you a link that you can copy. Make sure you are using https link and not ssh link, we don't want to bother with the extra set up required for ssh
- On a mac, git is already installed, on Linux/WSL, you may need to install it (you can find how to do this with a quick google search)
- Now run the command `git clone https://github.com/my_github_username/my-website.git` using the link you copied
- There should be a directory which is a local copy of that git repo now on your computer. It should only contain a file README.md
- Open that file called README.md with your text editor of choice, if you don't know what to use, I highly recommend downloading [VS Code](https://code.visualstudio.com/)
- Type whatever you want in the file, such as "hello, world". This is markdown file which will be displayed when people view the repository on github
- Now that we've made some changes, it's time to store these changes as a commit, and then push the new commit to github.
- `git add .` - Remember that . means the current directory? This will stage / add everything in the current directory to git, so they are ready to be committed
- `git commit -m "my message"` - This commits the changes and specifies your commit message with the -m flag. A good commit message very concisely describes the changes in less than a sentence
- `git push` - This pushes the changes to github. Go ahead and refresh the github repo and you should see that your changes are now there!

Those three commands are all you need to know to start working with git, congrats!

#### Markdown Basics

Markdown is simply a language for styling our writing. Hugo sites generate content through markdown files, in fact, the page you are viewing right now was generated from a markdown file. Since README.md is also a markdown, we will practice a little more with that file before finally building the website.

Headers:
You can create different sized headers using the #, more #'s equals a smaller header, with a single # being the biggest.

Bold and Italics:
You can denote text as bold or italic by wrapping them in \*\*Bold\*\* or \*Italics\*

New Line:  
Indicate a new line by adding two spaces to the end of your line, otherwise the next line will just run on with the previous one when it is compiled.

There are many, many more things you can do to style your text with markdown, such as tables and code blocks, but I will simply point you to this [tutorial](https://www.markdowntutorial.com/lesson/1/) instead if you are interested in learning more.

Try making some changes to your README.md and then using git add, commit, and push to send the changes to github and see how they turn out!

## Building Your Hugo Site

Now that you have those prereqs figured out, there actually isn't much left to learn. The beauty of hugo is that it allows you to create a site from a template, you actually don't need to know how to code in html and css, you simply need to be comfortable using the command line and know how to use markdown (don't worry, we'll cover this).

#### Choose a Theme

The first step is simply to choose a theme you want to use. You can view a list of themes [here](https://themes.gohugo.io/). The theme I use is called [coder](https://themes.gohugo.io/hugo-coder/), and then I added some modifications to it such as the particles background as I am familiar with html, css, and javascript. We will not worry about modifications.

#### Installing Hugo

Now you need to install hugo as a program on your computer. This will be done using a package manager. On mac, the most popular package manager is [homebrew](https://brew.sh/), on Linux this will depend on your distro but if you are on [Ubuntu](https://ubuntu.com/) then it would be [apt-get](https://help.ubuntu.com/community/AptGet/Howto) for example.

To install homebrew, simple run the following command:
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`

Now that you have homebrew, you can install packages with the command `brew install my-package`.
Install hugo with `brew install hugo`  
Whenever you install a new package, it's a good idea to verify it install properly by checking the version. For hugo you can do this with `hugo version`.

#### Create Hugo Site

- Navigate to the git repo we had previously made, and run the command `hugo new site --force .` which will make a new hugo site in that folder! We need the --force flag to allow it to make a site in a folder that already exists. Run `ls` and see all of the new files hugo automatically created for us.
- Remember the theme you chose? Click the homepage button of that theme to get to it's github repo, and then copy the https clone link. Now navigate to the themes directory which was automatically created and run the command `git submodule add https://github.com/theme-org/the-theme-i-chose.git` which will basically make a git repo inside of your git repo containing all of the theme's code.
- There is now a new directory inside of the themes directory containing that code, go in to it with cd, then run ls to see what's inside.
- There should be a folder with a name like "exampleSite", enter that folder and then open the file called config.toml with your text editor.
- Replace the config.toml file in the root directory of your project with the config.toml in that example site folder.
- IMPORTANT: make one change to the config.toml once you have copied it over, add the line `publishDir = "docs/"` at the top of the file. This will be important for hosting the site on GitHub.
- There will probably be some other folders in the example site such as "content" or "static", once again, replace those folders or files in your root directory with the ones from the example. You could do this on command line with cp, mv, and rm commands but it is probably easier for a beginner to just do this in the GUI like with finder.
- Once you have all of the example site information copied over, you have a very good starting point.
- You can now compile the site with the command `hugo -D` which will generate a website in the docs directory based on your config and content files!
- Run the command `hugo server` from the root directory of the project and then you can go to `http://localhost:1313/` to see the site on your local computer.
- Read through the contents of the config.toml file and take a look at some of the parameters, you'll likely want to customize many of them to make the site look how you want it to and give it correct information.
- To change the contents of the website, such as what the actual webpages look like, you will want to edit the markdown files in the content directory.
- Most other things such as images are contained in the static directory.
- Whenever you make changes to the content of your site, you need to recompile it for those changes to take effect using `hugo -D`

Now that you have a basic template of a website, you should do git add, commit, and push again to save your changes to github.

## Deploying Your Site

Now it is time to let the whole world be able to see your website! We are going to use an awesome service called [Github Pages](https://pages.github.com/) to host the site for free!

- On your repository page, click settings
- Scroll down until you see Github Pages
- Choose the master branch, and then choose the docs folder and click save
- The site which you build in to the docs folder and then pushed to github should now be publish at a url like username.github.io/mysite, the url should be pointed out by github in a little green box on the github pages portion of settings once it is published.

#### Adding a Custom Domain Name

- You may have noticed that my site is the domain danewilliams.me, with just a few extra steps you can do this too.
- First, purchase a domain from [google domains](https://domains.google/).
- Go to my domains, click DNS on the left side bar, scroll all the way down
- You now want to add two types of records:
  - name: www, type: CNAME, TTL: 1H (this is default so leave it blank), data (IPv4 address): username.github.io
  - Then create 4 of the following type of record:
  - name: @, type: A, TTL: 1H, data: 185.199.108.153
  - as well as the same record but for 185.199.109.153, 185.199.110.153, and 185.199.111.153
- Go back to the github pages settings on the repo and enter in the custom domain box `www.mydomain.com` and click save
- This may take a day to go in to affect because of the speed at which DNS updates, but for me it was only a few minutes. I had to trouble shoot this a lot so don't be too surprised if there are some issues at first.

## All Done!

Now you should have your own personal website made with the hugo framework! Remember that you customize the site's content by editing the markdown files, and the best way to learn things with hugo is by snooping around the example site from your theme or by researching online at gohugo.io
