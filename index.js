const express = require('express');
const requestBeginLogger = require('./src/middleware/loggingBeginMiddleware');
const responseSentLogger = require('./src/middleware/loggingEndMiddleware');
const io = require('socket.io-client')
const setOut = require('./src/controller')

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
  if(data.includes("开灯")) setOut(36, true)
  if(data.includes("关灯")) setOut(36, false)
})


// var gpiop = require('rpi-gpio').promise;

// (async function main() {
//   await gpiop.setup(36, gpiop.DIR_OUT)
//   gpiop.write(36, true)
// })()
