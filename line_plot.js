import neoData from './neo_data.js';

// Extract estimated diameters (convert to meters for consistency)
const diameters = neoData
    .map(neo => ((neo.estimated_diameter_km_min + neo.estimated_diameter_km_max) / 2) * 1000)
    .filter(diameter => diameter > 0 && diameter > 0); // Filtering out unrealistic values

// Sort diameters to make the line graph look cleaner
diameters.sort((a, b) => a - b);

// Generate Y values (simply index positions to represent each asteroid)
const indices = Array.from({ length: diameters.length }, (_, i) => i + 1);

// Create trace for the line graph
const trace = {
    x: diameters,   // X-axis: Asteroid diameters
    y: indices,     // Y-axis: Just a simple index to keep data ordered
    type: 'scatter',
    mode: 'lines+markers',  // Line + marker points
    marker: { color: '#007bff' },  // Bootstrap primary blue
    line: { width: 2 }
};

// Define layout
const layout = {
    title: 'Asteroid Size Distribution',
    xaxis: {
        title: 'Diameter (Meters)',
        showgrid: true,
        gridcolor: '#ddd'
    },
    yaxis: {
        title: 'Asteroid Index',
        showgrid: true,
        gridcolor: '#ddd'
    },
    plot_bgcolor: '#f5f5f5',
    paper_bgcolor: 'white'
};

// Render the plot
Plotly.newPlot('histogram', [trace], layout);
