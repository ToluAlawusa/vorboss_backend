# Vorboss Warehouse Api

This is the vorboss warehouse back-end api with endpoints for creating, reading, updating, and deleting widgets. 

## Technologies used
  - typescript
  - nestJs
  - mongodb(atlas)
  - mongoose
  - docker

## Create Cloud Database on MongoDB Atlas
  - visit https://www.mongodb.com/cloud/atlas/register to sign up for a free cloud mongo db.
  - Once logged in, on dashboard, go to Deployment > Database > Browse Collections, create database with name 'warehouse' and collection name 'widgets'.
  - Go to Security > Database Access, add new database user, enter username, password, and select built-in role.
  - Go to Security > Network Access, add your IP address.

## Setup env variables
  - Create .env file and copy .env.example into it.
  - Grab database name, username, and password from MongoDB atlas to update the .env file.
---

## 💾 How to use in your local machine using Docker

- Ensure that you have Docker Desktop installed on your machine, if not, visit https://docs.docker.com/desktop/ to download and install.

```bash
  # clone repository
  $ git clone https://github.com/ToluAlawusa/vorboss_backend
  # enter directory
  $ cd vorboss_backend
  # install dependencies
  $ npm install
  # start project with docker
  $ docker-compose up -d --build
```
