const express = require('express');
const requestBeginLogger = require('./src/middleware/loggingBeginMiddleware');
const responseSentLogger = require('./src/middleware/loggingEndMiddleware');
const io = require('socket.io-client')

const PORT = 80;

const msg = io.connect('http://47.93.220.226')
msg.on('connect', () => {
  console.log('connected to server')
})
msg.on('iot', (data) => {
  console.log(`recieve from iot, data: ${data}`)
})

msg.on('video', (data) => {
  console.log(`recieve from video, data: ${data}`)
})

