# Quick-In, a CU Hacking 2021 project. 

CU Hacking is Ottawa's largest MLH hackathon hosted by students at Carleton University. In January 2021, my team and I participated in this event and created the following application. 

- **Live Link:** https://quickin.herokuapp.com (The current build is hosted on Heroku. Please allow for up to 30 mins to after clicking to run the application.) We recommend following the instructions to run the app locally below. 

- **Demo Video:** https://www.youtube.com/watch?v=uYFf-w2KdII&t=2s

----

## About

A simple check-in app that simplfies the gathering of contact tracing information. 
Built in 24hrs during the Carleton University 2021 Hackathon. 

### Why we built this: 

Storefronts need to ensure contact tracing is accurate and easy to access for government agencies in Canada. We wanted to simplify this process for businesses
so they can make it easy for their customers to give their contact information securely and quickly. 

### How it works: 

Simply sign up as a business to get a QR code generated for you. Place that QR code where customers can access it and have them scan it through our website:
https://quickin.herokuapp.com

Their contact data is then automatically added to our secure database where the business can access the information whenever they like! 


**Built with:**

* Frontend: [React](https://reactjs.org)
* Backend: [Express](https://expressjs.com), [Node](https://nodejs.org/en/)
* Database: [MongoDB](https://www.mongodb.com)
* Deployed On: [Heroku](https://www.heroku.com)
* Libraries: [material-ui](https://material-ui.com), [react-qr-reader](https://www.npmjs.com/package/react-qr-reader), [qrcode.react](https://www.npmjs.com/package/qrcode.react)

Why we chose these technologies? 

The need for a fluid and user-friendly design led to us choosing to React for our front end. The use of state allows us to create a one-page application that is easy for a user to click through and understand. 
Express gave us a robust backend that worked well with React and MongoDB
MongoDB and Atlas were used to create an application with a secure backend for authentication and the handling of user data 

----

### Getting Started 

To get this running locally you will need to have the latest npm package manager. 

* npm
    
    ```npm install npm@latest -g```
    
#### Installation 

1. Clone the repo 
     
     ```git clone https://github.com/JosephDrazen/cuhacking_2021```
     
2. Install npm packages 
     
     ```npm install```
     
3. Run the app in localhost and enjoy
     
     ```npm start```

----

### Contributors:
- Anthony Zhu - https://www.linkedin.com/in/anthony-y-zhu/
- Joseph Malovic - https://www.linkedin.com/in/josephmalovic/
