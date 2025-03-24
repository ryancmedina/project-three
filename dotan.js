d3.select(window).on("load", function () {
  if (typeof neoData === "undefined") {
    console.error("neoData not found");
    return;
  }

  const layoutBase = {
    font: {
      family: "'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      size: 14,
      color: "#2e2e2e",
    },
    paper_bgcolor: "#fff",
    plot_bgcolor: "#fff",
    template: "plotly_white",
    margin: { l: 60, r: 30, t: 60, b: 60 },
    hoverlabel: {
      bgcolor: "#f9fafb",
      bordercolor: "#d1d5db",
      font: {
        color: "#111827",
        size: 13,
      },
    },
    xaxis: {
      showgrid: true,
      zeroline: false,
      gridcolor: "#e5e7eb",
      titlefont: { size: 16 },
      tickfont: { size: 13 },
    },
    yaxis: {
      showgrid: true,
      zeroline: false,
      gridcolor: "#e5e7eb",
      titlefont: { size: 16 },
      tickfont: { size: 13 },
    },
  };

  const colors = {
    hazardous: {
      marker: "#dc2626",
      line: "#7f1d1d",
      fill: "#fee2e2",
    },
    nonHazardous: {
      marker: "#2563eb",
      line: "#1e3a8a",
      fill: "#dbeafe",
    },
  };

  const hazardousCount = neoData.filter(
    (d) => d.is_potentially_hazardous
  ).length;
  const nonHazardousCount = neoData.length - hazardousCount;

  const pieData = [
    {
      values: [hazardousCount, nonHazardousCount],
      labels: ["Hazardous", "Non-Hazardous"],
      type: "pie",
    },
  ];
  const pieLayout = {
    ...layoutBase,
    title: { text: "Potentially Hazardous Asteroids", x: 0.5 },
  };

  const scatterData = [
    {
      x: neoData.map((d) => d.estimated_diameter_km_min),
      y: neoData.map((d) => (d.is_potentially_hazardous ? 1 : 0)),
      mode: "markers",
      type: "scatter",
      text: neoData.map(
        (d) =>
          `Asteroid: ${
            d.name
          }<br>Diameter: ${d.estimated_diameter_km_min.toFixed(2)} km`
      ),
      marker: {
        size: 10,
        color: "#6366f1",
        line: { width: 1, color: "#4338ca" },
        opacity: 0.8,
      },
    },
  ];
  const scatterLayout = {
    ...layoutBase,
    title: { text: "Estimated Diameter vs Potential Hazard", x: 0.5 },
    xaxis: {
      ...layoutBase.xaxis,
      title: { text: "Estimated Diameter (km)" },
    },
    yaxis: {
      ...layoutBase.yaxis,
      title: { text: "Potentially Hazardous" },
      tickvals: [0, 1],
      ticktext: ["No", "Yes"],
    },
  };

  const missDistanceData = [
    {
      x: neoData.map((d) => parseFloat(d.miss_distance_km)),
      y: neoData.map((d) => (d.is_potentially_hazardous ? 1 : 0)),
      mode: "markers",
      type: "scatter",
      text: neoData.map(
        (d) =>
          `Asteroid: ${d.name}<br>Miss Distance: ${parseFloat(
            d.miss_distance_km
          ).toLocaleString()} km`
      ),
      marker: {
        size: 10,
        color: "#10B981",
        line: { width: 1, color: "#047857" },
        opacity: 0.8,
      },
    },
  ];
  const missDistanceLayout = {
    ...layoutBase,
    title: { text: "Miss Distance vs Potential Hazard", x: 0.5 },
    xaxis: {
      ...layoutBase.xaxis,
      title: { text: "Miss Distance (km)" },
    },
    yaxis: {
      ...layoutBase.yaxis,
      title: { text: "Potentially Hazardous" },
      tickvals: [0, 1],
      ticktext: ["No", "Yes"],
    },
  };

  const missDistanceBoxplotData = [
    {
      y: neoData
        .filter((d) => d.is_potentially_hazardous)
        .map((d) => parseFloat(d.miss_distance_km)),
      type: "box",
      name: "Hazardous",
      boxpoints: "outliers",
      jitter: 0.5,
      whiskerwidth: 0.2,
      marker: {
        color: colors.hazardous.marker,
        outliercolor: colors.hazardous.line,
        line: { color: colors.hazardous.line },
      },
      line: { color: colors.hazardous.line },
      fillcolor: colors.hazardous.fill,
    },
    {
      y: neoData
        .filter((d) => !d.is_potentially_hazardous)
        .map((d) => parseFloat(d.miss_distance_km)),
      type: "box",
      name: "Non-Hazardous",
      boxpoints: "outliers",
      jitter: 0.5,
      whiskerwidth: 0.2,
      marker: {
        color: colors.nonHazardous.marker,
        outliercolor: colors.nonHazardous.line,
        line: { color: colors.nonHazardous.line },
      },
      line: { color: colors.nonHazardous.line },
      fillcolor: colors.nonHazardous.fill,
    },
  ];
  const missDistanceBoxplotLayout = {
    ...layoutBase,
    title: {
      text: "Miss Distance Distribution by Hazard Status",
      x: 0.5,
    },
    yaxis: {
      ...layoutBase.yaxis,
      title: { text: "Miss Distance (km)" },
    },
    xaxis: {
      ...layoutBase.xaxis,
      title: { text: "Hazard Status" },
    },
  };

  const boxplotData = [
    {
      y: neoData
        .filter((d) => d.is_potentially_hazardous)
        .map((d) => d.estimated_diameter_km_min),
      type: "box",
      name: "Hazardous",
      boxpoints: "outliers",
      jitter: 0.5,
      whiskerwidth: 0.2,
      marker: {
        color: colors.hazardous.marker,
        outliercolor: colors.hazardous.line,
        line: { color: colors.hazardous.line },
      },
      line: { color: colors.hazardous.line },
      fillcolor: colors.hazardous.fill,
    },
    {
      y: neoData
        .filter((d) => !d.is_potentially_hazardous)
        .map((d) => d.estimated_diameter_km_min),
      type: "box",
      name: "Non-Hazardous",
      boxpoints: "outliers",
      jitter: 0.5,
      whiskerwidth: 0.2,
      marker: {
        color: colors.nonHazardous.marker,
        outliercolor: colors.nonHazardous.line,
        line: { color: colors.nonHazardous.line },
      },
      line: { color: colors.nonHazardous.line },
      fillcolor: colors.nonHazardous.fill,
    },
  ];
  const boxplotLayout = {
    ...layoutBase,
    title: { text: "Diameter Distribution by Hazard Status", x: 0.5 },
    yaxis: { ...layoutBase.yaxis, title: { text: "Estimated Diameter (km)" } },
    xaxis: { ...layoutBase.xaxis, title: { text: "Hazard Status" } },
  };

  const velocityData = [
    {
      x: neoData.map((d) => parseFloat(d.relative_velocity_kph)),
      y: neoData.map((d) => (d.is_potentially_hazardous ? 1 : 0)),
      mode: "markers",
      type: "scatter",
      text: neoData.map(
        (d) =>
          `Asteroid: ${d.name}<br>Velocity: ${parseFloat(
            d.relative_velocity_kph
          ).toLocaleString()} kph`
      ),
      marker: {
        size: 10,
        color: "#F59E0B",
        line: { width: 1, color: "#B45309" },
        opacity: 0.8,
      },
    },
  ];
  const velocityLayout = {
    ...layoutBase,
    title: { text: "Relative Velocity vs Potential Hazard", x: 0.5 },
    yaxis: {
      ...layoutBase.yaxis,
      title: { text: "Potentially Hazardous" },
      tickvals: [0, 1],
      ticktext: ["No", "Yes"],
    },
  };

  const velocityBoxplotData = [
    {
      y: neoData
        .filter((d) => d.is_potentially_hazardous)
        .map((d) => parseFloat(d.relative_velocity_kph)),
      type: "box",
      name: "Hazardous",
      boxpoints: "outliers",
      jitter: 0.5,
      whiskerwidth: 0.2,
      marker: {
        color: colors.hazardous.marker,
        outliercolor: colors.hazardous.line,
        line: { color: colors.hazardous.line },
      },
      line: { color: colors.hazardous.line },
      fillcolor: colors.hazardous.fill,
    },
    {
      y: neoData
        .filter((d) => !d.is_potentially_hazardous)
        .map((d) => parseFloat(d.relative_velocity_kph)),
      type: "box",
      name: "Non-Hazardous",
      boxpoints: "outliers",
      jitter: 0.5,
      whiskerwidth: 0.2,
      marker: {
        color: colors.nonHazardous.marker,
        outliercolor: colors.nonHazardous.line,
        line: { color: colors.nonHazardous.line },
      },
      line: { color: colors.nonHazardous.line },
      fillcolor: colors.nonHazardous.fill,
    },
  ];
  const velocityBoxplotLayout = {
    ...layoutBase,
    title: { text: "Velocity Distribution by Hazard Status", x: 0.5 },
    yaxis: { ...layoutBase.yaxis, title: { text: "Relative Velocity (kph)" } },
    xaxis: { ...layoutBase.xaxis, title: { text: "Hazard Status" } },
  };

  const bubbleHazardous = neoData.filter((d) => d.is_potentially_hazardous);
  const bubbleNonHazardous = neoData.filter((d) => !d.is_potentially_hazardous);

  const bubbleData = [
    {
      name: "Hazardous",
      x: bubbleHazardous.map((d) => d.estimated_diameter_km_min),
      y: bubbleHazardous.map((d) => 1 / parseFloat(d.miss_distance_km)),
      text: bubbleHazardous.map((d) => d.name),
      mode: "markers",
      type: "scatter",
      marker: {
        size: bubbleHazardous.map((d) => d.estimated_diameter_km_min * 60),
        color: colors.hazardous.marker,
        line: { color: colors.hazardous.line, width: 1 },
        opacity: 0.7,
      },
      hovertemplate:
        "<b>%{text}</b><br>Diameter: %{x:.2f} km<br>Miss Distance: %{customdata} km<br><extra>Hazardous</extra>",
      customdata: bubbleHazardous.map((d) =>
        parseFloat(d.miss_distance_km).toLocaleString()
      ),
    },
    {
      name: "Non-Hazardous",
      x: bubbleNonHazardous.map((d) => d.estimated_diameter_km_min),
      y: bubbleNonHazardous.map((d) => 1 / parseFloat(d.miss_distance_km)),
      text: bubbleNonHazardous.map((d) => d.name),
      mode: "markers",
      type: "scatter",
      marker: {
        size: bubbleNonHazardous.map((d) => d.estimated_diameter_km_min * 60),
        color: colors.nonHazardous.marker,
        line: { color: colors.nonHazardous.line, width: 1 },
        opacity: 0.6,
      },
      hovertemplate:
        "<b>%{text}</b><br>Diameter: %{x:.2f} km<br>Miss Distance: %{customdata} km<br><extra>Non-Hazardous</extra>",
      customdata: bubbleNonHazardous.map((d) =>
        parseFloat(d.miss_distance_km).toLocaleString()
      ),
    },
  ];
  const bubbleLayout = {
    ...layoutBase,
    title: {
      text: "Asteroid Hazard Visualization: Size vs Distance",
      x: 0.5,
      font: { size: 20, color: "#111827" },
    },
    xaxis: {
      ...layoutBase.xaxis,
      title: { text: "Estimated Diameter (km)" },
      tickformat: ".2f",
    },
    yaxis: {
      ...layoutBase.yaxis,
      title: { text: "Inverse Miss Distance (1/km)" },
      type: "log",
      tickformat: ".1e",
    },
    showlegend: true,
    legend: {
      orientation: "h",
      y: -0.2,
      x: 0.5,
      xanchor: "center",
      font: { size: 13 },
    },
    hovermode: "closest",
  };

  // Chart Switcher
  d3.select("#chart-select").on("change", function () {
    const selected = d3.select(this).property("value");
    d3.selectAll(".chart").classed("active", false);
    d3.select("#default-message").style("display", selected ? "none" : "block");
    d3.select("#non-hazardous-pie").html(""); // Clear pie chart on switch

    const map = {
      pie: ["pie-chart", pieData, pieLayout],
      "miss-distance": [
        "miss-distance-graph",
        missDistanceData,
        missDistanceLayout,
      ],
      correlation: ["correlation-graph", scatterData, scatterLayout],
      boxplot: ["boxplot-chart", boxplotData, boxplotLayout],
      velocity: ["velocity-graph", velocityData, velocityLayout],
      "velocity-box": [
        "velocity-boxplot",
        velocityBoxplotData,
        velocityBoxplotLayout,
      ],
      "miss-distance-box": [
        "miss-distance-boxplot",
        missDistanceBoxplotData,
        missDistanceBoxplotLayout,
      ],
      bubble: ["bubble-chart", bubbleData, bubbleLayout],
    };

    const [id, data, layout] = map[selected] || [];
    if (id) {
      d3.select(`#${id}`).classed("active", true);
      Plotly.react(id, data, layout);
    }
  });

  // Responsive resize
  window.addEventListener("resize", () => {
    d3.selectAll(".chart").each(function () {
      Plotly.Plots.resize(this);
    });
  });

  // Button-triggered pie chart for Non-Hazardous Size Distribution
  d3.select("#non-hazardous-pie-btn").on("click", function () {
    const small = neoData.filter(
      (d) => !d.is_potentially_hazardous && d.estimated_diameter_km_min <= 0.14
    ).length;

    const large = neoData.filter(
      (d) => !d.is_potentially_hazardous && d.estimated_diameter_km_min > 0.14
    ).length;

    const pieData = [
      {
        values: [small, large],
        labels: ["≤ 0.14 km", "> 0.14 km"],
        type: "pie",
        marker: {
          colors: ["#93c5fd", "#1d4ed8"],
        },
        textinfo: "label+percent",
        hoverinfo: "label+value+percent",
      },
    ];

    const pieLayout = {
      ...layoutBase,
      title: {
        text: "Size Distribution of Non-Hazardous Asteroids",
        x: 0.5,
      },
    };

    Plotly.newPlot("non-hazardous-pie", pieData, pieLayout).then(() => {
      document
        .getElementById("non-hazardous-pie")
        .scrollIntoView({ behavior: "smooth" });
    });
  });
});
