# WordPress Docker Setup
This repository contains a minimal WordPress + MySQL setup using Docker Compose.  
The purpose is to provide a reproducible, easy-to-use environment for running a personal WordPress blog.

**Guide**:<br />
[Link to Pdf Checklist](https://github.com/IshakAtes/wordpress_docker/blob/988a9956ce0a28dd5155a18497beed856d5ea06d/Wordpress%20Checkliste.pdf)<br /><br />

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition 
    link="https://github.com/IshakAtes/wordpress_docker.git"
    title="Github" 
    type="tip"
/>

## Table of Contents
1. [About](#about)
2. [Quickstart](#quickstart)
3. [Usage](#usage)

## ⚡Quickstart
### Requirements
- Docker & Docker Compose

### Steps
1. Clone this repository  
```bash
git clone https://github.com/IshakAtes/wordpress_docker.git
cd wordpress-docker
```

2. Create a `.env` file in the project root:
``` env
cp example.env .env
```

3. Start the containers:
``` bash
docker compose up -d
```

4. Open `http://<IP_ADRESS>:8080` and complete the WordPress setup.


## Usage

**Persistency:**
- Data is stored in the Docker volumes `db_data` and `wordpress_data`. Restarting or stopping containers will not remove data.

**Configuration:**
- Change environment variables in `.env` to customize database name, user, password, and server port mapping.

**Maintenance:**
- Stop services: `docker compose down`
- Restart services: `docker compose up -d`
- Remove all data (reset): `docker compose down -v`

**Security Notes**
- Do not commit your `.env` file with credentials.
- Use strong passwords.
- Run on a secure server (firewall, HTTPS via reverse proxy recommended).
