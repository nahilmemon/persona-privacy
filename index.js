console.log("Hello!");

// 1. Get the express module/package into our package
let express = require("express");

// 2. Initialize the server
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log("persona privacy app is listening at localhost:3000");
});

// 4. Define routes
// 4a. Homepage/root directory
// When I go to the home route (/ or https://localhost:3000)
// Then serve the entire public folder
app.use("/", express.static("public"));

// 4b. Serve specific data using request.params
// 4bi. This is route with a 'path parameter'
// i.e. data serving "dynamic" route with a path parameter
app.get("/data/:skillName", (request, response) => {
  console.log("A request has been made to the dynamic data route!");

  // Get the requested skill name from the url
  let requestedSkillName = request.params.skillName;
  console.log(`Requested skill: ${requestedSkillName}`);

  // To store the skill found
  let foundSkill = null;

  // Look through every skill in the dataset
  for (let i = 0; i < personaSkillsData.personaSkills.length; i++) {
    // Check if this skill's name matches the requested skill
    if (personaSkillsData.personaSkills[i].skillName === requestedSkillName) {
      foundSkill = personaSkillsData.personaSkills[i];
    }
  }

  // Send back the skill we found and all of its associated data
  if (foundSkill !== null) {
    response.json(foundSkill);
  } else {
    // Else send back an error message if no such skill was found
    response.status(404).json({ 
      msg: "No skill with this name was found." 
    });
  }
});

// 4bii. This is a route that checks for query paraneters ('?name=pizza')
app.get("/data", (request, response) => {
  // Get the query skill name from the url
  let requestedSkillName = request.query.skillName;
  console.log(`A request has been made to the data route using the query: ${requestedSkillName}`);
  
  // Check if a skill name was provided
  if (requestedSkillName) {
    // To store the skill found
    let foundSkill = null;

    // Look through every skill in the dataset
    for (let i = 0; i < personaSkillsData.personaSkills.length; i++) {
      // Check if this skill's name matches the requested skill
      if (personaSkillsData.personaSkills[i].skillName === requestedSkillName) {
        foundSkill = personaSkillsData.personaSkills[i];
      }
    }

    // Send back the skill we found and all of its associated data
    if (foundSkill !== null) {
      response.json(foundSkill);
    } else {
      // Else send back an error message if no such skill was found
      response.status(404).json({ 
        msg: "No skill with this name was found." 
      });
    }
  } else {
    // If no skill name was provided, send all the skill data
    response.json(personaSkillsData);
    console.log("Sending all data because no query was given.");
  }
});

// 5. Data saved on server
const personaSkillsData = {
  personaSkills: [
    {
      skillName: "agi",
      element: "fire",
      level: 1,
      spCost: 4,
      basePower: 40,
      target: "one foe",
      effect: "25% burn chance"
    },
    {
      skillName: "agilao",
      element: "fire",
      level: 2,
      spCost: 8,
      basePower: 100,
      target: "one foe",
      effect: "25% burn chance"
    },
    {
      skillName: "agidyne",
      element: "fire",
      level: 3,
      spCost: 12,
      basePower: 160,
      target: "one foe",
      effect: "25% burn chance"
    },
    {
      skillName: "bufu",
      element: "ice",
      level: 1,
      spCost: 4,
      basePower: 40,
      target: "one foe",
      effect: "25% freeze chance"
    },
    {
      skillName: "bufula",
      element: "ice",
      level: 2,
      spCost: 8,
      basePower: 100,
      target: "one foe",
      effect: "25% freeze chance"
    },
    {
      skillName: "bufudyne",
      element: "ice",
      level: 3,
      spCost: 12,
      basePower: 160,
      target: "one foe",
      effect: "25% freeze chance"
    },
    {
      skillName: "garu",
      element: "wind",
      level: 1,
      spCost: 3,
      basePower: 40,
      target: "one foe",
      effect: "-"
    },
    {
      skillName: "garula",
      element: "wind",
      level: 2,
      spCost: 6,
      basePower: 100,
      target: "one foe",
      effect: "-"
    },
    {
      skillName: "garudyne",
      element: "wind",
      level: 3,
      spCost: 10,
      basePower: 160,
      target: "one foe",
      effect: "-"
    },
    {
      skillName: "zio",
      element: "electricity",
      level: 1,
      spCost: 4,
      basePower: 40,
      target: "one foe",
      effect: "25% shock chance"
    },
    {
      skillName: "zionga",
      element: "electricity",
      level: 2,
      spCost: 8,
      basePower: 100,
      target: "one foe",
      effect: "25% shock chance"
    },
    {
      skillName: "ziodyne",
      element: "electricity",
      level: 3,
      spCost: 12,
      basePower: 160,
      target: "one foe",
      effect: "25% shock chance"
    }
  ]
}