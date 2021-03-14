
var PsyPhen = (function()
{
	'use strict';

	const perilsOfTheWarp =
	[
		{low: 1,  high: 5,  result: "The Gibbering: The Psyker screams in pain as uncontrolled warp energies surge through his unprotected mind. He must make a Willpower Test or gain 1d5 Insanity Points."},
		{low: 6, high: 9,  result: "Warp Burn: A violent burst of energy from the warp smashes into the Psyker’s mind, sending him reeling. He is Stunned for 1d5 Rounds."},
		{low: 10, high: 13,  result: "Psychic Concussion: With a crack of energy the Psyker is knocked unconscious for 1d5 Rounds and everyone within 3d10 metres must make a Willpower Test or be Stunned for a Round."},
		{low: 14, high: 18,  result: "Psy-Blast: There is an explosion of power and the Psyker is thrown 1d10 metres into the air, falling to the ground (see page 210 for Falling Damage)."},
		{low: 19, high: 24,  result: "Soul Sear: Warp power courses through the Psyker’s body, scorching his very soul. The Psyker cannot use any powers for one hour and gains 5 Corruption Points."},
		{low: 25, high: 30,  result: "Locked In: The power cages the Psyker’s mind in an ethereal prison. The Psyker falls to the ground in a catatonic state. Each Round thereafter, he must spend a Full Action to Test Willpower. On a success, his mind is freed and restored to his body."},
		{low: 31, high: 38,  result: "Chronological Incontinence: Time warps around the Psyker. The character winks out of existence and reappears in 1d10 Rounds (or one minute if you’re using Narrative Time)."},
		{low: 39, high: 46,  result: "Psychic Mirror: The Psyker’s power is turned upon him. Resolve the power’s effects as normal but the power targe ts the Psyker instead. Should the power be of benefit, it instead deals 1d10+5 Energy Damage to the Psyker and t he beneficial effect is cancelled. Armour offers the Psyker no protection against this Damage."},
		{low: 47, high: 55,  result: "Warp Whispers: The ghostly voices of Daemons fill the air within 4d10 metres of the Psyker. Everyone in the area (including the Psyker) must make a Hard (–20) Willpower Test or gain 1d10 Corruption Points."},
		{low: 56, high: 61,  result: "Vice Versa: The Psyker’s mind is thrown out of his body and into another nearby creature or person. The P syker and a random being within 50 metres swap minds for 1d10 Rounds. This may include fellow Acolytes, or even enemy combatants. Each creature retains its Weapon Skill, Ballistic Skill, Intelligence, Perception, Willpower, and Fellowship during the swap, but gain the other Characteristics of the new body. Should either body be slain, the effect immediately ends. Both beings are strangely revolted by the process and are unable to meet each other’s gaze for some time afterwards. Each gains 1d5 Insanity Points for the experience. If there are no creatures within this range, the Psyker must make a Willpower Test or become catatonic for 1d5 Rounds whilst his mind wanders the warp and gains 1d5 Insanity Points."},
		{low: 62, high: 67,  result: "Dark Summoning: A Lesser Daemon (see Chapter XII: Aliens, Heretics & Antagonists) pops into existence within 3d10 metres of the Psyker for 1d10 Rounds or until it is slain. It detests the Psyker and trains its attacks on the fool that summoned it."},
		{low: 68, high: 72,  result: "Ethereal Storm: All sentient creatures (including the Psyker) within 1d100 metres take 1d10 Energy Damage that ignores Armour."},
		{low: 73, high: 78,  result: "Blood Rain: A psychic storm erupts, covering an area of 5d10 metres. In addition to whipping winds and raining blood , any Psychic Powers used in the area automatically invoke the Perils of the Warp for 1d5 Rounds."},
		{low: 79, high: 82,  result: "Cataclysmic Blast: The Psyker’s power overloads, arcing out in great bolts of warp energy. Anyone within 2d10 metres of him (including the Psyker) takes 1d10+5 Energy Damage and all of the Psyker’s clothing and gear are destroyed, leaving him naked and smoking on the ground."},
		{low: 83, high: 86,  result: "Mass Possession: Daemons ravage the minds of every living thing within 1d100 metres for 2d10 Rounds. Every character in the area must Test Willpower at the start of their Turn. A failed Test indicates that the character must spend his entire Turn fighting off the attack and counts as helpless. Characters that also fail the Test gain 1d5 Corruption Points."},
		{low: 87, high: 90,  result: "The Surly Bonds of Earth: Reality buckles and all gravity within 1d100 metres reverses for 1d10 Rounds. All creatures and unattended objects begin to lift off the ground at a rate of three metres per Round. At the end of this time, reality asserts itself and everything comes crashing down, likely dealing Damage to all those affected."},
		{low: 91, high: 99,  result: "Daemonhost: The Psyker must immediately pass a Very Hard (–30) Willpower Test or be possessed by a Daemon and become a Daemonhost! Create an Unbound Daemonhost (See Chapter XII: Aliens, Heretics & Antagonists) that will immediately attack. Only the destruction of the Daemonhost will free the Psyker (though he may die anyway if his body is destroyed in the process). If the Psyker does somehow manage to survive this result, he automatically gains 4d10 Corruption Points."},
		{low: 100, high: 100,  result: "Warp Feast: A rift in reality is torn open and the Psyker is sucked into the warp with a little burping noise. He is no more."}
	];
	
	const psychicPhen =
	[
		{low: 1,  high: 3,  result: "Dark Foreboding: A faint breeze blows past the psyker and those near him, and everyone gets the feeling that somewhere in the galaxy something unfortunate just happened."},
		{low: 4, high: 5,  result: "Warp Echo: For a few moments, all noises cause echoes, regardless of the surroundings."},
		{low: 6, high: 8,  result: "Unholy Stench: The air around the psyker becomes permeated with a bizarre and foul smell."},
		{low: 9, high: 11,  result: "Mind Warp: The psyker suffers a –5 penalty to Willpower Tests until the start of his next turn as his own inherent phobias, suspicions, and hatreds surge to the surface of his mind in a wave of unbound emotion."},
		{low: 12, high: 14,  result: "Hoarfrost: The temperature plummets for an instant, and a thin coating of frost forms to cover everything within 3d10 metres."},
		{low: 15, high: 17,  result: "Aura of Taint: All animals within 1d100 metres become spooked and agitated; characters with Psyniscience can pinpoint the psyker as the cause."},
		{low: 18, high: 20,  result: "Memory Worm: All people within line of sight of the psyker forget something trivial."},
		{low: 21, high: 23,  result: "Spoilage: Food and drink go bad in a 5d10 metre radius."},
		{low: 24, high: 26,  result: "Haunting Breeze: Winds whip up around the psyker for a few moments, blowing light objects around and guttering fires within 3d10 metres."},
		{low: 27, high: 29,  result: "Veil of Darkness: For a brief moment (effectively the remainder of the Round), the area within 3d10 metres is plunged into immediate darkness."},
		{low: 30, high: 32,  result: "Distorted Reflections: Mirrors and other reflflective surfaces within a radius of 5d10 metres distort or shatter."},
		{low: 33, high: 35,  result: "Breath Leech: Everyone (including the psyker) within a 3d10 metre radius becomes short of breath for one round and cannot make any Run or Charge Actions."},
		{low: 36, high: 38,  result: "Daemonic Mask: For a fleeting moment, the psyker takes on a daemonic appearance and gains a Fear rating of 1 until the start of the next turn. However, he also gains one Corruption Point."},
		{low: 39, high: 41,  result: "Unnatural Decay: All plant life within 3d10 metres of the psyker withers and dies."},
		{low: 42, high: 44,  result: "Spectral Gale: Howling winds erupt around the psyker, requiring him and everyone within 4d10 metres to make an Easy (+30) Agility or Strength Test to avoid being knocked to the ground."},
		{low: 45, high: 47,  result: "Bloody Tears: Blood weeps from stone and wood within 3d10 metres of the psyker. If there are any pictures or statues of people inside this area, they appear to be crying blood."},
		{low: 48, high: 50,  result: "The Earth Protests: The ground suddenly shakes, and everyone (including the psyker) within a 5d10 metre radius must make a Routine (+10) Agility Test or be knocked down."},
		{low: 51, high: 53,  result: "Actinic Discharge: Static electricity fifills the air within 5d10 metres causing hair to stand on end and unprotected electronics to short out, while the psyker is wreathed in eldritch lightning."},
		{low: 54, high: 56,  result: "Warp Ghosts: Ghostly apparitions fifill the air within 3d10 metres around the psyker, flflying about and howling in pain for a few brief moments. Everyone in the radius (except the psyker himself ) must test against a Fear rating of 1."},
		{low: 57, high: 59,  result: "Falling Upwards: Everything within 2d10 metres of the psyker (including the psyker himself ) rises 1d10 metres into the air as gravity brieflfly ceases. Almost immediately, everything crashes back to earth, suffering falling Damage as appropriate for the distances fallen."},
		{low: 60, high: 62,  result: "Banshee Howl: A shrill keening rings out across the immediate area, shattering glass and forcing every mortal creature able to hear it (including the psyker) to pass a Challenging (+0) Toughness Test or be deafened for 1d10 rounds."},
		{low: 63, high: 65,  result: "The Furies: The Psyker is assailed by unseen horrors. He is slammed to the ground and suffers 1d5 Damage (ignoring Armour, but not Toughness Bonus) and he must test against Fear (2)."},
		{low: 66, high: 68,  result: "Shadow of the Warp: For a split second, the world changes in appearance, and everyone within 1d100 metres has brief but horrifific glimpse of the shadow of the Warp. Everyone in the area (including the psyker) must make a Difficult (–10) Willpower Test or gain 1d5 Corruption Points."},
		{low: 69, high: 71,  result: "Tech Scorn: The machine spirits reject your unnatural ways. All un-warded technology within 5d10 metres malfunctions momentarily, and all ranged weapons Jam (see page 255), whilst characters with cybernetic implants must pass a Routine (+10) Toughness Test or suffer 1d5 Damage, ignoring Toughness Bonus and Armour."},
		{low: 72, high: 74,  result: "Warp Madness: A violent ripple of tainted discord causes all creatures within 2d10 metres (with the exception of the psyker) to become Frenzied for a Round and suffer 1d5 Corruption Points unless they can pass a Difficult (–10) Willpower Test."},
		{low: 75, high: 100,  result: "Perils of the Warp: The Warp opens in a maelstrom of energy. Roll on Table 7–3: Perils of the Warp instead."}
	];
	


	function registerEventHandlers()
	{
		on('chat:message', PsyPhen.handleChatMessage);
	}
	
	
	
	const Chat_Formatting_START = '<div style="background-color:#ffffff; padding:5px; border-width:2px; border-style:solid;">' +
                                '<div style="border-width:2px; border-style:dotted; padding:5px">';
	const Chat_Formatting_END = '</div>' +
                              '</div>';

	/**
	 * Grab chat message objects
	 *
	 * @param {object} msg
	 */
	function handleChatMessage(msg)
	{

		// Check if we are dealing with a !psyp command.
		if (msg.type === "api" && msg.content.indexOf("!psyp") !== -1)
		{
			const args = msg.content.split(/\s/);
			
			var content = msg.content;
			var words = content.split(' ');
			var roll = randomInteger(100);
			var push = false;
			var perilsOfWarp = false;
			
			//Shows inital roll
			sendChat('Psychic Phenomena', 
					Chat_Formatting_START + 'Inital roll: ' +roll + Chat_Formatting_END);
			
			//Splitting roll to check for doubles 
			var digits = (""+roll).split("");
			//Checking for push 
			if (args.length === 2)
			{
				if(args[1].toUpperCase() === 'PUSH') {
					push = true;
				}
			}
			//Checking for Perils of the Warp
			if((digits[0] === digits[1] && push === false) || (digits[0] !== digits[1] && push === true) || (roll > 74)){
				perilsOfWarp = true;
			}
			
			if(perilsOfWarp){
				var perilsRoll = randomInteger(100);
				
				sendChat('Psychic Phenomena', 
					Chat_Formatting_START + 'Perils roll: ' +perilsRoll + Chat_Formatting_END);
				var perilsFinal = PsyPhen._findPerils(perilsRoll);
				
				
				sendChat('Psychic Phenomena', 
					Chat_Formatting_START + perilsFinal.result + Chat_Formatting_END);
					
			}else{
				var phenFinal = PsyPhen._findPP(roll);
				
				sendChat('Psychic Phenomena', 
					Chat_Formatting_START + phenFinal.result + Chat_Formatting_END);

			}
		}
	}

	
	function _findPP(roll)
	{
		// Use _.find to find the Phen
		return _.find(psychicPhen, function (voodoo)
		{
			return (roll >= voodoo.low && roll <= voodoo.high);
		});
	}
	
	function _findPerils(roll)
	{
		// Use _.find to find the perils 
		return _.find(perilsOfTheWarp, function (voodoo)
		{
			return (roll >= voodoo.low && roll <= voodoo.high);
		});
	}
	
	


	return {
		registerEventHandlers: registerEventHandlers,
		handleChatMessage: handleChatMessage,
		_findPP: _findPP,
		_findPerils: _findPerils
		}
}());

	/**
	* Fires when the page has loaded.
	*/
	on("ready", function()
	{
		PsyPhen.registerEventHandlers();
	});
