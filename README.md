
# Bot AIv

Please view live application at [Bot AI](https://bot-ai-nine-mu.vercel.app/).

## Demo 

Fork and run this application using below command: 

```
npm install
npm run dev
```

## Overview
 
It is an clone of an AI chat bot application with react. It have mock responses for different question which you could ask. 

## Features

* It shows on welcome screen when the website is visited for the first time.
* Welcome screen contains different suggesstion for the question you could ask with bot ai.
* On clicking upon one of these card it automatically start the conversation with that question.
* 'Ask' button is disabled till the input field is filled with some value.
* You get the response of your question, and upon hovering over the card of response, you get the thumbs up/thumbs down button.
* upon clicking on thumbs up button you could give a rating to the response.
* Upon clicking on thumbs down button you could give an input feedback for the repsonse.
* Upon clickin on save button, you could save the converstaion and the chats will be cleared.
* Side drawer is responsive, and upon clicking on past conversations from side drawer, you'll route to the /```past-conversations``` url.
* In past conversation route, you'll have your previous conversation with rating and feedback and these are sorted in most recent conversation order.
* You could filter the result with given rating.

## Tech Stack

* HTML5
* CSS3
* JavaScript
* React.js 18
* Material UI 
* date-fns
* react-router-dom
* react-icons