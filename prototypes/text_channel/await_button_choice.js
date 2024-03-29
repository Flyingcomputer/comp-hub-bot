const { TextChannel } = require('discord.js');

/**
 * Offers a button selection
 * @param question
 * @param userID
 * @param buttons
 * @param timeout
 * @return Promise
 */
// eslint-disable-next-line func-names
TextChannel.prototype.awaitButtonChoice = async function (question, userID, buttons, timeout = 60) {
  const message = await this.info(question, [], buttons);

  const filterFunction = (m) => m.clicker.user.id === userID;
  const filterOptions = { max: 1, time: timeout * 1000, errors: ['time'] };

  let id;

  try {
    const collectedButtons = await message.awaitButtons(filterFunction, filterOptions);
    const collectedButton = collectedButtons.first();

    await message.delete();

    await collectedButton.reply.defer(true);

    // eslint-disable-next-line prefer-destructuring
    id = collectedButton.id;
  } catch (e) {
    await message.delete();

    id = null;
  }

  return id;
};
