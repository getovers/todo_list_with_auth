## Todo list with auth

## Maintain your .env file

Firstly, adjust .env.example file:
1. Delete ending (.example) from file name, so it looks like this
````
.env
````
2. Put necessary values instead of CHANGE_ME
````
MONGODB_URI=CHANGE_ME               //your mongodb uri
NEXTAUTH_SECRET=CHANGE_ME           //your next auth secret
NEXTAUTH_URL=CHANGE_ME              // "http://localhost:3000"
````

## Run DEV locally
````bash
    npm run dev         //run your development server
````
## Automatically fix some lint issues
````bash
    npm run fix
````
## Run code quality tool (ESLint)
````bash
    npm run lint
````