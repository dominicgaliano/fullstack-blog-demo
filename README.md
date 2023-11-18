[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
![Top Tech][tech-shield]
![GitHub Workflow Status (with event)][github-status-shield]
[![LinkedIn][linkedin-shield]][linkedin-url]

# Fullstack Demo

## Description

**_This project is no longer on hold!_**

_After lots of problem solving and learning, I have revived this project. If you would like to see the write-up I created when I previously put the project on hold, it is located [here](LESSONS_LEARNED.md)._

This project is a fullstack blog application built with React and Express. My ultimate goal for this project is to gain real-world experience designing, building, deploying, and monitoring an entire web application from the ground up.

## Installation

This repo contains all the code needed to run a blog locally or on a remote instance.

For local development:

1. Clone this repo to your local machine

```bash
git clone https://github.com/dominicgaliano/fullstack-blog-demo
```

2. Create a .env file in the project directory with the following variables defined:

```txt
DOMAIN="localhost"
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
DB_USER=
DB_PASS=
```

3. Run the following commands to start and stop the local docker instances, respectively.

```bash
# start
npm run dev

# stop
docker-compose down -v
```

For remote production deployment:

1. Fork this repo

2. Define all of the following variables as [Github enviroment secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)

```text
ACCESS_TOKEN_SECRET
REFRESH_TOKEN_SECRET
DB_PASS
DB_USER
EC2_HOST
EC2_SSH_KEY
EC2_USERNAME
```

3. Run build and deploy action

Requires manual activation

Actions Tab > Build and Deploy > Run Workflow > Run Workflow on Branch Main 

## Credits

Frameworks, Packages, and Tools:

Front End:

[![React][React.js]][React-url]
[![Typescript][Typescript.js]][Typescript-url]
[![Vite][Vite.js]][Vite-url]
[![Redux][Redux]][Redux-url]
[![Material-UI][Material-UI]][Material-UI-url]
[![React Router][React Router]][React Router-url]

Back End:

[![express][express.js]][express-url]
[![bcrypt][bcrypt.js]][bcrypt-url]
[![http-err][http-err.js]][http-err-url]
[![joi][joi.js]][joi-url]
[![jose][jose.js]][jose-url]
[![morgan][morgan.js]][morgan-url]
[![mongoose][mongoose.js]][mongoose-url]
[![validator][validator.js]][validator-url]

Additional:

[![mongo][mongodb]][mongodb-url]
[![redis][redis.js]][redis-url]
[![nginx][nginx]][nginx-url]
[![docker][docker]][docker-url]
[![eslint][eslint]][eslint-url]
[![Postman][Postman]][Postman-url]
[![Amazon AWS][Amazon AWS]][Amazon AWS-url]

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

## Features

### Implemented

Front End

- [x] Front end styling implemented using [Material UI]('https://mui.com/material-ui/')
- [x] Login and registration
- [x] Feed view with all posts
- [x] Create, read, update, delete actions for posts
- [x] Create, read, delete actions for comments

Back End

- [x] Node-based backend with dedicated authentication server
- [x] Authentication using Blowfish encryption algorithm
- [x] API authorization using JWTs and refresh JWTs
- [x] Refresh JWT cache implemented using redis
- [x] Partial MongoDB CRUD operations implemented using Mongoose
- [x] Login and registration validation using joi and validator
- [x] Server-side logging using morgan
- [x] Create, read, update, delete routes for posts
- [x] Create, read, update, delete routes for comments

Infrastructure/Other

- [x] Reverse proxy implemented using nginx
- [x] All processes containerized using Docker (main server, authentication server, reverse proxy, and redis cache)
- [x] User data and post data stored in MongoDB Atlas cluster
- [x] Implemented Github action to automate deployment to an EC2 instance

### Future Plans/Todo

Front End

- [ ] Update action for comments

Back End

- [ ] Full coverage of http-error package
- [ ] Convert to TS for better dev process
- [ ] Server Side Rendering
- [ ] Implement like route
- [ ] Implement optional 'Remember Me' with session cookies
- [ ] Send user information with login/refresh routes

### Issues

See the [open issues](https://github.com/dominicgaliano/fullstack-blog-demo/issues) for a full list of proposed features (and known issues).

## How to Contribute

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

[contributors-shield]: https://img.shields.io/github/contributors/dominicgaliano/fullstack-blog-demo.svg?style=for-the-badge
[contributors-url]: https://github.com/dominicgaliano/fullstack-blog-demo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dominicgaliano/fullstack-blog-demo.svg?style=for-the-badge
[forks-url]: https://github.com/dominicgaliano/fullstack-blog-demo/network/members
[stars-shield]: https://img.shields.io/github/stars/dominicgaliano/fullstack-blog-demo.svg?style=for-the-badge
[stars-url]: https://github.com/dominicgaliano/fullstack-blog-demo/stargazers
[issues-shield]: https://img.shields.io/github/issues/dominicgaliano/fullstack-blog-demo.svg?style=for-the-badge
[issues-url]: https://github.com/dominicgaliano/fullstack-blog-demo/issues
[license-shield]: https://img.shields.io/github/license/dominicgaliano/fullstack-blog-demo.svg?style=for-the-badge
[license-url]: https://github.com/dominicgaliano/fullstack-blog-demo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/dominic-galiano
[tech-shield]: https://img.shields.io/github/languages/top/dominicgaliano/fullstack-blog-demo.svg?style=for-the-badge
[github-status-shield]: https://img.shields.io/github/actions/workflow/status/dominicgaliano/fullstack-blog-demo/deploy.yml.svg?style=for-the-badge
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Typescript.js]: https://shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=61DAFB
[Typescript-url]: https://www.typescriptlang.org/
[Vite.js]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[bcrypt.js]: https://img.shields.io/badge/bcrypt-20232A?style=for-the-badge
[bcrypt-url]: https://www.npmjs.com/package/bcrypt
[express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[express-url]: https://expressjs.com/
[http-err.js]: https://shields.io/badge/httperr-20232A?style=for-the-badge
[http-err-url]: https://www.npmjs.com/package/http-errors
[joi.js]: https://shields.io/badge/joi-20232A?style=for-the-badge
[joi-url]: https://www.npmjs.com/package/joi
[jose.js]: https://shields.io/badge/jose-20232A?style=for-the-badge
[jose-url]: https://www.npmjs.com/package/jose
[morgan.js]: https://shields.io/badge/morgan-20232A?style=for-the-badge
[morgan-url]: https://www.npmjs.com/package/morgan
[redis.js]: https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white
[redis-url]: https://www.npmjs.com/package/redis
[mongoose.js]: https://shields.io/badge/mongoose-20232A?style=for-the-badge
[mongoose-url]: https://www.npmjs.com/package/mongoose
[validator.js]: https://shields.io/badge/validator-20232A?style=for-the-badge
[validator-url]: https://www.npmjs.com/package/validator
[mongodb]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb-url]: https://mongodb.com
[nginx]: https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white
[nginx-url]: https://www.nginx.com/
[docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white  
[docker-url]: https://www.docker.com/
[eslint]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[eslint-url]: https://eslint.org/
[Redux]: https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white
[Material-UI]: https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white
[React Router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[Redux-url]: https://redux.js.org/
[Material-UI-url]: https://mui.com/material-ui/ 
[React Router-url]: https://reactrouter.com/en/main
[Postman]: https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white
[Amazon AWS]: https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white
[Postman-url]: https://www.postman.com/
[Amazon AWS-url]: https://aws.amazon.com/ 
