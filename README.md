# Express TS REST Boilerplate
[![Node.js CI](https://github.com/NicholasLiem/Express_TS_REST_Boilerplate/actions/workflows/nodejs.yml/badge.svg?branch=main)](https://github.com/NicholasLiem/Express_TS_REST_Boilerplate/actions/workflows/nodejs.yml)

## ⚡ What is this repository?
This is a template repository to help you make restful backend app using Express and Typescript

## 🔥 Features

## 🖥️ Running locally for development

1. Clone this repository
```sh
https://github.com/NicholasLiem/Express_TS_REST_Boilerplate
```

2. Change the current directory to 'Express_TS_REST_Boilerplate' folder
```sh
cd Express_TS_REST_Boilerplate
```

3. Make a new env file for docker
```sh
cp docker.env.example docker.env
```

4. Move to `src` folder
```sh
cd src
```

5. Make a new env file for .env, and the keys
```sh
cp .env.example .env && cp public.key.example public.key && cp private.key.example private.key 
```

6. Build and run your docker containers
```sh
docker-compose up -d --build
```


## ⚠️ Dependencies 
## 📖 Checklist to be Added
1. Use generics on Req for JWT claims
2. Segregating api tests with unit tests
3. Inject test db, test redis (custom url) for tests
4. Add husky
5. Implement Notification Service / Event Emitter
6. Logging
