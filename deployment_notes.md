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

```bash
sudo apt-get update -y && sudo apt-get upgrade -y
sudo apt-get install redis-server -y
sudo systemctl enable redis-server.service && sudo systemctl start redis-server.service

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

8. create .env.production in client directory with the following information:

   ```
   SERVER_ADDRESS=
   ```

9. build client

   ```bash
   # build client
   cd client
   npm run build
   ```

10. create .env file in server directory with the following information

    ```
    DOMAIN={your ec2 instance ipv4 address}
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
