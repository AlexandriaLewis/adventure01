console.log("Welcome Stranger ;P");

var answer = prompt("Do you want to play a game? yes or no");

// <--- YEARLY if --->"Do you want to play a game? yes or no"
  if (answer === "yes") {
    answer = prompt("Have you inspected the page yet? yes or no");
    // <--- MONTHLY if 1 --->
      if (answer === "yes") {
        console.log("Well aren't you special.");
        answer = confirm("Sweet. Don't hit ok.");
        // <--- WEEKLY if 1a --->
        if (answer === true) {
          console.log("You win the game!");
          confirm("You caught me ^_____^");
        } else if (answer === false) {
          console.log("You just lost the game. But it could have been worse, believe me.");
          confirm("GOT YOU");
        } else {
          burnBabyBurn();
        }
        // <--- WEEKLY if 1a ---> "Have you inspected the page yet? yes or no"
      } else if (answer === "no") {
        console.log("No worries, I noticed you can't do it right now.");
        answer = confirm("Then we need to fix that.");
        // <--- WEEKLY if 2a --->
        if (answer === true) {
          console.log("Inspect and refresh buddy.");
          confirm("Inspect and refresh pal.");
        } else if (answer === false) {
          console.log("You don goofed.");
          confirm("I gave you an out.");
          burnBabyBurn();
        } else {
          confirm("How did this get triggered?");
        }
        // <--- WEEKLY if 2a --->
      } else {
        // <--- WEEKLY if 3a --->"Have you inspected the page yet? yes or no"
        answer = prompt("You said something random. Try to redeem yourself: yes or no");
        if (answer === "yes") {
          console.log("REPENT");
          confirm("Thank you for participating. But it is too late mortal.");
          burnBabyBurn();
        } else if (answer === "no" || false) {
          console.log("REPENT");
          prompt("Your end is imminent.");
          burnBabyBurn();
        } else {
          console.log("REPENT FOR THE END IS NEIGH");
          prompt("you fool");
          burnBabyBurn();
        }
        // <--- WEEKLY if 3a --->
      }

    // <--- MONTHLY if 1 --->"Do you want to play a game? yes or no"

  } else if (answer === "no") {
    console.log("Then why bother participate in the first place?!");
    answer = prompt("TOUGH COOKIES PLAY MY GAME SAY: OK don't say no");
    // <--- MONTHLY if 2 --->"TOUGH COOKIES PLAY MY GAME SAY: OK"
    if (answer === "ok") {
      // <--- WEEKLY if 1b --->
      console.log("That'll do pig.");
      answer = confirm("Now you're ready to play?");
      if (answer === true) {
        console.log("Did you get my Babe reference?");
        confirm("Was that so hard?");
      } else if (answer === false) {
        console.log("YOU'VE BETRAYED MY TRUST");
        confirm("YOU DON'T GET TO CHOOSE");
        burnBabyBurn();
      } else {
        burnBabyBurn();
      }
      // <--- WEEKLY if 1b --->"TOUGH COOKIES PLAY MY GAME SAY: OK"
    } else if (answer === "no") {
      // <--- WEEKLY if 2b --->
      console.log("Why are you even here, wasting time, power, general resources...");
      answer = prompt("Fo real? y or n");
      if (answer === "y") {
        console.log("I appreciate your cooperation.");
        confirm("Fine. Go.");
      } else if (answer === "n" || false) {
        console.log("Don't play with my emotions. I deserve more than that.");
        confirm("I think this relationship is salvagable.");
        confirm("Refresh if you want.");
      } else {
        burnBabyBurn();
      }
      // <--- WEEKLY if 2b --->"TOUGH COOKIES PLAY MY GAME SAY: OK"
    } else {
      // <--- WEEKLY if 3b --->
      if (answer === true) {
        console.log("The window sent a TRUE statement/variable/whatever.");
        confirm("Something you did was true.");
      } else if (answer === false) {
        console.log("The window sent a FALSE statement/variable/whatever.");
        confirm("Something you did was false.");
      } else {
        confirm("Just get out.");
      }
      // <--- WEEKLY if 3b --->
    }

    // <--- MONTHLY if 2 --->"Do you want to play a game? yes or no"

  }  else {
    console.log("Don't be a jerk.");
    answer = prompt("I did not understand. Did you mean to say: yes");
    // <--- MONTHLY if 3 --->
    if (answer === "yes") {
      // <--- WEEKLY if 1c --->
      console.log("O rly?");
      answer = prompt("You REALLY meant to say: yes?");
      if (answer === "yes") {
        console.log("Congrats.");
        confirm("ok we cool");
      } else if (answer === "no" || false) {
        confirm("You're a bad person.");
        confirm("If you didn't know it before,");
        confirm("that's what you are.");
        confirm("Oh before I forget, take this:");
        burnBabyBurn();
      } else {
        confirm("You're a bad person.");
        confirm("If you didn't know that before,");
        confirm("you are.");
        confirm("Oh before I forget, take this:");
        burnBabyBurn();
      }
      // <--- WEEKLY if 1c --->
    } else if (answer === "no") {
      // <--- WEEKLY if 2c --->"I did not understand. Did you mean to say: yes"
      confirm("Is that so. Fine. Answer me this user:");
      answer = prompt("Are for Iron Man or Captain America? Spell wisely.");
      if (answer === "Iron Man") {
        confirm("I get it, he's funny and died for Earth once.");
        confirm("You're allowed to leave.");
      } else if (answer === "Captain America") {
        confirm("<3 He has a special place in my heart too <3");
        confirm("You're allowed to leave.");
      } else {
        burnBabyBurn();
      }
      // <--- WEEKLY if 2c --->
    } else {
      // <--- WEEKLY if 3c --->"I did not understand. Did you mean to say: yes"
      answer = confirm("You did it again. My wrath hath incurred.");
      if (answer === false) {
        confirm("Trying to run from me?");
        confirm("IMPOSSIBLE");
        burnBabyBurn();
      } else {
        burnBabyBurn();
      }
      // <--- WEEKLY if 3c --->
    }
    // <--- MONTHLY if 3 --->
  }
// <--- YEARLY if --->

function burnBabyBurn() {
  while (true) {
    confirm("CRASH");
    console.log("You just lost the game.");
    confirm("BURN BABY BURN");
    console.log("You just lost the game.");
    confirm("I GIVE YOU SPECIFIC INSTRUCTION");
    console.log("You just lost the game.");
    confirm("AND YOU DO THIS?");
    console.log("You just lost the game.");
    confirm("YOU MADE YOUR CHOICE");
    console.log("You just lost the game.");
    confirm("NOW YOU");
    console.log("You just lost the game.");
  }
  return;
}
