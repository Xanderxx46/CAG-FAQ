import { Command, type CommandInteraction, Embed } from "@buape/carbon";

const helpTitles = [
	"Here are the commands you can do:",
	"You need help? Damn lol:",
	"Help? Yeah sure:",
	"Lol loser needs help:",
	"Ugh i have to do things:",
	"Heres your help ig:",
	"Why are you asking me:",
];

const getRandom = (array: string[]) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
};

class HelpEmbed extends Embed {
	constructor(title: string) {
		super({});
		this.description = "The Help Embed!";
		this.title = title;
		this.color = 0xff0000;
		this.fields = [
			{
				name: "Useful Commands:",
				value:
					'</help:1297560698150322188> - Show this menu \n </ping:1297543586346434671> - Bot replies with "Pong"\n </update-modpack:1297543586346434673> - Remind someone to update their modpack.',
				inline: false,
			},
			{
				name: "Other Commands:",
				value:
					"</rules:1298803025602936895> - Send the CAG Discord server rules. \n</event-times:1298828407660085279> - The current op times.\n </server-info:1298829078895267871> - All the server info needed to join.\n</socials:1298800865355759739> - The CAG social media accounts.",
				inline: false,
			},
		];
	}
}

export default class HelpCommand extends Command {
	name = "help";
	description = "Show the help menu";
	defer = true;

	async run(interaction: CommandInteraction) {
		const helpTitle = getRandom(helpTitles);
		const helpEmbed = new HelpEmbed(helpTitle);

		await interaction.reply({ embeds: [helpEmbed] });
	}
}
