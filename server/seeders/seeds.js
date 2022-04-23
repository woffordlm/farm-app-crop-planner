const db = require('../config/connection');
const { CropReference } = require('../models');

db.once('open', async () => {

const plantSeeds = await CropReference.insertMany(
    [
        {
            "name": "Arugula",
            "dtm": 28,
            "harvestwindow": 14,
            "Sowing Dates": "Feb. 1st - Mar. 30th"
           },
           {
            "name": "Baby kale",
            "dtm": 30,
            "harvestwindow": 14,
            "Sowing Dates": "Feb. 15th - Jun. 30th"
           },
           {
            "name": "Baby Mustard",
            "dtm": 30,
            "harvestwindow": 14,
            "Sowing Dates": "Feb. 15th - Jun. 30th"
           },
           {
            "name": "Basil",
            "dtm": 70,
            "harvestwindow": 14,
            "Sowing Dates": "May 1st - Jul. 30th"
           },
           {
            "name": "Beets",
            "dtm": 70,
            "harvestwindow": 20,
            "Sowing Dates": "Mar. 1st - Apr. 15th"
           },
           {
            "name": "Beans",
            "dtm": 50,
            "harvestwindow": 21,
            "Sowing Dates": "Apr. 1st - Sept. 30th"
           },
           {
            "name": "Beans (Pole)",
            "dtm": 60,
            "harvestwindow": 60,
            "Sowing Dates": "Apr. 1st - Sept. 30th"
           },
           {
            "name": "Broccoli",
            "dtm": 85,
            "harvestwindow": 14,
            "Sowing Dates": "Feb. 15th - Apr. 15th"
           },
           {
            "name": "Brussel Sprouts",
            "dtm": 120,
            "harvestwindow": 21,
            "Sowing Dates": "Jul. 15th - Sept. 15th"
           },
           {
            "name": "Carrots (Fresh)",
            "dtm": 55,
            "harvestwindow": 20,
            "Sowing Dates": "Feb. 1st - Mar. 30th"
           },
           {
            "name": "Cabbage - Chinese",
            "dtm": 80,
            "harvestwindow": 14,
            "Sowing Dates": "Mar. 15th - Mar. 30th"
           },
           {
            "name": "Cabbage - Storage",
            "dtm": 95,
            "harvestwindow": 14,
            "Sowing Dates": "Feb. 1st - Apr. 15th"
           },
           {
            "name": "Cabbage - Savoy",
            "dtm": 75,
            "harvestwindow": 14,
            "Sowing Dates": "Feb. 1st - Apr. 15th"
           },
           {
            "name": "Cabbage - Summer",
            "dtm": 80,
            "harvestwindow": 14,
            "Sowing Dates": "Jul. 15th - Sept. 15th"
           },
           {
            "name": "Cauliflower \/ Romanesco",
            "dtm": 110,
            "harvestwindow": 14,
            "Sowing Dates": "Feb. 15th - Apr. 15th"
           },
           {
            "name": "Celery Root",
            "dtm": 120,
            "harvestwindow": 14,
            "Sowing Dates": "Feb. 15th - Mar. 30th"
           },
           {
            "name": "Celery Root - Mini",
            "dtm": 80,
            "harvestwindow": 14,
            "Sowing Dates": "Feb. 15th - Mar. 30th"
           },
           {
            "name": "Coriander",
            "dtm": 55,
            "harvestwindow": 14,
            "Sowing Dates": "Feb. 1st - Mar. 30th"
           },
           {
            "name": "Cucumber - English (Greenhouse)",
            "dtm": 55,
            "harvestwindow": 45,
            "Sowing Dates": "Apr. 15th - Aug. 15th"
           },
           {
            "name": "Cucumber - Libanese (Greenhouse)",
            "dtm": 55,
            "harvestwindow": 45,
            "Sowing Dates": "Apr. 15th - Aug. 15th"
           },
           {
            "name": "Dill",
            "dtm": 50,
            "harvestwindow": 14,
            "Sowing Dates": "Mar. 15th - Mar. 30th"
           },
           {
            "name": "Eggplant (Field)",
            "dtm": 90,
            "harvestwindow": 72,
            "Sowing Dates": "Apr. 15th - Jun. 15th"
           },
           {
            "name": "Fennel - Mini",
            "dtm": 60,
            "harvestwindow": 14,
            "Sowing Dates": "Mar. 1st - Apr. 30th"
           },
           {
            "name": "Frisée",
            "dtm": 67,
            "harvestwindow": 14,
            "Sowing Dates": null
           },
           {
            "name": "Garlic",
            "dtm": 255,
            "harvestwindow": 14,
            "Sowing Dates": "Sept. 15th - Nov. 30th"
           },
           {
            "name": "Green Onion",
            "dtm": 70,
            "harvestwindow": 14,
            "Sowing Dates": "Feb. 1st - Mar. 30th"
           },
           {
            "name": "Kale",
            "dtm": 85,
            "harvestwindow": 98,
            "Sowing Dates": "Feb. 15th - Jun. 30th"
           },
           {
            "name": "Kohlrabi",
            "dtm": 70,
            "harvestwindow": 14,
            "Sowing Dates": "Feb. 15th - Jul. 30th"
           },
           {
            "name": "Leek Summer",
            "dtm": 130,
            "harvestwindow": 21,
            "Sowing Dates": "Feb. 15th - Jul. 30th"
           },
           {
            "name": "Leek Storage",
            "dtm": 180,
            "harvestwindow": 21,
            "Sowing Dates": "Feb. 15th - Jul. 30th"
           },
           {
            "name": "Lettuce",
            "dtm": 48,
            "harvestwindow": 14,
            "Sowing Dates": "Feb. 1st - Apr. 30th"
           },
           {
            "name": "Melons - Cantalope",
            "dtm": 76,
            "harvestwindow": 21,
            "Sowing Dates": "Apr. 15th - Jul. 15th"
           },
           {
            "name": "Melons - Watermelom",
            "dtm": 76,
            "harvestwindow": 21,
            "Sowing Dates": "Apr. 15th - Jun. 30th"
           },
           {
            "name": "Mesclun (salanova)",
            "dtm": 60,
            "harvestwindow": 27,
            "Sowing Dates": "Feb. 1st - Apr. 30th"
           },
           {
            "name": "Onion - Storage",
            "dtm": 118,
            "harvestwindow": 12,
            "Sowing Dates": "Aug. 1st - Mar. 30th"
           },
           {
            "name": "Onion - Fresh",
            "dtm": 80,
            "harvestwindow": 14,
            "Sowing Dates": "Aug. 1st - Mar. 30th"
           },
           {
            "name": "Pak Choi",
            "dtm": 50,
            "harvestwindow": 14,
            "Sowing Dates": "Mar. 15th - Mar. 30th"
           },
           {
            "name": "Peas",
            "dtm": 60,
            "harvestwindow": 21,
            "Sowing Dates": "Jan. 1st - Apr. 15th"
           },
           {
            "name": "Peppers - Bell (Field)",
            "dtm": 120,
            "harvestwindow": 60,
            "Sowing Dates": "Apr. 15th - Jul. 15th"
           },
           {
            "name": "Peppers - Hot (Field)",
            "dtm": 100,
            "harvestwindow": 15,
            "Sowing Dates": "Apr. 15th - Jul. 15th"
           },
           {
            "name": "Radish",
            "dtm": 30,
            "harvestwindow": 14,
            "Sowing Dates": "Feb. 1st - Jun. 30th"
           },
           {
            "name": "Rapini",
            "dtm": 60,
            "harvestwindow": 14,
            "Sowing Dates": null
           },
           {
            "name": "Rutabaga",
            "dtm": 95,
            "harvestwindow": 21,
            "Sowing Dates": "Feb. 1st - Apr. 15th"
           },
           {
            "name": "Spinach TR",
            "dtm": 55,
            "harvestwindow": 28,
            "Sowing Dates": "Feb. 15th - Jun. 30th"
           },
           {
            "name": "Spinach DS",
            "dtm": 55,
            "harvestwindow": 28,
            "Sowing Dates": "Feb. 15th - Jun. 30th"
           },
           {
            "name": "Sucrine",
            "dtm": 50,
            "harvestwindow": 14,
            "Sowing Dates": null
           },
           {
            "name": "Summer Squash",
            "dtm": 50,
            "harvestwindow": 42,
            "Sowing Dates": "Apr. 1st - Aug. 15th"
           },
           {
            "name": "Swiss Chard",
            "dtm": 65,
            "harvestwindow": 84,
            "Sowing Dates": "Mar. 1st - Apr. 30th"
           },
           {
            "name": "Tomato - Cherry (Greenhouse)",
            "dtm": 145,
            "harvestwindow": 180,
            "Sowing Dates": "Apr. 15th - Jul. 15th"
           },
           {
            "name": "Tomato - Heirloom (Greenhouse)",
            "dtm": 145,
            "harvestwindow": 180,
            "Sowing Dates": "Apr. 15th - Jul. 15th"
           },
           {
            "name": "Tomato - (Field)",
            "dtm": 115,
            "harvestwindow": 42,
            "Sowing Dates": "Apr. 15th - Jul. 15th"
           },
           {
            "name": "Turnip - Hakurei",
            "dtm": 35,
            "harvestwindow": 14,
            "Sowing Dates": "Feb. 1st - Jun. 30th"
           },
           {
            "name": "Winter Radish",
            "dtm": 70,
            "harvestwindow": 21,
            "Sowing Dates": "Feb. 1st - Jun. 30th"
           },
           {
            "name": "Winter Squash",
            "dtm": 105,
            "harvestwindow": 21,
            "Sowing Dates": "Apr. 15th - Jul. 15th"
           }
    ]
)
console.log('plantSeeds:', plantSeeds)

console.log('planting seeded');

process.exit();
});






