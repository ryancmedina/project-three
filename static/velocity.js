
// NASA API Configuration

async function fetchAsteroidData(){
const apiKey = "aeRc3h5tR5wweegUs1yyQ98QGs1H4ti2jpGW5hGn";
const baseUrl = "https://api.nasa.gov/neo/rest/v1/feed";
const startDate = new Date ("2025-03-17");
const endDate = new Date ("2025-07-17");
const iterations = 7;

// Function to Fetch Data

let allAsteroids = [];

let currentStart = new Date(startDate);

    while (currentStart < endDate) {
        let currentEnd = new Date(currentStart);
        currentEnd.setDate(currentEnd.getDate() + iterations - 1);
        if (currentEnd > endDate) currentEnd = endDate;

        let formattedStart = currentStart.toISOString().split("T")[0];
        let formattedEnd = currentEnd.toISOString().split("T")[0];

        console.log(`Fetching data from ${formattedStart} to ${formattedEnd}...`);

        let url = `${baseUrl}?start_date=${formattedStart}&end_date=${formattedEnd}&api_key=${apiKey}`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Error: ${response.status}`);

            const data = await response.json();

            // Process data using .filter() and .map()
            let asteroids = Object.values(data.near_earth_objects)
                .flat() // Flatten nested arrays
                .filter(neo => neo.is_potentially_hazardous_asteroid === true)
                .filter(neo => neo.close_approach_data.length > 0) // Filter out asteroids without approach data
                .map((neo) => {
                        let closeApproachDate = new Date(neo.close_approach_data[0].close_approach_date);
                        let weekNumber = Math.floor((closeApproachDate - startDate) / (7 * 24 * 60 * 60 * 1000)) + 1;
                        
                        return {
                            id: `Week ${weekNumber}`,
                            name: neo.name,
                            velocity: parseFloat(neo.close_approach_data[0].relative_velocity.kilometers_per_hour)
                        };
                    });


            allAsteroids = [...allAsteroids, ...asteroids]; // Merge new data with existing
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        currentStart.setDate(currentStart.getDate() + iterations);
        await new Promise(resolve => setTimeout(resolve, 500)); // Delay to avoid API rate limit
    }

    
    return allAsteroids;
}






// Function to Build Data Visualization
async function drawScatterPlot() {
    const asteroids = await fetchAsteroidData(); // Fetch and store the data


    let trace = {
        x: asteroids.map(asteroid => asteroid.id),
        y: asteroids.map(asteroid => asteroid.velocity),
        text: asteroids.map(asteroid => asteroid.name),
        type: "scatter",
        name: "Asteroid Speeds (km/h)",
        mode: 'markers',
        marker: { color: "blue" },
        hoverinfo: "text+y"
    };

    let layout = {
        title: "Speed Distribution of Near-Earth Objects",
        yaxis: { title: "Speed (km/h)" },
        xaxis: { title: "Week", type: "category"},
        width: 800,  // Prevents the chart from expanding indefinitely
        height: 400, // Keeps it from pushing content down
        margin: { t: 50, b: 50, l: 50, r: 50 } // Adjust margins for better spacing
    };

    Plotly.newPlot("scatterplot", [trace], layout);
}


