const fetch = require("node-fetch");
const discord = require("discord.js");

class WikiForDiscord {
  /**
   * @param {Object} options [REQUIRED] Options to apply
   * @param {String} options.query Search query
   * @param {discord.ColorResolvable} options.color Color of the embed
   * @param {String} [options.title] Title of the embed
   * @param {discord.Message} options.message Message of the embed
   */

  constructor(options) {
    if (!options.query) {
      return new TypeError(
        "[wiki-for-discord] => Please enter the search query"
      );
    } else if (typeof options.query != String) {
      return new TypeError(
        "[wiki-for-discord] => Search query must be a string"
      );
    } else if (!options.color) {
      return new TypeError(
        "[wiki-for-discord] => Please enter the color argument"
      );
    } else if (typeof options.color != String) {
      return new TypeError("[wiki-for-discord] => Color must be a string");
    } else if (!options.message) {
      return new TypeError(
        "[wiki-for-discord] => Please enter the message argument"
      );
    }

    this.query = options.query;
    this.color = options.color;
    this.title = options.title;
    this.message = options.message;
  }

  async fetch() {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
      this.query
    )}`;

    let response;
    try {
      response = await fetch(url).then((res) => res.json());
    } catch (err) {
      console.log(err);
    }

    if (response.type !== "disambiguation") {
      try {
        const embed = new Discord.MessageEmbed()
          .setColor(this.color)
          .setThumbnail(response.thumbnail.source)
          .setTitle(response.title)
          .setURL(response.content_urls.desktop.page)
          .setDescription(
            `${response.extract} Other Links for the same topic: [Click Me](${response.content_urls.desktop.page}).`
          );

        if (this.message) this.message.channel.send({ embeds: [embed] });
      } catch (err) {
        if (this.message) {
          this.message.channel.send({
            embeds: [
              new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription(`No results for **${this.query}**`),
            ],
          });
        }
      }
    } else {
      try {
        const fullEmbed = new Discord.MessageEmbed()
          .setColor(this.color)
          .setThumbnail(response.thumbnail.source)
          .setTitle(response.title)
          .setURL(response.content_urls.desktop.page)
          .setDescription(response.extract);

        if (this.message) this.message.channel.send({ embeds: [fullEmbed] });
      } catch (err) {
        if (this.message) {
          this.message.channel.send({
            embeds: [
              new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription(`No results for **${this.query}**`),
            ],
          });
        }
      }
    }
  }
}

module.exports = WikiForDiscord;
