 // array of all possible terms
 const allPhrases = [
    "Gotta call someone",
    "Make me an offer",
    "Seller tells story",
    "vintage linens",
    "gopro battery died",
    "buyer got scammed",
    "Sponsor plug",
    "salt n pepper shakers",
    "estate sale",
    "new in box",
    "That\'s worth a lot on eBay", 
    "Plushies",
    "Free shiping",
    "Golf clubs",
    "Uranium glass",
    "How much for the whole box?",
    "Murano glass",
    "Swung glass vase",
    "Funkopop",
    "Praying hands",
    "Band tshirt",
    "Baseball team hat",
    "Basketball team hat",
    "Football team hat",
    "Blowmold xmas decor",
    "Do you have change for X?",
    "Empty game case",
    "Empty video case",
    "it has instructions",
    "with batteries",
    "Precious Moments figures",
    "VHS",
    "I dont know if it works",
    "I\'m sure it works",
    "Old tools",
    "Records",
    "8-Track tapes",
    "Cassette tapes",
    "No power cords",
    "Bundle deal",
    "Good but chipped",
    "Gross sneakers",
    "Things left in thrift item",
    "Frog",
    "Loud music in store",
    "Fish",
    "Someone recognizes YouTube person",
    "Buys pots or pans",
    "Buys for personal collection",
    "Old denim",
    "More stuff in house",
    "Thrifting",
    "Unmatched shoe",
    "Empty box",
    "Handmade blanket",
    "Creepy clown",
    "That\'s a keeper",
    "Look at this bad boy",
    "PINK brand clothes",
    "Leopard print",
    "Made in china",
    "Used underwear",
    "Squishmellow",
    "Cartoon character item",
    "Disney item",
    "Action figures",
    "Bolo",
    "Hawaiian shirt",
    "Flip for a profit",
    "Ugly sweater",
    "Creepy porcelain doll",
    "Weird wig",
    "Leather purse",
    "Lululemon",
    "There\'s a bird on it",
    "Hadn\'t thought about the price",
    "Got any video games",
    "Drops item",
    "Carhart clothes",
    "CocaCola items",
    "Awkward pause",
    "Folk art",
    "Medical equipment",
    "Car parts",
    "Doesn\'t have all the pieces",
    "Superhero tshirts",
    "Hard Rock Cafe item",
    "Nike sneakers",
    "Need to check the comp",
    "Creepy Santa ornament",
    "Wii games",
    "Telescope",
    "Corningware",
    "Starbucks cups",
    "Ice cream maker",
    "Pirate flag",
    "Confederate flag",
    "Fenton glass",
    "WWE items",
    "New in the package",
    "Playstation games",
    "Those are real old",
    "Vintage",
    "Owl",
    "Nativity set",
    "Partial perfume",
    "Old board game",
    "That\'s really rare",
    "** seller adding in head **",
    "Converse sneakers",
    "Michael Kors",
    "Coach",
    "Longaberger basket",
    "Kate Spade",
    "NASCAR items",
    "Cowboy boots",
    "Free box",
    "Vintage sign",
    "Fishing tackle"
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Get the table element
const table = document.getElementById("grid");
// dedup array of used terms
const dupArray=[];

// Create 5 rows
for (let i = 0; i < 5; i++) {
    const row = table.insertRow();

    // Create 5 cells in each row
    for (let j = 0; j < 5; j++) {
        const cell = row.insertCell();
        const index = i * 5 + j; 

        // account for free space in middle of card
        if (i == 2 && j == 2){
            cell.textContent = "FREE";
        }
        else {
            
            cell.textContent = allPhrases[getRandomInt(allPhrases.length)];
            // keep trying if the term has already been used on card
            while (dupArray.includes(cell.textContent)) {
                console.log("...term already use, trying again");
                cell.textContent = allPhrases[getRandomInt(allPhrases.length)];
            }
        }

        dupArray.push(cell.textContent);
    }
}