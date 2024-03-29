const { TextChannel } = require('discord.js');

/**
 * Waits for any text input
 * @param question
 * @param userID
 * @param defaultValue
 * @param timeout
 * @return Promise
 */
// eslint-disable-next-line func-names
TextChannel.prototype.awaitTextInput = async function (question, userID, defaultValue, timeout = 60) {
  question = `${question}`;
  const message = await this.info(question);

  const filterFunction = (m) => m.author.id === userID;
  const filterOptions = { max: 1, time: timeout * 1000, errors: ['time'] };

  let collectedMessage;

  try {
    const collectedMessages = await this.awaitMessages(filterFunction, filterOptions);
    collectedMessage = collectedMessages.first();

    await message.delete();
    await collectedMessage.delete();
  } catch (e) {
    await message.delete();

    collectedMessage = defaultValue;
  }

  return collectedMessage;
};
