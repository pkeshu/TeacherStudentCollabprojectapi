const express =require('express');
const tscp=express();
const morgan=require('morgan');
tscp.use(morgan('dev'));
console.log("Server is started.");
