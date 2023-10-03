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

Originally created as frontend-backend demo to learn how to use [JWTs](jwt.io), this project has increased in scope to become a fullstack CRUD blog.

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

Frontend Packages:

[![React][React.js]][React-url]
[![Typescript][Typescript.js]][Typescript-url]
[![Vite][Vite.js]][Vite-url]

Backend Packages:

- bcrypt
- express
- http-error
- joi
- jose
- morgan
- redis
- mongoose
- validator

Additional Packages:

- concurrently

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

Database

- [x] User data and post data stored in MongoDB Atlas cluster

### Future Plans/Todo

Frontend

- [ ] Draft proof frontend of concept
- [ ] Create frontend (more details soon)

Backend

- [ ] Update, Delete Post
- [ ] Create, Update, Delete Comments
- [ ] Full coverage of http-error package

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
[Day.js]: https://img.shields.io/badge/Day.js-20232A?style=for-the-badge
[Dayjs-url]: https://day.js.org/
[RMM.js]: https://img.shields.io/badge/react%20micro%20modal-20232A?style=for-the-badge
[React-micromodal-url]: https://www.npmjs.com/package/react-micro-modal
[RS.js]: https://img.shields.io/badge/react%20select-20232A?style=for-the-badge
[react-select-url]: https://react-select.com/
