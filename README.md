# thinkbuddy
A javascript bootstrapped social network built with NEAR (Nodejs, Expressjs, Angular2, RethinkDb) realtime updates using socket.io

Generate social feed to the logged-in user by tracking user activity from the profiles he is following (individuals and groups), and subsequently aggregrating similar activities

![Personalized Social Feed](/social_feed.PNG "Personalized Social Feed")

# Prerequisties
1. [RethinkDB] (https://github.com/rethinkdb/rethinkdb)
2. [Node.JS] (https://github.com/nodejs/node)

# Usage

### Intialization
Install application dependencies. From the application root folder, run the data initilization scripts in the following order
```bash
npm install
``` 
Load the sample data into RethinkDB Database (*BuddyNetwork is the sample DB used, as configured at /configurations/config.js*)
```bash
node initializers/initUsers.js
node initializers/initTargets.js
node initializers/initProfileNetwork.js
node initializers/initNotificationType.js
node initializers/initNotificationFeed.js
``` 
Run Express Server
```bash
node app.js
``` 
# How does it work
1. Find the list of groups user is following
2. From the groups, derive list of all the users part of these groups -- NETWORK_GROUP_MEMBER_LIST
  -- Step 1 and Step 2 are required if the user feed is expected to include activity from fellow members of the groups user is following
3. Find the list of profiles (groups and indviduals) user if following -- NETWORK_MEMBER_LIST
4. Generate feed of all the activities from all the social network profiles 
  (includes NETWORK_GROUP_MEMBER_LIST Union NETWORK_MEMBER_LIST)
5. Prettify feed by aggregrating similar feeds
  * Aggregration by profile
  * Aggregration by subject
6. Monitor for any new updates (Live Change Feed) and display top in the feed

# Next Steps
1. Aggregating new updates (as mentioned in step 6 above) with similar feed items at the top of the feed list
2. Allow user to perform social actions that can generate new feed items

# Contribute
You are welcome to do a pull request. It would greatly help this module if it could find more contributors to build it and test it.

# License
open sourced with [MIT](./License.md) license

NOTE : THIS IS SAMPLE APPLICATION FOR DEMO PURPOSES. SOFTWARE IS PROVIDED 'AS IS', WITHOUT ANY WARRANTY.
