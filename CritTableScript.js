 _
 
 var CritTables = (function()
{
	'use strict';
	//TODO:
	//Add in text rolling 

	//Energy tables
	var energyArm =
	[
		{low: 1,  result: "The attack grazes the target's arm, causing it to spasm uncontrollably with pain. All tests involving that arm suffer a -30 penalty for 1d5([[1d5]]) rounds."},
		{low: 2,  result: "The attack smashes into the arm, sending currents of energy crackling down to the fingers and up to the shoulder. The target suffers 1 level of Fatigue, and that arm is Useless for 1d5([[1d5]]) rounds. "},
		{low: 3,  result: "The arm suffers superficial burns inflicting no small amount of pain on the target. The target suffers 1d5([[1d5]]) levels of Fatigue, and can take only a Half Action during his next turn."},
		{low: 4,  result: "The shock of the attack causes the character to temporarily lose control of his autonomous functions. He is Stunned for 1 roundand is knocked Prone. The arm is Useless for 1d10([[1d10]]) rounds. "},
		{low: 5,  result: "The attack causes energy to course through the target's arm. He is Stunned for 1 round, and the arm is Useless until the target receives medical treatment."},
		{low: 6,  result: "The attack wreathes the arm in flame, scorching clothing and armour, and temporarily fusing together the target's fingers. The target suffers 1d5([[1d5]]) levels of Fatigue and 1d5([[1d5]]) Weapon Skill and Ballistic Skill damage, and he must make a Challenging (+0) Toughness test or suffer the Lost Hand condition (see page 242)."},
		{low: 7,  result: "With a terrible snapping sound, the heat of the attack boils the marrow in the target's arm, causing it to crack or even shatter. The target suffers 1d5([[1d5]]) levels of Fatigue and is Stunned for 1 round. His arm is Useless until it is repaired."},
		{low: 8,  result: "Energy ripples across the target's arm, causing skin and muscle to slough disgustingly from the target's limb, revealing a sticky red mess of sinew and bone. The target suffers 1d10([[1d10]]) levels of Fatigue and must make a Challenging (+0) Toughness test or be Stunned for 1d5([[1d5]]) rounds. He now suffers from the Lost Arm condition (see page 242)."},
		{low: 9,  result: "Fire consumes the target's arm, burning the flesh to a crisp right down to the bone. The target must make an immediate Challenging (+0) Toughness test or die from shock. If he survives, the target suffers 1d10([[1d10]]) levels of Fatigue and is Stunned for 1 round. The target now suffers from the Lost Arm condition (see page 242)."},
		{low: 10,  result: "The attack reduces the arm to a cloud of crimson ash and sends the target crumbling to the ground. He immediately dies from shock, clutching his smoking stump."}
	];
	
	var energyBody =
	[
		{low: 1,  result: "A blow to the target's body steals the air from his lungs. The target can take only a Half Action on his next turn."},
		{low: 2,  result: "The blast punches the air from the targets body. He must make a Challenging (+0) Toughness test or be knocked Prone."},
		{low: 3,  result: "The attack cooks the flesh on the chest and abdomen. He suffers 2 levels of Fatigue and 1d5([[1d5]]) Toughness damage. "},
		{low: 4,  result: "The energy ripples all over the character, scorching his body with horrid third-degree burns. The target suffers 1d10([[1d10]]) levels of Fatigue, and can only take a Half Action on his next turn. "},
		{low: 5,  result: "The fury of the attack forces the target to the ground, helplessly covering his face and keening in agony. The target is knocked Prone and must make a Challenging (+0) Agility test or catch fire (see page 243). The target must also make a Challenging (+0) Toughness test or be Stunned for 1 round."},
		{low: 6,  result: "Struck by the full force of the attack, the target is sent reeling to the ground; smoke spiraling out from the wound. The target suffers 1d5([[1d5]]) levels of Fatigue, is knocked Prone, and is Stunned for 1d10([[1d10]]) rounds. In addition, he must make a Challenging (+0) Agility test or catch fire (see page 243)."},
		{low: 7,  result: "The intense power of the energy attack cooks the targets organs, burning his lungs and heart with intense heat. The target is Stunned for 2d10([[2d10]]) rounds, and his Toughness characteristic is permanently reduced by 1d10([[1d10]]). "},
		{low: 8,  result: "As the attack washes over the target, his skin turns black and peels off, while melted fat seeps from his clothing and armour. The target is Stunned for 2d10 rounds. His Strength, Toughness, and Agility characteristics are reduced by half (rounding up) until he receives medical treatment. Permanently reduce the character's Fellowship characteristic by 2d5."},
		{low: 9,  result: "The target is completely encased in fire, melting his skin and bursting his eyes like superheated eggs. He falls to the ground a lifeless corpse, blackened and charred with horrid burns. "},
		{low: 10,  result: "As above, but if the target is carrying any ammunition, roll 1d10([[1d10]]): on a result of 6 or higher, it explodes. Each target within 1d5([[1d5]]) metres suffers a single hit for 1d10+5([[1d10 + 5]]) Explosive damage to a randomly determined Hit Location. If the target carried any grenades or missiles, these detonate on the character's corpse with their normal effects one round after his demise. "}
	];
	
	var energyHead =
	[
		{low: 1,  result: "A grazing blow to the head disorientates the target. He suffers a -10 penalty to all tests (except Toughness tests) for 1 round."},
		{low: 2,  result: "The blast of energy dazzles the target. He is Blinded for 1 round."},
		{low: 3,  result: "The attack cooks off the target's ear, leaving him with a partially burned stump of cartilage. He is Deafened for 1d5([[1d5]]) hours (or until he receives medical attention)."},
		{low: 4,  result: "The energy attack burns away all of the hairs on the target's head, as well as leaving him reeling from the injury. The target suffers 2 levels of Fatigue and the target is Blinded for 1d5([[1d5]]) rounds. "},
		{low: 5,  result: "A blast of energy envelops the target's head, burning his face and hair, crisping his skin, and causing him to scream like a stuck grox. In addition to losing all hair on his scalp and face, he is Blinded for 1d10([[1d10]]) rounds and Stunned for 1 round. Permanently reduce the target's Fellowship characteristic by 1."},
		{low: 6,  result: "The attack cooks the target's face, melting his features and damaging his eyes. The target suffers 1d5([[1d5]]) levels of Fatigue and is Blinded for 1d10([[1d10]]) hours. Permanently reduce his Fellowship and Perception characteristics by 1d5([[1d5]])."},
		{low: 7,  result: "In a gruesome display, the flesh is burned from the target's head, exposing charred bone and muscle underneath. The target suffers 1d10([[1d10]]) levels of Fatigue. He is Blinded permanently. Roll 1d10([[1d10]]); this is the target's new Fellowship characteristic value. If his Fellowship value is already 10 or lower, this can be skipped as no one would notice any difference in his behaviour and demeanour."},
		{low: 8,  result: "The target's head is destroyed in a conflagration of fiery death. He does not survive."},
		{low: 9,  result: "Superheated by the attack, the target's brain explodes, tearing apart his skull and sending flaming chunks of meat flying at those nearby. The target is very, very dead. "},
		{low: 10,  result: "As above, except the target's entire body catches fire and runs off headless 2d10([[2d10]]) metres in a random direction (use the Scatter Diagram on page 230). Anything flammable it passes, including characters, must make a Challenging (+0) Agility test or catch fire (see page 243). "}
	];
	
	var energyLeg =
	[
		{low: 1,  result: "The blast of energy sears the flesh and bone of the target's leg, leaving a nasty burn scar. The target cannot use the Run or Charge actions for 2 rounds."},
		{low: 2,  result: "The attack flash-fries the target's leg, cooking chunks of flesh into char. The target must pass a Challenging (+0) Toughness test or suffer 1 level of Fatigue."},
		{low: 3,  result: "A solid blow to the leg sends currents of agony coursing through the target. The target suffers 1 level of Fatigue and is knocked Prone. Reduce his Movement by half (rounding up) for 1d10([[1d10]]) rounds. "},
		{low: 4,  result: "The blast causes a nasty compound fracture in the target's leg. Until the target receives medical attention, reduce his Movement by half (rounding up), and he cannot use the Run or Charge actions. "},
		{low: 5,  result: "The target's leg endures horrific burn damage, fusing clothing and armour with flesh and bone. The target suffers 1 level of Fatigue and is knocked Prone. Reduce his Movement by half (rounding up) for 2d10([[2d10]]) rounds."},
		{low: 6,  result: "The attack burns the target's foot, charring the flesh and emitting a foul aroma. The target suffers 2 levels of Fatigue. He must also make a Challenging (+0) Toughness test. If he succeeds, reduce his Movement by half (rounding up) until he receives medical attention; if he fails, he suffers the Lost Foot condition (see page 243)."},
		{low: 7,  result: "The energy attack fries the leg, leaving it a mess of blackened flesh. The leg is broken and until repaired, the target counts as having lost the leg. He suffers 1d5([[1d5]]) levels of Fatigue. He must also make a Challenging (+0) Toughness test or be Stunned for 1 round. He now suffers the Lost Leg condition (see page 243)."},
		{low: 8,  result: "Energy sears through the bone, causing the leg to be severed. The target suffers 1d10([[1d10]]) levels of Fatigue and suffers Blood Loss. He must also make a Challenging (+0) Toughness test or be Stunned for 1 round. He now suffers the Lost Leg condition (see page 243)."},
		{low: 9,  result: "The force of the attack reduces the leg to little more than a chunk of sizzling gristle. The target must make a Challenging (+0) Toughness test or die from shock. He now suffers the Lost Leg condition (see page 243). "},
		{low: 10,  result: "In a terrifying display of power, the leg immolates and thick fire consumes the target completely. He dies in a matter of agonizing seconds, his scorched corpse surrounded with smoke and flames. "}
	];
	
	//Explosive tables
	var explosiveArm =
	[
		{low: 1,  result: "The attack throws the limb backwards, painfully jerking it away from the body. The target suffers 1 level of Fatigue."},
		{low: 2,  result: "The force of the blast snaps the bones of the arm in half. The target drops anything held in that hand and must pass a Challenging (+0) Toughness test or be Stunned for 1 round."},
		{low: 3,  result: "The explosion removes 1 finger (and the tips from up to 1d5([[1d5]]) others) from the target's hand. The target suffers 1d10([[1d10]]) Weapon Skill and 1d10([[1d10]]) Ballistic Skill damage, and anything he was carrying in that hand is destroyed. If this is an explosive such as a grenade, it detonates; immediately resolve the 9 effect on this table upon the target. "},
		{low: 4,  result: "The blast rips the sinew of the arm straight from the bone. The target is Stunned for 1 round and must make a Challenging (+0) Toughness test or suffer Blood Loss. The limb is Useless until the target receives medical attention."},
		{low: 5,  result: "Fragments from the explosion tear into the target's hand, ripping away flesh and muscle alike. He must immediately make an Ordinary (+10) Toughness test. If he succeeds, permanently reduce his Weapon Skill and Ballistic Skill characteristics by 1; if he fails, he suffers the Lost Hand condition (see page 242)."},
		{low: 6,  result: "The explosive attack shatters the bone and mangles the flesh, turning the target's arm into a red ruin. The target suffers Blood Loss and 1d5([[1d5]]) levels of Fatigue. The arm is Useless until he receives medical attention"},
		{low: 7,  result: "In a violent hail of flesh, the arm is blown apart. The target must immediately make a Challenging (+0) Toughness test or die from shock. If he survives, he suffers 1d10([[1d10]]) levels of Fatigue, is Stunned for 1d10([[1d10]]) rounds, and suffers Blood Loss. The target now suffers from the Lost Arm condition (see page 242)."},
		{low: 8,  result: "The arm disintegrates under the force of the explosion, taking a good portion of the shoulder and chest with it. The target is sent screaming to the ground, where he dies in a pool of his own blood and organs."},
		{low: 9,  result: "With a mighty bang the arm is blasted from the target's body, killing the target instantly in a rain of blood droplets. In addition, if the target was carrying a weapon with a power source in his hand (such as a power sword or chainsword), then it violently explodes, inflicting a single hit for 1d10+5([[1d10 + 5]]) Impact damage to a randomly determined Hit Location upon each target to anyone within two metres."},
		{low: 10,  result: "As above, except if the target is carrying any ammunition it explodes, inflicting a single hit for 1d10+5([[1d10 + 5]]) Impact damage to a randomly determined Hit Location upon each target within 1d10([[1d10]]) metres (in addition to the hit noted above). If the target is carrying any grenades or missiles, these also detonate immediately with their normal effects."}
	];
	
	var explosiveBody =
	[
		{low: 1,  result: "The explosion flings the target backwards 1d5([[1d5]]) metres. The target is knocked Prone."},
		{low: 2,  result: "The target is blown backwards 1d5([[1d5]]) metres by a terrific explosion, suffering 1 level of Fatigue per metre travelled. The target is knocked Prone."},
		{low: 3,  result: "The force of the blast sends the target sprawling to the ground. The target is knocked backwards 1d5([[1d5]]) metres, Stunned for 1 round, and is knocked Prone."},
		{low: 4,  result: "The power of the explosion rends flesh and bone with horrific results. The target must make a Challenging (+0) Toughness test or suffer from Blood Loss and be Stunned for 1 round."},
		{low: 5,  result: "Concussion from the explosion knocks the target to the ground and turns his innards into so much ground meat. The target suffers 1d5([[1d5]]) levels of Fatigue and is knocked Prone. He must immediately make a Challenging (+0) Toughness test; if he fails, he suffers Blood Loss and his Toughness characteristic is permanently reduced by 1."},
		{low: 6,  result: "Chunks of the target's flesh are ripped free by the force of the attack leaving large, weeping wounds. The target is Stunned for 1 round and suffers Blood Loss."},
		{low: 7,  result: "The explosive force of the attack ruptures the target's flesh and scrambles his nervous system, knocking him to the ground. The target is Stunned for 1d10([[1d10]]) rounds and is knocked Prone He also suffers Blood Loss, and must make a Challenging (+0) Toughness test or fall Unconscious."},
		{low: 8,  result: "The target's chest explodes outward, disgorging a river of partially cooked organs onto the ground, killing him instantly."},
		{low: 9,  result: "Pieces of the target's body fly in all directions as he is torn into bloody gobbets. If the target is carrying any ammunition, it explodes, inflicting a single hit for 1d10+5([[1d10 + 5]]) Impact damage to a randomly determined Hit Location upon each target within 1d10([[1d10]]) metres. If the target is carrying any grenades or missiles, these detonate immediately."},
		{low: 10,  result: "As above, except anyone within 1d10([[1d10]]) metres of the target is drenched in gore. Each affected character must make a Challenging (+0) Agility test or suffer a -10 penalty to Weapon Skill and Ballistic Skill tests for 1 round, as blood fouls his sight."}
	];
	
	var explosiveHead =
	[
		{low: 1,  result: "The explosion leaves the target confused. He can take only a Half Action on his next turn as he recovers his senses."},
		{low: 2,  result: "The flash and noise leaves the target Blinded and Deafened for 1 round."},
		{low: 3,  result: "The detonation leaves the target's face a bloody ruin from scores of cuts. Permanent scarring is very likely. The target suffers 2 levels of Fatigue and must make a Challenging (+0) Toughness test or suffer 1d10([[1d10]]) points of Perception and Fellowship damage. "},
		{low: 4,  result: "The force of the blast knocks the target to the ground and leaves him senseless. The target suffers 1d10([[1d10]]) Intelligence damage and is knocked Prone. He must also pass a Challenging (+0) Toughness test; if he fails, he is Stunned for 2 rounds and his Intelligence characteristic is permanently reduced by 1."},
		{low: 5,  result: "The explosion flays the flesh from the target's face and bursts his eardrums with its force. The target is Stunned for 1d10([[1d10]]) rounds and is permanently Deafened. Permanently reduce his Fellowship characteristic by 1d5([[1d5]])."},
		{low: 6,  result: "The target's head explodes under the force of the attack, leaving his headless corpse to spurt blood from the neck for the next few minutes. Needless to say, this is instantly and messily fatal. "},
		{low: 7,  result: "Both head and body are blown into a mangled mess, instantly killing the target. If he is carrying any ammunition, it explodes, inflicting a single hit for 1d10+5([[1d10 + 5]]) Impact damage to a randomly determined Hit Location on each target within 1d5([[1d5]]) metres. If the target was carrying any grenades or missiles, these also detonate immediately with their normal effects. "},
		{low: 8,  result: "In a series of unpleasant explosions the target's head and torso peel apart, leaving a gory mess on the ground. For the rest of the fight, anyone moving over this spot must make a Challenging (+0) Agility test or fall Prone."},
		{low: 9,  result: "The target ceases to exist in any tangible way, entirely turning into a kind of bright red mist that spreads through the surrounding area. He cannot get much deader than this, except' "},
		{low: 10,  result: "As above, except such is the unspeakably appalling manner in which the target was killed that each of the target's allies within two metres of where the target stood must make an immediate Challenging (+0) Willpower test. If an ally fails the test, he must spend his next turn fleeing from the attacker."}
	];
	
	var explosiveLeg =
	[
		{low: 1,  result: "A glancing blast sends the character backwards one metre. The target must make a Challenging (+0) Toughness test or be knocked Prone."},
		{low: 2,  result: "The force of the explosion takes the target's feet out from under him. He is knocked Prone and cannot use any Movement action except for the Half Move action for 1d5([[1d5]]) rounds. "},
		{low: 3,  result: "The concussion causes the target's leg to fracture. The target suffers 2d10([[2d10]]) Agility damage."},
		{low: 4,  result: "The explosion sends the target spinning through the air. He is flung 1d5([[1d5]]) metres away in a random direction using the Scatter Diagram. It takes the target a Full Action to regain his feet, and his Movement is reduced by half (rounding up) for 1d10([[1d10]]) rounds."},
		{low: 5,  result: "Explosive force removes part of the target's foot and scatters the ragged remnants over a wide area. The target must make a Difficult (-10) Toughness test or suffer 1d5([[1d5]]) levels of Fatigue. Permanently reduce his Agility characteristic by 1d5([[1d5]])."},
		{low: 6,  result: "The concussive force of the blast shatters the target's leg bones and splits apart flesh. The target suffers 1d10([[1d10]]) levels of Fatigue. The leg is Useless until he receives medical attention. The target must make a Challenging (+0) Toughness test; if he fails, he suffers the Lost Foot condition (see page 198)."},
		{low: 7,  result: "The explosion reduces the target's leg into a hunk of smoking meat. The target must immediately make a Challenging (+0) Toughness test or die from shock. If he survives, he suffers 1d10([[1d10]]) levels of Fatigue, is Stunned for 1d10([[1d10]]) rounds, and suffers Blood Loss. He now suffers the Lost Leg condition (see page 198)."},
		{low: 8,  result: "The blast tears the leg from the body in a geyser of gore, sending him crashing to the ground, blood pumping from the ragged stump. This grievous wound is instantly fatal."},
		{low: 9,  result: "The leg explodes in an eruption of blood, killing the target immediately and sending tiny fragments of bone, clothing, and armour hurtling off in all directions. Each target within 2 metres suffers a single hit for 1d10+2 Impact damage to a randomly determined Hit Location."},
		{low: 10,  result: "As above, but if the target is carrying any ammunition it detonates, inflicting a single hit for 1d10+5([[1d10 + 5]]) Impact damage to a randomly determined Hit Location upon each target within 1d10([[1d10]]) metres (in addition to the hit noted above). If the target is carrying any grenades or missiles, these detonate immediately with their normal effects. "}
	];
	
	//Impact tables
	var impactArm =
	[
		{low: 1,  result: "The attack strikes the target's limb with a powerful blow. He drops anything he was holding in that hand."},
		{low: 2,  result: "The strike leaves a deep bruise, possibly causing minor fractures in the arm. The target suffers 1 level of Fatigue."},
		{low: 3,  result: "The impact smashes into the arm or whatever the target is holding, ripping it away and leaving the target reeling from the pain. He is Stunned for 1 round and drops anything he was holding in that hand. Roll 1d10([[1d10]]); on a result of 1, anything the target was holding in that hand is badly damaged and unusable until repaired."},
		{low: 4,  result: "The impact crushes flesh and bone. The target drops anything he was holding in that hand, and must make a Challenging (+0) Toughness test or suffer 1d10([[1d10]]) Weapon Skill and 1d10([[1d10]]) Ballistic Skill damage. "},
		{low: 5,  result: "Muscle and bone take a pounding as the attack rips into the arm. The limb is Useless until the target receives medical attention."},
		{low: 6,  result: "The attack pulverises the target's hand, crushing and breaking 1d5([[1d5]]) fingers. The target suffers 1 level of Fatigue. He must make a Challenging (+0) Toughness test; if he fails, permanently reduce his Weapon Skill and Ballistic Skill characteristics by 2. "},
		{low: 7,  result: "With a loud snap, the arm bone is shattered and left hanging limply at the target's side, dribbling blood onto the ground. The target suffers Blood Loss. The arm is Useless until the target receives medical attention."},
		{low: 8,  result: "The force of the attack takes the arm off just below the shoulder, showering blood and gore across the ground. The target must immediately make a Challenging (+0) Toughness test or die from shock. If he survives, he suffers 1d5([[1d5]]) levels of Fatigue, is Stunned for 1d10([[1d10]]) rounds, and suffers Blood Loss. He also now suffers from the Lost Arm condition (see page 242)."},
		{low: 9,  result: "In a rain of blood, gore, and meat, the target's arm is removed from his body. Screaming incoherently, he twists about in agony for a few seconds before collapsing to the ground and dying."},
		{low: 10,  result: "As per the effect directly above, except as the arm is removed by the force of the attack, bone, chunks of flesh, clothing, and armour fragments fly about like blood-soaked shrapnel. Each target within 2 metres suffers a single hit for 1d5-3([[1d5 - 3]]) Impact damage to a randomly determined Hit Location."}
	];
	
	var impactBody =
	[
		{low: 1,  result: "A blow to the target's body steals the breath from his lungs. The target can take only a Half Action on his next turn."},
		{low: 2,  result: "The impact punches the air from the target's body. He suffers 1 level of Fatigue and is knocked Prone. "},
		{low: 3,  result: "The attack breaks a rib with a resounding crunch. The target is Stunned for 1 round and knocked Prone. "},
		{low: 4,  result: "The blow batters the target, shattering a rib. The target suffers 1d10([[1d10]]) Toughness damage and must make a Challenging (+0) Agility test or be knocked Prone."},
		{low: 5,  result: "A solid blow to the chest pulverises the target's innards, and he momentarily doubles over in pain, clutching himself and crying in agony. The target is Stunned for 2 rounds and must make a Challenging (+0) Toughness test or suffer 1d5([[1d5]]) levels of Fatigue."},
		{low: 6,  result: "The attack knocks the target sprawling on the ground. The target suffers 1d5([[1d5]]) levels of Fatigue, is flung 1d5([[1d5]]) metres away from the attacker (stopping if he hits a solid object), and falls Prone. He is Stunned for 2 rounds."},
		{low: 7,  result: "With an audible crack, 1d5([[1d5]]) of the target's ribs break. Permanently reduce the target's Toughness characteristic by 1d5([[1d5]]). Until he receives medical attention, at the end of each round in which this character took an action, roll 1d10([[1d10]]). On a result of 1 or 2, the character dies instantly as a shattered rib pierces a vital organ. "},
		{low: 8,  result: "The force of the attack ruptures several of the target's organs and knocks him down, gasping in wretched pain. The target suffers Blood Loss. Permanently reduce his Toughness characteristic by 1d10([[1d10]])."},
		{low: 9,  result: "The target jerks back from the force of the attack, throwing back his head and spewing out a jet of blood before crumpling to the ground dead."},
		{low: 10,  result: "As per the effect directly above, except the target's lifeless form is thrown 1d10([[1d10]]) metres directly away from the attack. Any target in the corpse's path must make a Challenging (+0) Agility test or be knocked Prone."}
	];
	
	var impactHead =
	[
		{low: 1,  result: "The impact fills the target's head with a terrible ringing noise. The target must make a Challenging (+0) Toughness test or suffer 1 level of Fatigue."},
		{low: 2,  result: "The hit causes the target's sight to blur and his head to spin. The target suffers a -10 penalty to Perception and Intelligence tests for 1d5([[1d5]]) rounds."},
		{low: 3,  result: "The target's nose breaks in a torrent of blood, blinding him for 1 round. The target must make a Challenging (+0) Toughness test or be Stunned for 1 round."},
		{low: 4,  result: "The concussive strike staggers the target. The target must make a Challenging (+0) Toughness test or be Stunned for 1 round and knocked Prone."},
		{low: 5,  result: "The force of the blow sends the target reeling in pain. The target suffers 1 level of Fatigue, is Stunned for 1 round, and staggers backwards 1d5([[1d5]]) metres. Permanently reduce his Intelligence characteristic by 1."},
		{low: 6,  result: "The target's head is snapped back by the attack, leaving him staggering around trying to control mind-numbing pain. The target is Stunned for 1d5([[1d5]]) rounds, is knocked backwards 1d5([[1d5]]) metres, and must make a Challenging (+0) Agility test or be knocked Prone. "},
		{low: 7,  result: "The attack slams into the target's head, fracturing his skull and opening a long tear in his scalp. The target is Stunned for 1d10([[1d10]]) rounds. His Movement is halved (rounding up) for 1d10([[1d10]]) hours. "},
		{low: 8,  result: "With a sickening crunch, the target's head snaps around to face the opposite direction. The twisted vertebrae immediately sever every connection within the target's neck, and his death is instantaneous."},
		{low: 9,  result: "The target's head bursts like an overripe fruit and sprays blood, bone, and brains in all directions. Each target within 4 metres of the deceased must make a Challenging (+0) Agility test or suffer a -10 penalty to his Weapon Skill and Ballistic Skill tests on his next turn, as gore gets in his eyes or obscures his visor."},
		{low: 10,  result: "As above, except that the attack was so powerful that it passes through the target and strikes another target nearby. If the hit was from a melee weapon, the attacker may immediately make another attack (with the same weapon) against any other target he can reach without moving. If the hit was from a ranged weapon, he may immediately make another attack (with the same weapon) against any target standing directly behind the original target and within range of his weapon."}
	];
	
	var impactLeg =
	[
		{low: 1,  result: "A blow to the leg results in deep bruises and teeth-clenching pain. The target suffers 1 level of Fatigue."},
		{low: 2,  result: "A grazing strike against the leg slows the target. The target's Movement is reduced by half (rounding up) for 1 round. He must make a Challenging (+0) Toughness test or be Stunned for 1 round and fall Prone."},
		{low: 3,  result: "A solid blow to the leg sends lightning agony coursing through the target. He is knocked Prone and suffers 1d10([[1d10]]) Agility damage."},
		{low: 4,  result: "A powerful impact causes micro-fractures in the target's bones, inflicting considerable agony. The target is knocked Prone and suffers 2d10([[2d10]]) Agility damage."},
		{low: 5,  result: "The blow breaks the target's leg with an agonising snap. He is Stunned for 1 round and knocked Prone. Reduce his Movement to 1 metre until he receives medical attention."},
		{low: 6,  result: "With a sharp cracking noise, several of the tiny bones in the target's foot snap like twigs. The target suffers 2 levels of Fatigue, and his Movement is halved (rounded up) until he receives medical attention. He must make a Challenging (+0) Toughness test or suffer the Lost Foot condition (see page 243)."},
		{low: 7,  result: "With a nasty crunch, the leg is broken and the target is left mewling in pain. He is Stunned for 2 round and falls Prone. The leg is Useless until the target receives medical attention."},
		{low: 8,  result: "The force of the attack rips the lower half of the leg away in a stream of blood. The target must immediately make a Challenging (+0) Toughness test or die from shock. If he survives, he suffers Blood Loss and suffers the Lost Leg condition (see page 243). Permanently reduce his Agility Characteristic by 1d5([[1d5]])."},
		{low: 9,  result: "The hit rips apart the flesh of the leg, causing blood to spray out in all directions. Even as the target tries futilely to stop the sudden flood of vital fluid, he falls to the ground and dies in a spreading pool of gore."},
		{low: 10,  result: "As above, but such is the agony of the target's death that his terrible screams drown out all conversation within 2d10([[2d10]]) metres for the rest of the round."}
	];
	
	//Rending tables
	var rendingArm =
	[
		{low: 1,  result: "The slashing attack tears free whatever the target was carrying. He drops anything he was holding in that hand."},
		{low: 2,  result: "Deep cuts cause the target to drop his arm. He suffers 1 level of Fatigue and releases anything he was holding in that hand."},
		{low: 3,  result: "The attack shreds the target's arm into ribbons, causing the target to scream in pain. He drops anything he was holding in that hand, and must make a successful Challenging (+0) Toughness test or suffer Blood Loss."},
		{low: 4,  result: "The attack flays the skin from the limb, filling the air with blood and the sounds of his screaming. The target suffers 2 levels of Fatigue and falls Prone. The arm is Useless for 1d10([[1d10]]) rounds."},
		{low: 5,  result: "A bloody and very painful-looking furrow is opened up in the target's arm. He suffers Blood Loss and drops anything he was holding in that hand. The arm is Useless until the target receives medical attention."},
		{low: 6,  result: "The blow mangles flesh and muscle as it hacks into the target's hand, liberating 1d5([[1d5]]) fingers in the process (a roll of a 5 means that the thumb has been sheared off as well). The target is Stunned for 1 round and must immediately make a Challenging (+0) Toughness test or suffers the Lost Hand condition (see page 242)."},
		{low: 7,  result: "The attack rips apart skin, muscle, bone, and sinew with ease, turning the target's arm into a dangling ruin of severed veins and spurting blood. He suffers Blood Loss and 1d10([[1d10]]) Strength damage. The arm is Useless until the target receives medical attention."},
		{low: 8,  result: "With an assortment of unnatural, wet, ripping sounds, the arm flies free of the body trailing blood behind it in a crimson arc. The target must immediately make a Challenging (+0) Toughness test or die from shock. If he survives, he is Stunned for 1d10([[1d10]]) rounds and suffers Blood Loss. He suffers from the Lost Arm condition (see page 242). "},
		{low: 9,  result: "The attack slices clean through the arm and into the torso, drenching the ground in blood and gore. The target is killed instantly, leaving a ruined corpse on the ground. "},
		{low: 10,  result: "As above, but as the arm falls to the ground its fingers spasm uncontrollably, pulling the trigger of any held weapon. If the target was carrying a ranged weapon, roll 1d100([[1d100]]). On a result of 96 or higher, a single randomly determined target within 2d10([[2d10]]) metres is hit struck by a single hit from that weapon on a randomly determined Hit Location. "}
	];
	
	var rendingBody =
	[
		{low: 1,  result: "If the target is not wearing armour on this location, he suffers 1 level of Fatigue from a painful laceration. If he is wearing armour, there is no effect, and he thanks the Emperor for his foresight. "},
		{low: 2,  result: "A powerful slash opens a painful rent in the target's body. He suffers 1 level of Fatigue and must make a Challenging (+0) Toughness test or be Stunned for 1 round."},
		{low: 3,  result: "The attack rips a large patch of skin from the target's torso, leaving him gasping in pain. The target is Stunned for 1 round and must make a Challenging (+0) Toughness test or suffer Blood Loss. "},
		{low: 4,  result: "The blow opens up a long wound in the target's torso, causing him to double over in terrible pain. The target is Stunned for 1 round and suffers Blood Loss."},
		{low: 5,  result: "A torrent of blood spills from the deep cuts, making the ground slick with gore. The target suffers Blood Loss and suffers 1d10([[1d10]]) Toughness damage. Any character attempting to move through this pool of blood must make a Challenging (+0) Agility test or fall Prone. "},
		{low: 6,  result: "The mighty attack takes a sizeable chunk out of the target and knocks him to the ground as he clutches the oozing wound, shrieking in pain. The target is knocked Prone, suffers Blood Loss, and suffers 1d10([[1d10]]) Toughness damage."},
		{low: 7,  result: "The attack cuts open the target's abdomen, threatening to expose his entrails. The target suffers Blood Loss. Permanently reduce his Toughness characteristic by 1d5([[1d5]]). Until he receives medical attention, at the end of each round, if he took any actions (besides holding his guts in and waiting for a medic), roll 1d10([[1d10]]). On a result of 1 or 2, he suffers an additional 2d10([[2d10]]) Rending damage."},
		{low: 8,  result: "With a vile tearing noise, the skin on the target's chest comes away revealing a red ruin of muscle. He must succeed on a Challenging (+0) Toughness test or perish. If he survives, he is Stunned for 1 round and suffers Blood Loss. Permanently reduce his Toughness characteristic by 1d10([[1d10]])."},
		{low: 9,  result: "The powerful blow cleaves the target from gullet to groin, revealing his internal organs and spilling them on to the ground before him. The target is now quite dead. "},
		{low: 10,  result: "As above, except that the area and the target are awash with slippery gore. For the rest of the fight, any character who moves within four metres of the target's corpse must make a Challenging (+0) Agility test or fall Prone."}
	];
	
	var rendingHead =
	[
		{low: 1,  result: "The attack tears a painful rent in the target's face. If he is wearing a helmet, he suffers no ill effects; otherwise, he suffers 1 level of Fatigue."},
		{low: 2,  result: "The attack slices open the target's scalp, which immediately begins to bleed profusely, spilling into his eyes. The target suffers a -10 penalty to Weapon Skill and Ballistic Skill tests for the next 1d10([[1d10]]) rounds. He must pass a Challenging (+0) Toughness test or suffer Blood Loss. "},
		{low: 3,  result: "The attack rips open the target's face with a vicious shredding sound. He is Stunned for 1 round and suffers Blood Loss. If he is wearing a helmet, it is torn off. "},
		{low: 4,  result: "The attack slices across one of the target's eye sockets, possibly scooping out the eye. The target suffers 1d10([[1d10]]) Perception damage. He must make a Routine (+20) Toughness; test if he fails, he suffers the Lost Eye condition (see page 242)."},
		{low: 5,  result: "The attack tears the target's helmet from his head. If he is not wearing a helmet, the target instead loses an ear and is Deafened until he receives medical attention. If he loses an ear, he must also must pass a Challenging (+0) Toughness test or have his Fellowship characteristic permanently reduced by 1. The target is Stunned for 1d5([[1d5]]) rounds."},
		{low: 6,  result: "The blow rips violently across the target's face, taking with it an important feature. He suffers 1d5([[1d5]]) levels of Fatigue and suffers Blood Loss. Roll 1d10([[1d10]]) to see what the target has lost.1-3: Eye (see the Lost Eye condition on page 242),4-7: Nose (permanently reduce his Fellowship characteristic by 1d10([[1d10]])),8-10: Ear (the target is Deafened until he receives medical attention)."}, //Special code needed for this
		{low: 7,  result: "In a splatter of skin and teeth, the attack removes most of the target's face. The strike might not have slain him, but the target's words are forever slurred as a result of this vicious injury. The target is Stunned for 1 round and suffers Blood Loss. He is permanently Blinded. Permanently reduce his Fellowship characteristic by 1d10([[1d10]])."},
		{low: 8,  result: "The blow slices into the side of the target's head causing his eyes to pop out and his brain to ooze down his cheek like spilled jelly. He is dead before he hits the ground."},
		{low: 9,  result: "With a sound not unlike a wet sponge being torn in half, the target's head flies free of its body and sails through the air, landing harmlessly 2d10([[2d10]]) metres away with a soggy thud. The target is instantly slain."},
		{low: 10,  result: "As above, except the target's neck spews blood in a torrent, drenching all those within 1d5([[1d5]]) metres and forcing each effected target to make a Challenging (+0) Agility test. Each character who fails the Test suffers a -10 penalty to Weapon Skill and Ballistic Skill tests for 1 round, as gore fills his eyes or fouls his visor."}
	];
	
	var rendingLeg =
	[
		{low: 1,  result: "The attack knocks the limb backwards, painfully twisting it awkwardly. The target suffers 1 level of Fatigue."},
		{low: 2,  result: "The target's kneecap splits open. He must make a Challenging (+0) Agility test or fall Prone and suffer Blood Loss as the injured extremity hits the ground."},
		{low: 3,  result: "The attack rips a length of flesh from the leg. The target suffers Blood Loss and suffers 1d5([[1d5]]) Agility damage."},
		{low: 4,  result: "The attack rips the kneecap free from the target's leg, and he collapses to the ground. The target is knocked Prone and suffers 1d10([[1d10]]) Agility Damage. His Movement values are halved (rounding up) until he receives medical attention."},
		{low: 5,  result: "In a spray of blood, the target's leg is deeply slashed, exposing bone, sinew, and muscle. The target suffers Blood Loss. He must make a Challenging (+0) Toughness test; if he fails, permanently reduce his Agility characteristic by 1."},
		{low: 6,  result: "The blow slices a couple of centimetres off the end of the target's foot. The target suffers Blood Loss. He must make a Challenging (+0) Toughness test. If he succeeds, his Movement is halved (rounding up) until he receives medical attention. If he fails, he suffers the Lost Foot condition (see page 243)."},
		{low: 7,  result: "The force of the blow cuts deep into the leg, grinding against bone and tearing ligaments apart. The target is Stunned for 1 round, is knocked Prone, and suffers Blood Loss. The leg is Useless until the target receives medical attention."},
		{low: 8,  result: "In a single bloody hack the target's leg is lopped off, spurting its vital fluids across the ground. The target must immediately make a Challenging (+0) Toughness test or die from shock. If he survives, he is Stunned for 1d10([[1d10]]) rounds and suffers Blood Loss. He suffers the Lost Leg condition (see page 243)."},
		{low: 9,  result: "With a meaty chop, the leg comes away at the hip. The target pitches to the ground howling in agony before dying."},
		{low: 10,  result: "As above, except that the tide of blood is so intense that, for the remainder of the encounter, any character who makes a Run or Charge action within 6 metres of the corpse must make a Challenging (+0) Agility test or be knocked Prone."}
	];
	
	var template =
	[
		{low: 1,  result: ""},
		{low: 2,  result: ""},
		{low: 3,  result: ""},
		{low: 4,  result: ""},
		{low: 5,  result: ""},
		{low: 6,  result: ""},
		{low: 7,  result: ""},
		{low: 8,  result: ""},
		{low: 9,  result: ""},
		{low: 10,  result: ""}
	];

	function registerEventHandlers()
	{
		on('chat:message', CritTables.handleChatMessage);
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
		if (msg.type === "api" && msg.content.indexOf("!crit") !== -1)
		{
			const args = msg.content.split(/\s/);
			
			if(args.length !== 4){
				sendChat('Crit', 
					Chat_Formatting_START + 'Please format your command like: !crit rollValue damageType(E,X,I,R) bodyPart(H,B,A,L) e.g. !crit 4 X B' + Chat_Formatting_END);
			}
			else{
				var returnMessage = '';
				switch(args[2].toUpperCase()){
					case 'E':
						switch(args[3].toUpperCase()){
							case 'H':
								returnMessage = (CritTables._findValue(args[1], energyHead)).result;
								break;
							case 'B':
								returnMessage = (CritTables._findValue(args[1], energyBody)).result;
								break;
							case 'A':
								returnMessage = (CritTables._findValue(args[1], energyArm)).result;
								break;
							case 'L':
								returnMessage = (CritTables._findValue(args[1], energyLeg)).result;
								break;
						}
						break;
					case 'X':
						switch(args[3].toUpperCase()){
							case 'H':
								returnMessage = (CritTables._findValue(args[1], explosiveHead)).result;
								break;
							case 'B':
								returnMessage = (CritTables._findValue(args[1], explosiveBody)).result;
								break;
							case 'A':
								returnMessage = (CritTables._findValue(args[1], explosiveArm)).result;
								break;
							case 'L':
								returnMessage = (CritTables._findValue(args[1], explosiveLeg)).result;
								break;
						}
						break;
					case 'I':
						switch(args[3].toUpperCase()){
							case 'H':
								returnMessage = (CritTables._findValue(args[1], impactHead)).result;
								break;
							case 'B':
								returnMessage = (CritTables._findValue(args[1], impactBody)).result;
								break;
							case 'A':
								returnMessage = (CritTables._findValue(args[1], impactArm)).result;
								break;
							case 'L':
								returnMessage = (CritTables._findValue(args[1], impactLeg)).result;
								break;
						}
						break;
					case 'R':
						switch(args[3].toUpperCase()){
							case 'H':
								if(args[1] == 6){
									var rendingLost = randomInteger(10);
									if(rendingLost < 4){
										returnMessage = 'The blow rips violently across the target\'s face, taking with it an important feature. He suffers 1d5([[1d5]]) levels of Fatigue and suffers Blood Loss. Roll 1d10('+rendingLost+') to see what the target has lost: 1-3: Eye (see the Lost Eye condition on page 242)';
									}else if((rendingLost < 8) && (rendingLost >= 4)){
										returnMessage = 'The blow rips violently across the target\'s face, taking with it an important feature. He suffers 1d5([[1d5]]) levels of Fatigue and suffers Blood Loss. Roll 1d10('+rendingLost+') to see what the target has lost: 4-7: Nose (permanently reduce his Fellowship characteristic by 1d10([[1d10]]))';
									}else{
										returnMessage = 'The blow rips violently across the target\'s face, taking with it an important feature. He suffers 1d5([[1d5]]) levels of Fatigue and suffers Blood Loss. Roll 1d10('+rendingLost+') to see what the target has lost: 8-10: Ear (the target is Deafened until he receives medical attention).';
									}
								}else{
									returnMessage = (CritTables._findValue(args[1], rendingHead)).result;
								}
								break;
							case 'B':
								returnMessage = (CritTables._findValue(args[1], rendingBody)).result;
								break;
							case 'A':
								returnMessage = (CritTables._findValue(args[1], rendingArm)).result;
								break;
							case 'L':
								returnMessage = (CritTables._findValue(args[1], rendingLeg)).result;
								break;
						}
						break;
					default:
						sendChat('Crit', 
							Chat_Formatting_START + 'Invalid damage type inputted, please only use values of E(energy), X(explosive), I(impact), R(rending).' + Chat_Formatting_END);
						break;
				}
				
				if(returnMessage !== ''){
					sendChat('Crit', 
						Chat_Formatting_START + returnMessage + Chat_Formatting_END);
				}
				else{
					sendChat('Error Crit', 
						Chat_Formatting_START + 'Error' + Chat_Formatting_END);
				}
			}
			
		}
	}
	
	//Passing in the roll value and the table to be searched, tables switched from const to var to allow this to work.
	function _findValue(roll, table)
	{
		// Use _.find to find the perils 
		return _.find(table, function (urdead)
		{
			return (roll == urdead.low);
		});
	}
	
	


	return {
		registerEventHandlers: registerEventHandlers,
		handleChatMessage: handleChatMessage,
		_findValue: _findValue,
		_findTable: _findTable
		}
}());

	/**
	* Fires when the page has loaded.
	*/
	on("ready", function()
	{
		CritTables.registerEventHandlers();
	});
