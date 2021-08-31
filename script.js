/* Troll Game Project 8/23/2021 */
function trollBattle() {
// initial prompt for the ser which gets stored in a variable
let action = window.prompt("You are walkingh through the forest mindning your own buisness and suddenly a troll appears\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nDo you BRIBE the troll?").toUpperCase();

// switch statment to hand the choice
switch(action){
	
			case "FIGHT": {
				let skill = window.prompt("Are you a skilled fighter? (YES or NO)").toUpperCase();
				let strong = window.prompt("Are you stronger than a troll? (YES or NO)").toUpperCase();
				// IF statement that analyzes the user responses
				if(skill === "YES" || strong === "YES"){
					// the user responded "YES" to at least one of the prompts
					// write the winning result to the document
					document.getElementById("result").innerHTML = "You can be either stronger or more skilled than the troll to survive!<br/>You live another day!";
					// clear any losing messages from the document
					document.getElementById("death").innerHTML = "";
					// play the winning audio file
					document.getElementById("win").play();
				} else {
					// user answered NO to both prompts
					// write the negative result to the document
					document.getElementById("death").innerHTML = "You are not skilled or strong? Why did you fight a troll?<br/>You have died!";
					// clear any positive messages from the document
					document.getElementById("result").innerHTML = "";
					// play the losing audio file
					document.getElementById("lose").play();
				}
				break;
			}
			case "RUN": {
				let fast = window.prompt("Are you a fast runner? (YES or NO)").toUpperCase();
				if (fast === "YES") {
					// write a positive result to the ducoment
					document.getElementById("result")
						innerHTML = "your speed has saved you!<br/> but can you live with your cowardice?";
					// clear any losing messages from the document
					document.getElementById("death").innerHTML = "";
					// play the winning audio file
					document.getElementById("win").play();
				} else {
					// write the negative result of the document
					document.getElementById("death").innerHTML = "you coward! if you are going to run atleast be fast!<br/>YOU HAVE DIED...";
					// clear the postive result from the document
					document.getElementById("result").innerHTML = "";
					// play the losing audio file
					document.getElementById("lose").play();
				}
				break;
			
			}// end case "RUN"

			case "BRIBE": {
				let money = window.prompt("You have to pay the troll-toll.\nDo you have any money? (YES or NO)").toUpperCase();
				if (money === "YES") {
					let amount = window.prompt("how much money do you have?\nPlease enter a numeric value");
					// convert the string to an interger(whole number)
					amount = parseInt(amount);
					if(amount > 50){
					// write a positive result to the ducoment
					document.getElementById("result")
						innerHTML = "Great job! The troll is happy.<br/>You may pass!";
					// clear any losing messages from the document
					document.getElementById("death").innerHTML = "";
					// play the winning audio file
					document.getElementById("win").play();
				} else {
					// write the negative result of the document
					document.getElementById("death").innerHTML = "The troll was insulted by your lack of coin!<br/>You have died...";
					// clear the postive result from the document
					document.getElementById("result").innerHTML = "";
					// play the losing audio file
					document.getElementById("lose").play();
				}

			}
			break;
		}// end case "BRIBE"
		default: {
		// the user has not entered a valid choice to the orignial prompt
		window.alrt("You entered:" + action + "Thank is not a valid choice, please try again.");
		// run the trollbattle function again
		trollBattle();

		}
	} // end of switch
} // end of trollBattle() function	