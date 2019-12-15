const express = require('express');
const requestBeginLogger = require('./src/middleware/loggingBeginMiddleware');
const responseSentLogger = require('./src/middleware/loggingEndMiddleware');
const io = require('socket.io-client')
const setOut = require('./src/controller').setOut

const PORT = 80;

const msg = io.connect('http://47.93.220.226')
msg.on('connect', () => {
  console.log('connected to server')
  msg.emit('register', 'iot')
})
msg.on('iot', (data) => {
  console.log(`recieve from iot, data: ${data}`)
  if (data.includes("开灯")) {
    console.log('here')
    setOut(36, true)
  }
  if (data.includes("关灯")) setOut(36, false)
})

msg.on('video', (data) => {
  console.log(`recieve from video, data: ${data}`)
})


// var gpiop = require('rpi-gpio').promise;

// (async function main() {
//   await gpiop.setup(36, gpiop.DIR_OUT)
//   gpiop.write(36, true)
// })()
