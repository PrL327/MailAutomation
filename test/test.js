

const assert = require('chai').assert;
// const MailosaurClient = require('mailosaur');
// const client = new MailosaurClient(settings.apikey);
const mail = require('../src/mail.js');

// Some Example Tests using Mailosaur API operations
// client.messages.list(settings.server).then((result) => {
//   let messages = result.items;
//   console.log(JSON.stringify(messages));
// });
mail.getInbox();
// mail.getEmail(message_id);