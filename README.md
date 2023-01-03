## MERN STACK social media application.

<br>

## 🖥️ Tech Stack

**Frontend:**

![reactjs](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)&nbsp;
![react-router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)&nbsp;
![redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)&nbsp;
![bootstrap](https://img.shields.io/badge/Bootstrap_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)&nbsp;

**Backend:**

![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![expressjs](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)&nbsp;
![mongooose](https://img.shields.io/badge/Mongoose-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)&nbsp;
![jwt](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)&nbsp;

## Getting Started:

Pull this repo and create one `.env` file and Add MONGODB_URL, ACCESS_TOKEN_SECRET and REFRESH_TOKEN_SECRET to your `.env` file

```
  # Install dependencies for server
  npm install

  # Install dependencies for forntend
  cd frontend
  npm install

  # Run the client & server with concurrently
  npm run dev

  # Run the server only
  nodemon server.js or npm run server

  # Run the frontend only
  npm start

  # Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Getting Started With docker compose:

Pull this repo and create one `.env` file and Add MONGODB_URL, ACCESS_TOKEN_SECRET and REFRESH_TOKEN_SECRET to your `.env` file

```
    # To build container
    docker-compose build

    # start container
    docker-compose up

    # start services with detached mode
    docker-compose -d up

    # stop services
    docker-compose stop

    # kill services
    docker-compose kill

    # remove stopped containers
    docker-compose rm

    # stop all contaners and remove images, volumes
    docker-compose down
```

### DEMO

![Login](login.png)

![Home](demo.png)
