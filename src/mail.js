const MailosaurClient = require('mailosaur');
const settings = require('../config/client.js');
const client = new MailosaurClient(settings.apikey);

module.exports = {
  getEmail: function(message_id) {
    client.messages.get(message_id)
      .then((message) => {
        return message;
    });
  },

  getInbox: function() {
    client.messages.list(settings.server)
      .then((result) => {
      let messages = result.items;
      console.log(JSON.stringify(messages));
    });
  },

  deleteEmail: function(message_id) {
    client.messages.del(message_id) 
      .then(() => {
        console.log('DELETED EMAIL');
  });
  },

  searchInbox: function() {
    client.messages.search(settings.server, {
      
    }).then((results) => {
      return results;
    });
  }
};