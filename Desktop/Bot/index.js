var TelegramBot = require('node-telegram-bot-api');

var token = '503439319:AAHtsLghiSqdCkFo-_01pfoyyNx729Yr8q0';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});
bot.on('text', function (msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId,"¡Muy pronto lanzamiento Bot!");
});

const request = require('request');
 
// Cuando mandes el mensaje "Hola" reconoce tú nombre y genera un input: Hola Daniel
 bot.on('message', (msg) => {
 var Hola = "/hola";
 if (msg.text.toString().toLowerCase().indexOf(Hola) === 0) {
     bot.sendMessage(msg.chat.id, "¡Hola  " + msg.from.first_name + "!");
 }
 });
 
// Cuando mandes el mensaje "Hola" reconoce tú nombre y genera un input: Hola Daniel
 bot.on('message', (msg) => {
 var Querer = "/mequieres";
 if (msg.text.toString().toLowerCase().indexOf(Querer) === 0) {
     bot.sendMessage(msg.chat.id, "¡Te quiero  " + msg.from.first_name + "!");
 }
 });