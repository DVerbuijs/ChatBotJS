require('dotenv').config();
const tmi = require('tmi.js');


  const client = new tmi.Client({
      connection:{
          reconnect:true},
          channels:['el_snorro'],
          identity:{
            username: process.env.TWITCH_BOT_USERNAME,
            password: process.env.TWITCH_OAUTH_TOKEN
          }    
  });
  client.connect();
  client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
        console.log("hello");
		client.say(channel, `@${tags.username}, heya!`);
	}
});