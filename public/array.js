// give me an array of objects with properties of a baseball stadium
const stadiums = [
    {
        name: "Yankee Stadium",
        city: "New York",
        state: "New York",
        capacity: 47193,
        roof: "Open"
    },
    {
        name: "Dodger Stadium",
        city: "Los Angeles",
        state: "California",
        capacity: 56000,
        roof: "Open"
    },
    {
        name: "Wrigley Field",
        city: "Chicago",
        state: "Illinois",
        capacity: 41649,
        roof: "Open"
    }
];


function cities(keys = []) {
    return stadiums.map(stadium => stadium[keys[0]]);
}

console.log(cities(["city", "roof"]));