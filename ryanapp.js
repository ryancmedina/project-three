let neoerData = neoData;

function init()
{ 
  dropdown = d3.select("#selDataset");
  dropdown.append("option").text("Ryan")
  dropdown.append("option").text("Ifrah")

  dropdown2 = d3.select("#selDataset2");
  dropdown2.append("option").text("One Week")
  dropdown2.append("option").text("Two Weeks")
  dropdown2.append("option").text("Three Weeks")
  dropdown2.append("option").text("Four Weeks")

  checkbox = d3.select("#myCheckbox");
  checkbox.property("checked", true);
  
  neoerData.sort((a, b) => {
    return new Date(a.close_approach_date) - new Date(b.close_approach_date);
  })

  numberChanged("One Week");
}

init();

function data_managment(h)
{
  let x_marks = h.map(item => item.relative_velocity_kph);
  let y_marks = h.map(item => item.estimated_diameter_km_max);
  names = h.map(item => item.name);

  for(i = 0; i < names.length; i++)
  {
    names[i] = "Name: " + names[i];
  }
  
  let trace  ={
    x: x_marks,
    y: y_marks,
    text: names,
    type: "scatter",
    mode: "markers",
    marker: {
      size: 10,
      color: "black",
      hovertemplate: "h"
    },
    hoverinfo: "text"
  }

  scatter = [trace];

  let layout = {
    title: "Velocity vs Diameter of Asteroids Near Earth",
    xaxis: {
      title : "Relative Velocity (Kph)",
      range: [0, 130000]
    },
    yaxis: {
      title: "Estimated Max Diameter (KM)",
      range: [0, 1.5]
    },
    height: 800,
    hovermode : "closest"
  }

  Plotly.newPlot("plot", scatter, layout);
}

  function numberChanged(newSample) {
    let month = getWeeks(newSample); 
    graphData = []
    let weekCheck = month * 7;
    let day = parseInt(neoerData[0].close_approach_date.charAt(8) + neoerData[0].close_approach_date.charAt(9))
    let d = 0;
    let w = 0;

    for(let i = 0; i < neoData.length; i++)
    {
      d = parseInt(neoerData[i].close_approach_date.charAt(8) + neoerData[i].close_approach_date.charAt(9));

      if(d != day)
      { 
        w += 1;
        day = d;
        if(w >= weekCheck)
          break;
      }
     
      if((checkbox.property("checked") || neoerData[i].is_potentially_hazardous))
      {
        graphData.push(neoData[i]);
      }
    }

    data_managment(graphData)
  }

  function sortData()
  { 
    numberChanged(dropdown2.property("value"));
  }

  function getWeeks(m)
  {
      if(m === "One Week")
        return 1;
      else if(m === "Two Weeks")
        return 2;
      else if(m === "Three Weeks")
        return 3;
      else if(m === "Four Weeks")
        return 4;
  }