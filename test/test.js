
const settings = require('../config/client.js');
const assert = require('chai').assert;
const MailosaurClient = require('mailosaur');
const client = new MailosaurClient(settings.apikey);


// Some Example Tests using Mailosaur API operations
client.messages.list(settings.server).then((result) => {
  let messages = result.items;
  console.log(JSON.stringify(messages));
});