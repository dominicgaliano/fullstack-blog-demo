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

**_This project is currently on hold:_**

I started this project as a small demo to learn how to use [JWTs](https://jwt.io/) as part of the the fullstack development path on [roadmap.sh](https://roadmap.sh). After experimenting with JWT creation and validation, I saw that the next goal along the development path was to learn about redis. I learn best by creating and doing, so I went ahead and learned about redis by creating a redis cache to store refreshTokens within this same project. As I followed along the development path further, this small project ended up ballooning in size to approach the partially completed fullstack application that is contained in this repository today.

This being my first full stack app developed from scratch, I encountered many roadblocks and slowdowns that challenged me. In all cases, I did my best to look for best practices and best solutions for solving these issues. However, overtime, the tech debt of my naive/beginner solutions began to accumulate, leading to this point in time in which I believe that it would be better to start a new project from scratch using the lessons I've learned through failing to complete this project.

So, here are a few lessons that I have learned along the way:

### (Learn about) and implement testing early (TDD)

I learned pretty quickly that hand testing a backend api is extremely tedious and a waste of time. I was able to speed up testing using Postman, but the problem was still mostly that I was manually running requests and analyzing the server response. In other projects, I have found great success by implementing TDD. By having the expected behavior laid out from the start, I have found that development becomes more directed, and thus, more efficient.

### Spend more time on ideation and planning

Because this project slowly ballooned from a small demo to a full application, there was little time spent on big picture ideation and planning. This led to things like TDD or using Typescript being neglected out of desire to iterate quickly. If I had created a big picture plan from the beginning rather than adding features slowly without an idea for the final product, lots of the development process would have been sped up and improved.

### Use Typescript (for JS projects)

Initially I did not use TS because I wanted to experiment quickly with JWTs. In my experience, learning new concepts is much slower in TS because of the need to correctly learn and use types. I know now, however, that types are a good way to learn a new module/package even faster, as they allow you to understand more concretely what is occurring within the code.

### Write clean code

I ended up refactoring the code several time to help clean up the ballooning functions, routes, and controllers within the backend code. I believe that major refactoring could have been avoided if I wrote cleaner code from the beginning. I plan to read and learn more about writing clean code in the future.

### Do your (own) research

I jumped right into use JWTs based on the suggestion of [roadmap.sh](https://roadmap.sh). I, however, did not realize the limitations and common use cases of JWTs until I attended a INFOSEC related talk in the Boston area about JWTs. Knowing what I know now, I would never attempt to use JWTs for maintaining client sessions in the browser. My take away is to learn new things but also look at how they are actually being used by real world applications and not just in tutorials and guides.

### Ask questions from experienced programmers

A lot of my problems could probably have been avoided by asking for advice from senior/more experience programmers. I hope to do this more in the future as I build up my connections to more programmers.

### Don't be afraid to fail

Yes, this project is seemingly a failure at the moment. However, I feel like the roughly two week development time was a great learning opportunity. Failure has helped me push my comfort zone, forced me to seek out new solutions, and given me insight into the problems that modern developers are currently working on. As a result, I ultimately consider this project to be a success.

## Installation

This repo contains both the frontend and backend code which can be run separate or together. Future plans include containerizing the entire project.

To run this project locally, follow the following commands (npm required):

1. Clone the repo

   ```sh
   git clone https://github.com/dominicgaliano/jwt-demo.git
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

- [x] Placeholder frontend

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

- [ ] Draft proof frontend of concept
- [ ] Create frontend (more details soon)

Backend

- [ ] Full coverage of http-error package
- [ ] Convert to TS for better dev process
- [ ] (Maybe) Server Side Rendering

Other

- [ ] Containerization
- [ ] Deploy App

See the [open issues](https://github.com/dominicgaliano/jwt-demo/issues) for a full list of proposed features (and known issues).

## How to Contribute

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

[contributors-shield]: https://img.shields.io/github/contributors/dominicgaliano/jwt-demo.svg?style=for-the-badge
[contributors-url]: https://github.com/dominicgaliano/jwt-demo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dominicgaliano/jwt-demo.svg?style=for-the-badge
[forks-url]: https://github.com/dominicgaliano/jwt-demo/network/members
[stars-shield]: https://img.shields.io/github/stars/dominicgaliano/jwt-demo.svg?style=for-the-badge
[stars-url]: https://github.com/dominicgaliano/jwt-demo/stargazers
[issues-shield]: https://img.shields.io/github/issues/dominicgaliano/jwt-demo.svg?style=for-the-badge
[issues-url]: https://github.com/dominicgaliano/jwt-demo/issues
[license-shield]: https://img.shields.io/github/license/dominicgaliano/jwt-demo.svg?style=for-the-badge
[license-url]: https://github.com/dominicgaliano/jwt-demo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/dominic-galiano
[tech-shield]: https://img.shields.io/github/languages/top/dominicgaliano/jwt-demo.svg?style=for-the-badge
[github-status-shield]: https://img.shields.io/github/actions/workflow/status/dominicgaliano/jwt-demo/main.yml.svg?style=for-the-badge
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
