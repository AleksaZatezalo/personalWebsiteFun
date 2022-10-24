'use strict';
const express = require('express');
const SSH = require('simple-ssh');
const parser = require('node-csv-parse');
const ftp = require('basic-ftp');
const fs = require('fs');
const nodemailer = require("nodemailer");
  
const app = express();
const PORT = 80;
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);


// Implement FTP for File Upload
// Implement SSH for Dir Changes
// Send Email: Working
/* Use Queries for the Following Attributes: 
 * About me: Years Experiance, Clients, Projects
 * About me: Description
 * My Experiance: Cloud Security
 * My Experiance: Backend Dev - Get From Query
 * Services: Get from Query
 * Portfolio: Get From Query
*/