// Get HTML elements
const runScanButton = document.querySelector("#runScanButton");
const scanResultsSection = document.querySelector("#scanResultsSection");

// Scan findings
const platformSpan = document.querySelector("#platformSpan");
const languageSpan = document.querySelector("#languageSpan");
const screenWidthSpan = document.querySelector("#screenWidthSpan");

// Persona skill attributes
const skillSpan = document.querySelector("#skillSpan");
const elementSpan = document.querySelector("#elementSpan");
const spCostSpan = document.querySelector("#spCostSpan");
const targetSpan = document.querySelector("#targetSpan");
const effectSpan = document.querySelector("#effectSpan");

// Fetch data from the server to the client
async function getData() {
    try {
        let response = await fetch("/data");
        let receivedData = await response.json();
        console.log(receivedData);
    }
    catch(error) {
        console.log(error);
    }
}

// If the user clicks on the run scan button
runScanButton.addEventListener("click", function() {
    // Then fetch the data
    getData();
    // Scan the user's device
    scanUserDevice();
    // Determine which skill the user should possess
    determinePersonaSkill();
    // Show the user the scan results
    showScanResults();
    // Show the user the persona results
    showPersonaResults();
});

// Scan the user's device
function scanUserDevice() {

}
// Determine which skill the user should possess
function determinePersonaSkill() {

}
// Show the user the scan results
function showScanResults() {
    scanResultsSection.classList.remove("hide");

}
// Show the user the persona results
function showPersonaResults() {
    
}