 _
 
 var ScatterTable = (function()
{
	'use strict';
	//TODO:
	//Add in text rolling 

	//Energy tables
	var scatterTableValues =
	[
		{low: 1,  result: "Top left"},
		{low: 2,  result: "Up"},
		{low: 3,  result: "Top right"},
		{low: 4,  result: "Left"},
		{low: 5,  result: "Right"},
		{low: 6,  result: "Bottom left"},
		{low: 7,  result: "Bottom left"},
		{low: 8,  result: "Down"},
		{low: 9,  result: "Bottom right"},
		{low: 10,  result: "Bottom right"}
	];
	

	function registerEventHandlers()
	{
		on('chat:message', ScatterTable.handleChatMessage);
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
		if (msg.type === "api" && msg.content.indexOf("!scat") !== -1)
		{
			var roll = randomInteger(10);
			var direction = ScatterTable._findValue(roll);
			
			sendChat('Scatter direction (' + roll + ')', 
									Chat_Formatting_START + direction.result + Chat_Formatting_END);
			
		}
	}
	
	//Passing in the roll value and the table to be searched, tables switched from const to var to allow this to work.
	function _findValue(roll)
	{
		// Use _.find to find the perils 
		return _.find(scatterTableValues, function (hopeyoureluckylol)
		{
			return (roll == hopeyoureluckylol.low);
		});
	}
	
	


	return {
		registerEventHandlers: registerEventHandlers,
		handleChatMessage: handleChatMessage,
		_findValue: _findValue,
		}
}());

	/**
	* Fires when the page has loaded.
	*/
	on("ready", function()
	{
		ScatterTable.registerEventHandlers();
	});
