# Steps to deploy remotely

1. Spin up EC2 instance

2. Configure EC2 instance to allow HTTP requests (port 80) and SSH (port 22)

3. SSH into EC2 instance

4. Install Git and Node

5. Install redis server

6. Clone repository

7. Install dependencies in client, server, and parent dir

   ```bash
   npm install
   cd client
   npm install
   cd ../server
   npm install
   ```

8. create .env in client directory with the following information:

   ```
   VITE_ENV="production"
   ```

9. build client

   ```bash
   # build client
   cd client
   npm run build
   ```

10. create .env file in server directory with the following information

    ```
    CLIENT_URL=
    CLIENT_DOMAIN=
    SERVER_PORT=
    AUTH_PORT=
    ACCESS_TOKEN_SECRET=
    REFRESH_TOKEN_SECRET=
    DB_USER=
    DB_PASS=
    NODE_ENV="production"
    ```

11. Setup systemd to run node servers and redis server as background service, restarting after any reboots

12. Install and setup nginx reverse proxy to forward HTTP requests to a required port on EC2 instance

13. Run servers and redis-server
