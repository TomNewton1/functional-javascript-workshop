function getShortMessages(messages) {
  return messages
    .filter((message) => {
      if (message.message.length < 50) {
        return message;
      }
    })
    .map((message) => message.message);
}

module.exports = getShortMessages;
