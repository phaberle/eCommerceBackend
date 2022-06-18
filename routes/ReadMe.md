# E-Commerce Backend

## License
MIT<br>
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This is an example of a node.js powered e-commerce backend suitable for handling products and categories data. It uses express.js, mysql2 and sequalize. API routes are available for CRUD operations. The database is seeded and initialized using sequelize. API routes are split into three sections - Tags, Products and Category.

## Table of Contents
* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Installation
<ol>
<li>node.js should already be installed </li>
<li> Type ' npm i ' to install dependencies </li>
<li> Create .env file at ./db with these parameters - <br>
    DB_NAME=<br>
    DB_USER=<br>
    DB_Password=<br>
     
<li> Type ' npm run seed' to create schema and populate database.
</ol>

![demo](/assets/image01.png)<br>
## Usage
You will need a API program to check the routes like PostMan or Insomnia. 
Create the following routes:
## Tags
<ul>
<li>Get All Tags - http://localhost:3001/api/products/ </li>
<li>Get Tag by Id - http://localhost:3001/api/tags/1 </li>
<li>Add Tag (Post) - http://localhost:3001/api/tags/ </li>
<li>Update Tag Name (Put) - http://localhost:3001/api/tags/9 </li>
<li>Delete Tag by Id - http://localhost:3001/api/tags/9
</ul>
In a similar fashion you will find the like endpoints for </br>
<ul>
<li> /api/products</li>
<li>/api/categories</li>
 Just create like the ones above for Tags.

## Contribute
Contributors may request access via email.<br>Clone the repo.<br>Make a PR.

## Testing
See Usage

## Questions
GitHub User Name: phaberle
Email Address: paulshaberle@gmail.com

### How to reach me with additional questions:
Contributors may contact me through email.<br>I try to check my email often.<br>But it may take a while to receive a reply.