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

This repo contains both the frontend and backend code which can be run separate or together. Future plans include containerizing the entire project.

To run this project locally, follow the following commands (npm required):

1. Clone the repo

   ```sh
   git clone https://github.com/dominicgaliano/fullstack-blog-demo.git
   cd {repo-name}/
   ```

2. Install NPM packages in parent, server, and client directories.

   ```sh
   npm i
   cd client
   npm i
   cd ../server
   npm i
   ```

3. Run local development server from parent directory

   ```sh
   cd ..
   npm run dev
   ```

## Credits

Frameworks and Packages:

Frontend:

[![React][React.js]][React-url]
[![Typescript][Typescript.js]][Typescript-url]
[![Vite][Vite.js]][Vite-url]

Backend:

[![express][express.js]][express-url]
[![bcrypt][bcrypt.js]][bcrypt-url]
[![http-err][http-err.js]][http-err-url]
[![joi][joi.js]][joi-url]
[![jose][jose.js]][jose-url]
[![morgan][morgan.js]][morgan-url]
[![mongoose][mongoose.js]][mongoose-url]
[![validator][validator.js]][validator-url]

Additional Packages:

[![mongo][mongodb]][mongodb-url]
[![redis][redis.js]][redis-url]
[![concurrently][concurrently.js]][concurrently-url]

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

## Features

### Implemented

Frontend

- [x] Draft proof frontend of concept
- [x] Login and registration
- [x] Feed view with all posts
- [x] CRUD for posts
- [x] CRUD for comments

Backend

- [x] Node-based backend with dedicated authentication server
- [x] Authentication using Blowfish encryption algorithm
- [x] API authorization using JWTs and refresh JWTs
- [x] Refresh JWT cache implemented using redis
- [x] Partial MongoDB CRUD operations implemented using Mongoose
- [x] Login and registration validation using joi and validator
- [x] Server-side logging using morgan
- [x] CRUD routes for posts
- [x] CRUD routes for comments

Database

- [x] User data and post data stored in MongoDB Atlas cluster

### Future Plans/Todo

Frontend

- [ ] Frontend Styling
- [ ] Frontend refactoring

Backend

- [ ] Full coverage of http-error package
- [ ] Convert to TS for better dev process
- [ ] (Maybe) Server Side Rendering

Other

- [ ] Containerization
- [ ] Deploy App

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
[github-status-shield]: https://img.shields.io/github/actions/workflow/status/dominicgaliano/fullstack-blog-demo/main.yml.svg?style=for-the-badge
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
[concurrently.js]: https://shields.io/badge/concurrently-20232A?style=for-the-badge
[concurrently-url]: https://www.npmjs.com/package/concurrently
