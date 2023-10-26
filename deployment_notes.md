# Steps to (manually) deploy remotely

1. Spin up EC2 instance

- I went with Ubuntu, 22.04 LTS as the AMI and t2.micro as the instance type

2. Configure EC2 instance to allow HTTP requests (port 80) and SSH (port 22)

3. SSH into EC2 instance

```bash
# be sure to set ssh keys as read-write only by you if using them
chmod 600 ~/pathToKey/key.pem
```

4. Install Git and Node

- Git was already installed on my AMI
- To install Node, I used NVM

```bash
cd ~
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm install v18.18.2
```

5. Install redis server

ok this did not work, will need to troubleshoot later

```bash
sudo apt update
sudo apt install redis-server -y
# update config file to allow redis to be managed as a service by systemd (more info here: https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-22-04)
sudo vim /etc/redis/redis.conf
```

6. Clone repository

```bash
cd ~
sudo git clone https://github.com/dominicgaliano/fullstack-blog-demo.git
```

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

_TODO NEXT:_

- probably should just go ahead and get the repo in an EC2 instance to see what goes wrong and what needs to be added to this list
