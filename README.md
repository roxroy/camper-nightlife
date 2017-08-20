# Camper Night Life Coordination App
Web application to view all bars in our area and indicate you are going there tonight.

## User Story
Here are the specific user stories implemented for this project:

1. As an unauthenticated user, I can view all bars in my area.
1. As an authenticated user, I can add myself to a bar to indicate I am going there tonight.
1. As an authenticated user, I can remove myself from a bar if I no longer want to go there.
1. As an unauthenticated user, when I login I should not have to search again.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Things you need to install to run the app:

- Node
- MongoDB

### Installing

Get the repository

```
git clone https://github.com/roxroy/camper-nightlife.git
cd camper-nightlife
npm install
```

Make a copy of `env.example` as `.env`
```
cp env.example .env
```

In a new terminal, go to the project folder, create a data folder and start mongo
```
mkdir data
mongod --dbpath=./data
```

In a new terminal, go to the project folder (folder with server.js) and run the following:
```
npm run start
```

Access the app through the browser, http://localhost:3000.


## Deployment

Release build is optimized for deployment to Heroku and MLab. Don't forget to set environment variables on Heroku from .env.

## Built With

* [MongoDB](https://www.mongodb.com/) - NoSQL database
* [Express.js](https://expressjs.com/) - Web application framework
* [Node.js](https://nodejs.org/en/) - Platform for network applications
* [React.js](https://facebook.github.io/react/) - User interface JavaScript library

## Contributing

Please open any issues that you encounter on [the GitHub repo issue page](https://github.com/roxroy/camper-nightlife/issues).

## Authors

* **Roxroy** - [roxroy](https://github.com/roxroy)

## Acknowledgments

* Hat tip to anyone who's code was used
* [Readme template used](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [Application template used](https://github.com/DimitriMikadze/express-react-redux-starter)