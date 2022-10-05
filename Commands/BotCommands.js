const regexpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/);
const commands= {
    website:{ response: 'https://google.com'},
    upvote:{ response: (argument) => `Successfully upvoted ${argument}`}
}

function test(){
    console.info("Hallo Commands");
}
function CommandHandler(message){
    const [raw, command, argument] = message.match(regexpCommand);
    const { response } = commands[command] || {};
    return response;
  

}
module.exports.CommandHandler = CommandHandler;