require('dotenv').config();
const commander= require('./Commands/Botcommands.js');
const tmi = require('tmi.js');


  const client = new tmi.Client({
      connection:{
          reconnect:true},
          channels:['el_snorro','snorrobot'],
          identity:{
            username: process.env.TWITCH_BOT_USERNAME,
            password: process.env.TWITCH_OAUTH_TOKEN
          }    
  });
  client.connect();
  //console.log(process.env.TEST_WRITE);
  //process.env.TEST_WRITE="Hallo";
  console.log(process.env.TEST_WRITE);
  client.on('message', (channel, tags, message, self) => {
    //Never place any code between client.on() and if(self)
    if(self) return;
    try {
      const response= commander.CommandHandler(message);
      if ( typeof response === 'function' ) {
        client.say(channel, response(argument));
      } else if ( typeof response === 'string' ) {
        client.say(channel, response);
      }  
    } catch (error) {
      //TODO add handeling of emote only chat
    }
    
  });
  