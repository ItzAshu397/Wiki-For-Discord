import discord from "discord.js";

interface WikiForDiscordOptions {
  query: string;
  color: discord.ColorResolvable;
  title?: string;
  message: discord.Message;
}
