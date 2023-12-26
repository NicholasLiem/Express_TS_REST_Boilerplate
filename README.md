# Express TS REST Boilerplate

## How to Install and Run The Program

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
mv docker.env.example docker.env
```

4. Move to 'src' folder
```sh
cd src
```

5. Make a new env file for .env, and the keys
```sh
mv .env.example .env && mv public.key.example public.key && mv private.key.example private.key 
```

6. Build and run your docker containers
```sh
docker-compose up -d --build
```

## Checklist to be Added
1. Use generics on Req for JWT claims
2. Segregating api tests with unit tests
