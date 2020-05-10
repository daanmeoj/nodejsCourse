middleware: is a function that takes a request object and either
return a response to the client or passes control to another 
middleware function

//a example of middleware function is:

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

//every route handler is technically a middleware function
//other example is the following

app.use(express.json());

this method return a function, read the request and if there is a json object in the
body of the request it parses the body of the request into a json object and then it will set
req.body

an express application is nothing but a bunch of middleware functions

the middleware functions are called in sequence

//urlencoded
in postman choose post request with the following
127.0.0.1:3000/api/courses
choose body x-wwww
set key name, value=my course
send the request and it creates a new course

//static 
serves to set static files
create a public folder
create there a readme.txt
in postman make a get to 127.0.0.1:3000/readme.txt
this will show the file 

//third party middleware
go to expressjs.com
->resources->middleware

choose helmet
npm i helmet
const helmet = require('helmet')
app.use(helmet())

npm i morgan
const morgan = require('morgan')
app.use(morgan())

//setting node environment
in console export  NODE_ENV=production
export  NODE_ENV=development

//npm rc
for mosh is better
npm config

//set password
export app_password=1234


//debug
npm i debug
export DEBUG=app:startup
if i dont want to see anything
export DEBUG=
export DEBUG=app:startup,app:db
export DEBUG=app:*
DEBUG=app.db nodemon index.js

//template engines
npm i pug
app.set("view engine","pug")

//express
go to guide
go to database integration
