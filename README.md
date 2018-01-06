# MeanChatTestApplication




########Modules###################

1.Index.html
2.Controller.js
3.Server.js




##############Operation Flow #############
1. Index.html 

Enter Name and Site name click submit


2. Controller.js

Controller gets the control creates json and sends to the server


3.Node

After getting the control it checks the db with the record if present response contains token
else No token is returned



#############External Requirements###############


1. Apart from the files present above extra needed things are


a. Visit https://www.mongodb.com/download-center#enterprise and download mongodb.
b. extract mongodb and start the server

Mongodb --> Bin --> Mongod.exe

c. start the command line interface or use https://robomongo.org/download to download robo mongo 

Mongodb --> Bin --> mongo.exe

RoboMongo --> File --> Connect as server is started it will connect


Connections --> Right click to create database(ChatDB) --> create collection(customer) --> Right click and insert -->{
    user:{ name: 'Ayush', email:'',phone:''},
	  website:'zenrays.in',
	  type:'auth'
}----> Validate ---> save

use query "db.getCollection('customer').find({})" which is similar to select * from customer in MYSQL to see the inserted records.



########################How to execute the Application###############


1.Need MongoDB
2.Need Node

for installing packages Open bash in the project folder and write " npm install". Which will install all the dependencies required.

Open bash in the project folder and write "node server.js" and on localhost:3005 server will start

