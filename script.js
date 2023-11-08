document.addEventListener("DOMContentLoaded", function() {
let mushroomCount = 0;
let mushroomsPerSecond = 0;
let companyName = prompt("Enter your Mushroom Company name:");
document.getElementById("companyName").innerText = companyName;

const mushroomFacts = [
    "Mushrooms are not plants; they belong to the 'fun guy' kingdom!",
    "Mushrooms are low in calories and fat, making them a healthy food choice if you can stomach it!",
    "The largest living organism on Earth is a fungus in Oregon's Malheur National Forest, covering over 2,385 acres!",
    "Certain mushroom species have medicinal properties and have been used in traditional medicine for centuries!",
    "Mushrooms are a good source of essential nutrients like selenium, potassium, riboflavin, and niacin!",
    "Some mushrooms, like the Reishi mushroom, are believed to boost the immune system!",
    "There are over 10,000 known species of mushrooms, and scientists estimate there could be more than 5 million species in total!",
    "Mycophobia is the fear of mushrooms! Spooky!",
    "Mushrooms have been used in various cuisines around the world for centuries!",
    "Mushrooms can absorb and concentrate environmental toxins, so they are sometimes used in bioremediation to clean up polluted sites!",
    "Fungi play a crucial role in ecosystems by breaking down dead organic matter, recycling nutrients back into the environment!",
    "Mushrooms are genetically more similar to humans than they are plants!",
    "Some mushrooms can glow in the dark!",
    "Despite the name, magicians don't use magic mushrooms in their act!",
    "Some mushrooms have been known to turn ants into zombies!",
    "The spores of some mushrooms are so small they can be carried by the wind for long distances!",
    "The Death Cap mushroom is one of the deadliest mushrooms and responsible for the majority of mushroom poisoning deaths worldwide!",
    "Ancient Egyptians believed that mushrooms granted immortality and included them in their diet!",
    "Mushrooms have been used for dyeing fabric for centuries due to their natural pigments!",
    "Certain species of mushrooms can bioluminesce, producing their own light in the dark!",
    "Some mushrooms have antibacterial and antiviral properties and are used in the production of antibiotics!",
    "Mushrooms can grow incredibly fast; some species can double in size every 24 hours! Wowza!",
    "Mushrooms have their own form of 'internet' called mycelium, which connects trees and plants underground!",
    "Most scientists agree that mushrooms can feel pain!",
    "Mushrooms sometimes grow in patterns that resemble circles, and some people think these circles can be used to summon demons from other realms!",
    "Mushrooms were first discovered by a group of explorers led by two Italian brothers, M. Mario and L. Mario!",
    "In Anna Karenina, mushroom hunting plays an important role in the plot!",
    "Some mushrooms are not gilled, so the term 'mushroom' is only really loosely used!",
    "Certain mushroom species have been proven to not be native to Earth.",
    "Mushrooms are not allowed to enter your home unless you invite them in!",
    "Only a silver bullet can truly kill a mushroom!",
    "Environmental scientists believe some mushrooms have the ability to mimic human voices, leading lost wanderers deeper into the forests!",
    "A recipe was discovered in 2016 describing a potion brewed from rare mushrooms, granting the drinker visions of cosmic entities!",
    "The History Channel once reported that Oyster mushrooms are the favored currency of extraterrestrial traders, exchanged for advanced alien technology!",
    "In ancient times, mushrooms were considered a delicacy and were often reserved for royalty and nobility!"
];


const upgrades = [
    { name: "Professional Forager", cost: 25, mushroomsPerSecond: 1, description: "You hired a professional forager to search the woods for mushrooms. +1 Mushrooms per second." },
    { name: "Retired Pig", cost: 50, mushroomsPerSecond: 5, description: "You purchased a professional (but retired) pig to root out better mushrooms. +5 Mushrooms per second." },
    { name: "Morel Magnet", cost: 200, mushroomsPerSecond: 10, description: "You ordered a special device that automatically pulls Morel mushrooms to you. +10 Mushrooms per second." },
    { name: "Oyster Mushroom Shucker", cost: 400, mushroomsPerSecond: 20, description: "You purchased an automatic shucker that peels Oyster mushrooms away from trees. +20 Mushrooms per second." },
    { name: "Mushroom Farm", cost: 800, mushroomsPerSecond: 30, description: "You built a Mushroom Farm to grow your own mushrooms. +30 Mushrooms per second." },
    { name: "Mushroom Processing Plant", cost: 1600, mushroomsPerSecond: 40, description: "You established a Mushroom Processing Plant to turn mushrooms into other materials. +40 Mushrooms per second." },
    { name: "Poison Control System", cost: 4000, mushroomsPerSecond: 50, description: "You installed a Poison Control System to replace all poisonous mushrooms with tastier options. +50 Mushrooms per second." },
    { name: "Shiitake Censor Board", cost: 7000, mushroomsPerSecond: 60, description: "You petitioned the government to pass a law stating people can't make jokes about Shiitake mushrooms anymore. +60 Mushrooms per second." },
    { name: "Mushroom Transport Ship", cost: 9000, mushroomsPerSecond: 70, description: "You invested in a Mushroom Transport Ship, allowing the purchase and selling of mushrooms overseas. +70 Mushrooms per second." },
    { name: "Mushroom Embassy", cost: 12900, mushroomsPerSecond: 80, description: "You established a Mushroom Embassy in a foreign country. +80 Mushrooms per second." },
    { name: "Experimental Mushroom Powder", cost: 29600, mushroomsPerSecond: 90, description: "You applied a new, untested chemical to your mushrooms, allowing them to grow faster. +90 Mushrooms per second." },
    { name: "Offshore Genetic Testing Facility", cost: 59200, mushroomsPerSecond: 100, description: "You built an Offshore Genetic Testing Facility, a safe place to perform experiments on mushrooms away from prying eyes. +100 Mushrooms per second." },
    { name: "Underground Planters", cost: 112400, mushroomsPerSecond: 120, description: "You dug out tunnels underneath major cities to plant your new mushrooms. +120 Mushrooms per second." },
    { name: "Mushroom Lobbyists", cost: 204800, mushroomsPerSecond: 140, description: "You influenced the political system to increase support for all mushroom-based products. +140 Mushrooms per second." },
    { name: "Satellite Broadcasting Network", cost: 409600, mushroomsPerSecond: 150, description: "You purchased a news media company with stations all over the world and began running only mushroom-focused commercials. +150 Mushrooms per second." },
    { name: "Reorganize City Infrastructure", cost: 819200, mushroomsPerSecond: 170, description: "You started digging up roads and parking lots to make space for more mushrooms. +170 Mushrooms per second." },
    { name: "Ensure Mushroom Survival", cost: 1638400, mushroomsPerSecond: 180, description: "You sent a rocket filled with mushrooms to a predetermined planet. +180 Mushrooms per second." },
    { name: "Deploy ACME-brand Weather Control Unit", cost: 3276800, mushroomsPerSecond: 200, description: "You utilized newfound technology to make global temperatures perfect for mushroom growth. +200 Mushrooms per second." },
    { name: "Activate Mushroom Enhancement Beam", cost: 6553600, mushroomsPerSecond: 500, description: "You activated a Mushroom Enhancement Beam, allowing mushrooms to grow at an ungodly speed. +500 Mushrooms per second." },
    { name: "Unleash Them", cost: 13107200, mushroomsPerSecond: 0, description: "The enhanced mushroom soldiers left few humans alive that day. The world wept, and the world reeked. Those who did survive were forced into hiding, and soon the only way they could travel was via submarine. That's the legacy " + companyName + " left to the world. Thanks for playing." }
];



function displayMushroomCount() {
    document.getElementById("mushroomCount").innerText = mushroomCount + " Mushrooms";
}

function displayMushroomsPerSecond() {
    document.getElementById("mushroomsPerSecond").innerText = mushroomsPerSecond + " Mushrooms per second";
}

function forageMushroom() {
    mushroomCount++;
    displayMushroomCount();
}

function purchaseUpgrade(upgrade) {
    if (mushroomCount >= upgrade.cost && upgrade.visible) {
        mushroomCount -= upgrade.cost;
        mushroomsPerSecond += upgrade.mushroomsPerSecond;
        displayMushroomCount();
        displayMushroomsPerSecond();
        displayUpgradeDescription(upgrade.description);

        // Check if the next upgrade is within the upgrades array and make it visible
        const indexOfUpgrade = upgrades.indexOf(upgrade);
        const nextUpgrade = upgrades[indexOfUpgrade + 1];
        if (nextUpgrade && !nextUpgrade.visible) {
            const upgradeButton = document.createElement("button");
            upgradeButton.className = "upgradeButton";
            upgradeButton.innerText = `${nextUpgrade.name} (Cost: ${nextUpgrade.cost} Mushrooms)`;
            upgradeButton.onclick = function() {
                purchaseUpgrade(nextUpgrade);
            };
            document.getElementById("upgradeButtons").appendChild(upgradeButton);
            nextUpgrade.visible = true;
            updateNextUpgrades(); // Update visibility of other upgrades after adding a new one
        }
    }
}




function displayUpgradeDescription(description) {
    document.getElementById("upgradeDescription").innerText = description;
}

function updateNextUpgrades() {
    const upgradeButtons = document.getElementsByClassName("upgradeButton");
    for (let i = 0; i < upgrades.length; i++) {
        const upgrade = upgrades[i];
        const button = upgradeButtons[i];
        if (mushroomCount >= upgrade.cost) {
            button.style.display = "inline-block";
        } else {
            button.style.display = "none";
        }
    }
}

function createUpgradeButton(upgrade, container) {
    if (mushroomCount >= upgrade.cost) {
        const upgradeButton = document.createElement("button");
        upgradeButton.className = "upgradeButton";
        upgradeButton.innerText = `${upgrade.name} (Cost: ${upgrade.cost} Mushrooms)`;
        upgradeButton.onclick = function() {
            if (mushroomCount >= upgrade.cost) {
                purchaseUpgrade(upgrade);
            }
        };
        container.appendChild(upgradeButton);
        upgrade.visible = true;
    } else {
        upgrade.visible = false;
    }
}


function updateNextUpgrades() {
    const upgradeButtonsContainer = document.getElementById("upgradeButtons");
    upgradeButtonsContainer.innerHTML = ""; // Clear existing buttons

    for (let i = 0; i < upgrades.length; i++) {
        const upgrade = upgrades[i];
        if (mushroomCount >= upgrade.cost) {
            createUpgradeButton(upgrade, upgradeButtonsContainer);
        }
    }
}




function initializeUpgradeButtons() {
    const upgradeButtonsContainer = document.getElementById("upgradeButtons");
    let visibleUpgrades = 2; // Number of initial visible upgrades

    // Check if upgrade buttons already exist, if not, create and append them
    if (upgradeButtonsContainer.children.length === 0) {
        for (let i = 0; i < upgrades.length; i++) {
            const upgrade = upgrades[i];
            if (i < visibleUpgrades) {
                createUpgradeButton(upgrade, upgradeButtonsContainer);
            } else {
                upgrade.visible = false;
            }
        }
    }
}

setInterval(updateNextUpgrades, 1000); // Check upgrades visibility every second


function updateMushroomsPerSecond() {
    mushroomCount += mushroomsPerSecond; // Add mushrooms per second to the total count
    displayMushroomCount(); // Update the displayed mushroom count
}
setInterval(updateMushroomsPerSecond, 1000);

function displayRandomMushroomFact() {
    const randomFact = mushroomFacts[Math.floor(Math.random() * mushroomFacts.length)];
    document.getElementById("mushroomFacts").innerText = "Mushroom Facts: " + randomFact;
}

setInterval(displayRandomMushroomFact, 8000);
updateNextUpgrades();
document.getElementById("forageButton").addEventListener("click", forageMushroom);
    initializeUpgradeButtons(); // Call the function to initialize upgrade buttons after DOM is fully loaded
});
