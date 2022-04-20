# GitHub Express API

Node Express Rest API developed to obtain user information, repositories and commits.

## 🔨 Resources

☁️ URLs:

- Heroku: 
- Local: http://localhost:5000/

⚙️ Base dependencies:

- [Express](https://expressjs.com/) (REST framework for nodejs)
- [Nodemon](https://www.npmjs.com/package/nodemon) (NodeJS process manager)
[body-parser](https://www.npmjs.com/package/body-parser)
[cors](https://www.npmjs.com/package/cors)
[dotenv](https://www.npmjs.com/package/dotenv)

## Requirements

- [Node](https://nodejs.org/)
- [Npm](https://www.npmjs.com/) (preferably) or [yarn](https://yarnpkg.com/)

## 🚀 Lift service

### Local environment

You must have the requirements previously installed

In the terminal run the command `npm install` or` yarn` to install the necessary packages, then run the command `npm start` or` yarn start`.

The service will be lifted in http://localhost:5000

### 🔨 Environment File (.env)

    GITHUB_TOKEN=[GITHUB_TOKEN]
    PORT=[PORT]

## 🔧 Tools

### Postman
Download the collection to run tests with postman.

- [Collection](https://www.getpostman.com/collections/504bf2eff6c51f07a0c2)

## 💻 Endpoints
All exposed endpoints start with `http://localhost:5000/`.

#### Get Request:

for this example I will place this same repo as a reference

    /api/github/userinfo/gmujica
    /api/github/repoinfo/gmujica/github-node-api
    /api/github/commitinfo/gmujica/github-node-api
    
    

    
