// NASA API Configuration
const apiKey = "aeRc3h5tR5wweegUs1yyQ98QGs1H4ti2jpGW5hGn";
const baseUrl = "https://api.nasa.gov/neo/rest/v1/feed";
const startDate = "2025-03-17";
const endDate = "2025-03-24";
const iterations = 3;

//let allNeoData = [];

// Function to Fetch Data
async function fetchAsteroidData(){


let allAsteroids = [];
const url = `${baseUrl}?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;

try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();

    for (let date in data.near_earth_objects) {
        data.near_earth_objects[date].forEach(neo => {
            if (neo.close_approach_data.length > 0) {
                allAsteroids.push({
                    name: neo.name, //Asteroid name
                    velocity : parseFloat(neo.close_approach_data[0].relative_velocity.kilometers_per_hour)
                });
                
            }
        });
    }
} catch (error) {
    console.error("Error fetching data:", error);
}

return allAsteroids;
}

// Function to Build Data Visualization
async function plotBoxPlot() {
    const asteroids = await fetchAsteroidData(); // Fetch and store the data

    const velocities = asteroids.map(asteroid => asteroid.velocity);
    const names = asteroids.map(asteroid => asteroid.name);

    let trace = {
        y: velocities,
        text: names,
        type: "box",
        name: "Asteroid Speeds (km/h)",
        boxpoints: "all",
        jitter: 0.3,
        pointpos: -1.8,
        marker: { color: "blue" },
        hoverinfo: "text+y"
    };
    let layout = {
        title: "Speed Distribution of Near-Earth Objects",
        yaxis: { title: "Speed (km/h)" },
    };

    Plotly.newPlot("boxplot", [trace], layout);
}


//     d3.json(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`)
//         .then((data) => {
//             console.log("API Data:", data);
//             console.log("Formatted NEO Data:", neoData);

//             // Here, you can manipulate the data with D3.js to create a visualization.
//             // Example: Creating a table or chart using D3.
//         });
// }

// Call the function
//buildAlldata();
