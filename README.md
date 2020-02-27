# Daily Quotes
I always wanted to have a service in my [personal website](https://www.ahmedhammad.me), that gives me some cheery quotes from time to time. 
Finding such a [dataset](https://www.kaggle.com/fantop/wikiquote-short-english-quotes) was easy, but the problem was in the way of storing it. Do I need to maintain an individual server with some database? Can't I just use Github's file server since my website is based on a Github Page?

And after few hours of digging, my answer is *"Absolutely I can!"*, Here's how it works...

The first intuitive thing would to be to have a gigantic static file uploaded to the repository and loaded inside the web page, simple, ha! The problem that this would introduce a noticeable latency, since the file would be around **5 MB** in size.

So, my workaround for this was to write a simple script that splits this gigantic file into smaller **7336 parts**, each containing few quotes for the same author.

Then, I added a simple script that picks a random part, and hook it up to the HTML page on the fly. The trick here is to wait for this script to be loaded by the browser, which may take few milliseconds, up to hundreds!

A good workaround was to listen to the completion of the script, and execute the rest of the script afterwards, which was simply rendering the quote, and suggesting *another quotes for the same author* -If exists- (since it's already loaded), or gives the option for a *new random quote*, which will require a refresh.

This saves a lot of time since we only load a tiny file (usually less than **1 KB**).

The down side to this is that git faces a hard time dealing with all of these files, I assume a continuous deployment for such a project won't be a piece of cake.

Here it is check it out! [https://ahmedhammad97.com/daily-quote](https://ahmedhammad97.com/daily-quote)

![Screenshot1](https://github.com/ahmedhammad97/Daily-Quotes/blob/master/screenshots/sc1.PNG)
![Screenshot2](https://github.com/ahmedhammad97/Daily-Quotes/blob/master/screenshots/sc2.PNG)
