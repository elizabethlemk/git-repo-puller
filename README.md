

# Github Repo Puller
This app uses the Github API to pull data on any Github user and display their repos and any open issues along with it!
You are able to reorganize the issues by priority and it persists via Local Storage.

![alt text](https://github.com/elizabethlemk/git-repo-puller/blob/master/Screen%20Shot%202020-01-13%20at%201.29.34%20PM.png "screenshot of the app")

## Technology Used
- React Hooks
- React Moment.js (for easy DateTime formatting)
- React Beautiful Drag and Drop 
- Github API
- CSS

## Installation
1. Fork or clone this repo
2. In terminal: `cd git-repo-puller`
3. `npm install`
4. `npm start`
5. Enjoy! 

## Usage 
- Enter any existing Github username in the form. 
- The user's 30 most recently updated repositories will display on the page.
- If a repo has issues, you can view all open issues
- You can drag and drop the issues in whatever priority you want. 
- This order is saved locally in your cache, so choosing a new repo to look at will erase your changes (but refreshing the page will not!). 

#### Built from scratch by Elizabeth Le
