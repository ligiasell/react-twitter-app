# Lígia Sell

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Planning

The Product Manager wants to implement a new feature called "reply-to-post" (it's a lot like Twitter's These are regular posts that use "@ mentioning" at the beginning to indicate that it is a reply directly to a post. Reply posts should only be shown in a new, secondary feed on the user profile called "Posts and Replies" where all original posts and reply posts are shown. They should not be shown in the homepage feed.

What you need to do:

- Write down questions you have for the Product Manager about implementation.
- Write about how you would solve this problem in as much detail as possible. Write about all of the changes to database/front-end/api/etc that you envision. You should write down any assumptions you are making from any questions for the Product Manager that you previously mentioned.

### Questions to Product Manager

1. Do we already have design and backend ready?
2. How much time do I have to implement it?
3. Do you want an estimated time from me?
4. Can the user "reply-to-post" his own post?
5. Does "reply-to-post" follows the same rules as regular posts (maximum number of characters, ect.)?

### How to solve "reply-to-post"

1. The new feed "Posts and Replies" should be implemented in a new url;
2. The new textarea that will receive the text from "reply-to-post" should be implemented;
3. To use "@ mentioning" would be possible to use a library as React Mentions;
4. Or would be possible to fetch a list of users from backend and for each letter written filter the results;
5. To do not fetch the list very quickly and consecutively a debounce should be added.

## Self-critique & scaling

In any project, it is always a challenge to get the code perfectly how you'd want it. Here is what you need to do for this section:

- Reflect on this project, and write what you would improve if you had more time.
- Write about scaling. If this project were to grow and have many users and posts, which parts do you think would fail first? In a real-life situation, what steps would you take to scale this product? What other types of technology and infrastructure might you need to use?

### How to improve

1. I would review the rule "Users cannot follow themselves". Because when the user is inside the '/following' page and click on "Repost" or "Quote" the post will be created, but the new post is not gonna be shown in this page, because all posts there are just from people that the user follows.
2. I would think better about the design, to give a better experience to the user.
3. I would use useContext to share data between the components, since it's a small project. For a big one I would use Redux.

### Scaling the project

1. First, some basics features should be implemented, as authentication. And the project should have a backend;
2. Accessibility is really important and for Brazilian projects even required, it includes many good practices in html and follow semantics for example;
3. Thinking about all kinds of devices that can be used to navigate in the platform, to offer a better experience would be necessary think about responsiveness, using media queries for example;
4. To avoid css classnames conflicts, would be possible to use CSS Modules;
5. Since a big project will have a considerable complexity, manage state would demand a data-flow architecture as Redux;
6. For authentication would be possible to use Firebase.
