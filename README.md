# News App

[Link to Frontend](https://github.com/PRATAP-KUMAR/news-app-front-end)

### Prerequisite packages

1. when you start running the commands below, terminal will prompt if any package is required.  
2. In general when a dev is trying to use this backend, packages like git, node, npm are already in their systems.

### to run locally

```
git clone https://github.com/PRATAP-KUMAR/news-app-back-end/
cd news-app-back-end
npm install
touch .env # creating dot env file for environment varialbles
echo >> KEY=your-gnews-apikey # change the key with yours gnews Authentication KEY (only 100 requests per day, so use yours)
npm run dev
```

If everything goes well above, you will see below message in your terminal
```
Welcome to news-app
connected to port 3003
```

Then keep this terminal in a seperate workspace so that this will not disturb your other windows and this server needs to be running until you close the frontend
[Aconews](https://pratap-panabaka-aconews.web.app/).
