const db = require('../config/connection');
const { CropReference } = require('../models');

db.once('open', async () => {

const plantSeeds = await CropReference.insertMany(
    [
        {
            "name": "arugula",
            "dtm": 28,
            "harvestwindow": 14,
            "sowingDates": "Feb. 1st - Mar. 30th"
           },
           {
            "name": "baby-kale",
            "dtm": 30,
            "harvestwindow": 14,
            "sowingDates": "Feb. 15th - Jun. 30th"
           },
           {
            "name": "baby-mustard",
            "dtm": 30,
            "harvestwindow": 14,
            "sowingDates": "Feb. 15th - Jun. 30th"
           },
           {
            "name": "basil",
            "dtm": 70,
            "harvestwindow": 14,
            "sowingDates": "May 1st - Jul. 30th"
           },
           {
            "name": "beets",
            "dtm": 70,
            "harvestwindow": 20,
            "sowingDates": "Mar. 1st - Apr. 15th"
           },
           {
            "name": "beans",
            "dtm": 50,
            "harvestwindow": 21,
            "sowingDates": "Apr. 1st - Sept. 30th"
           },
           {
            "name": "Beans (Pole)",
            "dtm": 60,
            "harvestwindow": 60,
            "sowingDates": "Apr. 1st - Sept. 30th"
           },
           {
            "name": "broccoli",
            "dtm": 85,
            "harvestwindow": 14,
            "sowingDates": "Feb. 15th - Apr. 15th"
           },
           {
            "name": "brussel-sprouts",
            "dtm": 120,
            "harvestwindow": 21,
            "sowingDates": "Jul. 15th - Sept. 15th"
           },
           {
            "name": "carrots",
            "dtm": 55,
            "harvestwindow": 20,
            "sowingDates": "Feb. 1st - Mar. 30th"
           },
           {
            "name": "Cabbage-Chinese",
            "dtm": 80,
            "harvestwindow": 14,
            "sowingDates": "Mar. 15th - Mar. 30th"
           },
           {
            "name": "Cabbage-Storage",
            "dtm": 95,
            "harvestwindow": 14,
            "sowingDates": "Feb. 1st - Apr. 15th"
           },
           {
            "name": "Cabbage-Savoy",
            "dtm": 75,
            "harvestwindow": 14,
            "sowingDates": "Feb. 1st - Apr. 15th"
           },
           {
            "name": "Cabbage-Summer",
            "dtm": 80,
            "harvestwindow": 14,
            "sowingDates": "Jul. 15th - Sept. 15th"
           },
           {
            "name": "Cauliflower \/ Romanesco",
            "dtm": 110,
            "harvestwindow": 14,
            "sowingDates": "Feb. 15th - Apr. 15th"
           },
           {
            "name": "celery-root",
            "dtm": 120,
            "harvestwindow": 14,
            "sowingDates": "Feb. 15th - Mar. 30th"
           },
           {
            "name": "Celery Root - Mini",
            "dtm": 80,
            "harvestwindow": 14,
            "sowingDates": "Feb. 15th - Mar. 30th"
           },
           {
            "name": "coriander",
            "dtm": 55,
            "harvestwindow": 14,
            "sowingDates": "Feb. 1st - Mar. 30th"
           },
           {
            "name": "Cucumber - English (Greenhouse)",
            "dtm": 55,
            "harvestwindow": 45,
            "sowingDates": "Apr. 15th - Aug. 15th"
           },
           {
            "name": "Cucumber - Libanese (Greenhouse)",
            "dtm": 55,
            "harvestwindow": 45,
            "sowingDates": "Apr. 15th - Aug. 15th"
           },
           {
            "name": "Dill",
            "dtm": 50,
            "harvestwindow": 14,
            "sowingDates": "Mar. 15th - Mar. 30th"
           },
           {
            "name": "eggplant",
            "dtm": 90,
            "harvestwindow": 72,
            "sowingDates": "Apr. 15th - Jun. 15th"
           },
           {
            "name": "fennel",
            "dtm": 60,
            "harvestwindow": 14,
            "sowingDates": "Mar. 1st - Apr. 30th"
           },
           {
            "name": "frisée",
            "dtm": 67,
            "harvestwindow": 14,
            "sowingDates": null
           },
           {
            "name": "garlic",
            "dtm": 255,
            "harvestwindow": 14,
            "sowingDates": "Sept. 15th - Nov. 30th"
           },
           {
            "name": "green-onion",
            "dtm": 70,
            "harvestwindow": 14,
            "sowingDates": "Feb. 1st - Mar. 30th"
           },
           {
            "name": "kale",
            "dtm": 85,
            "harvestwindow": 98,
            "sowingDates": "Feb. 15th - Jun. 30th"
           },
           {
            "name": "kohlrabi",
            "dtm": 70,
            "harvestwindow": 14,
            "sowingDates": "Feb. 15th - Jul. 30th"
           },
           {
            "name": "leek",
            "dtm": 130,
            "harvestwindow": 21,
            "sowingDates": "Feb. 15th - Jul. 30th"
           },
           {
            "name": "Leek Storage",
            "dtm": 180,
            "harvestwindow": 21,
            "sowingDates": "Feb. 15th - Jul. 30th"
           },
           {
            "name": "lettuce",
            "dtm": 48,
            "harvestwindow": 14,
            "sowingDates": "Feb. 1st - Apr. 30th"
           },
           {
            "name": "Melons-Cantalope",
            "dtm": 76,
            "harvestwindow": 21,
            "sowingDates": "Apr. 15th - Jul. 15th"
           },
           {
            "name": "Watermelon",
            "dtm": 76,
            "harvestwindow": 21,
            "sowingDates": "Apr. 15th - Jun. 30th"
           },
           {
            "name": "mesclun",
            "dtm": 60,
            "harvestwindow": 27,
            "sowingDates": "Feb. 1st - Apr. 30th"
           },
           {
            "name": "onion",
            "dtm": 118,
            "harvestwindow": 12,
            "sowingDates": "Aug. 1st - Mar. 30th"
           },
           {
            "name": "Onion - Fresh",
            "dtm": 80,
            "harvestwindow": 14,
            "sowingDates": "Aug. 1st - Mar. 30th"
           },
           {
            "name": "pak-choi",
            "dtm": 50,
            "harvestwindow": 14,
            "sowingDates": "Mar. 15th - Mar. 30th"
           },
           {
            "name": "peas",
            "dtm": 60,
            "harvestwindow": 21,
            "sowingDates": "Jan. 1st - Apr. 15th"
           },
           {
            "name": "peppers",
            "dtm": 120,
            "harvestwindow": 60,
            "sowingDates": "Apr. 15th - Jul. 15th"
           },
           {
            "name": "peppers",
            "dtm": 100,
            "harvestwindow": 15,
            "sowingDates": "Apr. 15th - Jul. 15th"
           },
           {
            "name": "radish",
            "dtm": 30,
            "harvestwindow": 14,
            "sowingDates": "Feb. 1st - Jun. 30th"
           },
           {
            "name": "rapini",
            "dtm": 60,
            "harvestwindow": 14,
            "sowingDates": null
           },
           {
            "name": "rutabaga",
            "dtm": 95,
            "harvestwindow": 21,
            "sowingDates": "Feb. 1st - Apr. 15th"
           },
           {
            "name": "spinach",
            "dtm": 55,
            "harvestwindow": 28,
            "sowingDates": "Feb. 15th - Jun. 30th"
           },
           {
            "name": "Spinach DS",
            "dtm": 55,
            "harvestwindow": 28,
            "sowingDates": "Feb. 15th - Jun. 30th"
           },
           {
            "name": "sucrine",
            "dtm": 50,
            "harvestwindow": 14,
            "sowingDates": null
           },
           {
            "name": "summer-squash",
            "dtm": 50,
            "harvestwindow": 42,
            "sowingDates": "Apr. 1st - Aug. 15th"
           },
           {
            "name": "swiss-chard",
            "dtm": 65,
            "harvestwindow": 84,
            "sowingDates": "Mar. 1st - Apr. 30th"
           },
           {
            "name": "cherry-tomato",
            "dtm": 145,
            "harvestwindow": 180,
            "sowingDates": "Apr. 15th - Jul. 15th"
           },
           {
            "name": "heirloom-tomato",
            "dtm": 145,
            "harvestwindow": 180,
            "sowingDates": "Apr. 15th - Jul. 15th"
           },
           {
            "name": "Tomato - (Field)",
            "dtm": 115,
            "harvestwindow": 42,
            "sowingDates": "Apr. 15th - Jul. 15th"
           },
           {
            "name": "Turnip - Hakurei",
            "dtm": 35,
            "harvestwindow": 14,
            "sowingDates": "Feb. 1st - Jun. 30th"
           },
           {
            "name": "Winter Radish",
            "dtm": 70,
            "harvestwindow": 21,
            "sowingDates": "Feb. 1st - Jun. 30th"
           },
           {
            "name": "Winter Squash",
            "dtm": 105,
            "harvestwindow": 21,
            "sowingDates": "Apr. 15th - Jul. 15th"
           }
    ]
)
console.log('plantSeeds:', plantSeeds)

console.log('planting seeded');

process.exit();
});






