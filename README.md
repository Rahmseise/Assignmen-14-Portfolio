# Portfolio Website - Assignment 14

This repository contains a dockerized Create React App portfolio website that showcases coursework and projects.

## Prerequisites

- Docker installed on your system
- Git (to clone the repository)

## Setup Instructions

### 2. Create nginx.conf File

Create a file named `nginx.conf` in your project root with the following content:

```nginx
server {
    listen 5575;
    server_name localhost;

    root /lastName_firstName_final_site;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 3. Build the Docker Image

```bash
docker build -t lastName_firstName_coding_assignment14 .
```

### 4. Run the Docker Container

```bash
docker run -d -p 5575:5575 --name lastName_firstName_coding_assignment14 lastName_firstName_coding_assignment14
```

### 5. Access the Website

Open your browser and navigate to:
- `http://localhost:5575`
- `http://127.0.0.1:5575`






