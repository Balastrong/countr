import type { Message } from "discord.js";

export default async function repostWithEmbed(message: Message<true>): Promise<Message> {
  try {
    return await message.channel.send({
      embeds: [
        {
          description: `${message.author.toString()}: ${message.content}`,
          color: message.member?.displayColor ?? 3092790,
        },
      ],
    });
  } catch {
    return message;
  }
}
