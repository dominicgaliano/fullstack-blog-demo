# Steps to deploy remotely

1. Install dependencies in client, server, and parent dir

```bash
npm install
cd client
npm install
cd ../server
npm install
```

2. modify client/config.ts

- sets URL of auth server and main server

3. build client

```bash
# build client
cd client
npm run build
```

4. create .env file in server directory with the following information

```
CLIENT_URL=
CLIENT_DOMAIN=
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
DB_USER=
DB_PASS=
NODE_ENV="production"
```
