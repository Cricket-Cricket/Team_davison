'use strict';
const express = require('express');
var app = module.exports = express();

// simple in memory DB
var db = TD_Tickets.Tickets;

// handle Ticket creation
app.post('/', function (req, res) {
    db.push({
        title: req.body.title,
        done: false
    });
    let ticketID = db.length - 1;
    // mountpath = /api/ticket/
    res.location(app.mountpath + ticketID);
    res.status(201).end();
});

// handle Ticket updates
app.put('/', function (req, res) {
    db[req.body.id] = req.body;
    res.location('/' + req.body.id);
    res.status(204).end();
});
