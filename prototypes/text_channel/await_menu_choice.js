const { TextChannel } = require('discord.js');
const {
  MessageMenu,
  MessageMenuOption,
} = require('discord-buttons');

/**
 * Offers a menu selection
 * @param question
 * @param userID
 * @param options
 * @param maxValues
 * @param defaultValue
 * @param timeout
 * @return Promise
 */
// eslint-disable-next-line func-names,max-len
TextChannel.prototype.awaitMenuChoice = async function (question, userID, options, maxValues, defaultValue, timeout = 60) {
  const menu = new MessageMenu()
    .setID('select')
    .setPlaceholder('Choose ...')
    .setMaxValues(maxValues)
    .setMinValues(1);

  options.forEach((o) => {
    const option = new MessageMenuOption()
      .setLabel(o.name)
      .setValue(o.key);

    if (o.default) {
      option.setDefault(o.default);
    }

    if (o.description) {
      option.setDescription(o.description);
    }

    if (o.emote) {
      const emoteId = o.emote.split(':').pop().split('>').shift(); /* lmao */
      option.setEmoji(emoteId);
    }

    menu.addOption(option);
  });

  const message = await this.info(question, [], [], [menu]);

  const filterFunction = (m) => m.clicker.user.id === userID;
  const filterOptions = { max: 1, time: timeout * 1000, errors: ['time'] };

  let values;

  try {
    const collectedMenus = await message.awaitMenus(filterFunction, filterOptions);
    const collectedMenu = collectedMenus.first();

    if (maxValues > 1) {
      // eslint-disable-next-line prefer-destructuring
      values = collectedMenu.values;
    } else {
      values = collectedMenu.values.shift();
    }

    await collectedMenu.reply.defer(true);

    await message.delete();
  } catch (e) {
    await message.delete();

    values = defaultValue;
  }

  return values;
};
