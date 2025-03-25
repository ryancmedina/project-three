let graphData = [];
let nS = "";

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
  //dropdown2.append("option").text("Five Weeks")

  checkbox = d3.select("#myCheckbox");
  checkbox.property("checked", true);
 
  numberChanged("One Week");
  
}

init();

function data_managment(h)
{
  console.log(neoData[0]);
  //console.log(neoData[0].close_approach_date.charAt(6));
  //console.log(neoData)
  //console.log(dropdown2.property("value"))
  console.log(h);
  let x_marks = [];
  let y_marks = [];

  x_marks = h.map(item => item.relative_velocity_kph);
  y_marks = h.map(item => item.estimated_diameter_km_max);
  names = h.map(item => item.name);

  let trace  ={
    x: x_marks,
    y: y_marks,
    text: names,
    type: "scatter",
    mode: "markers",
    marker: {
      size: 10,
      color: "red",
      hovertemplate: "h"
    },
    hoverinfo: "text"
  }

  scatter = [trace];

  let layout = {
    title: "Velocity vs Diameter of Asteroids Near Earth",
    xaxis: {
      title : "Relative Velocity (Kph)"
    },
    yaxis: {
      title: "Estimated Max Diameter (KM)"
    },
    hovermode : "closest"
  }

  Plotly.newPlot("bubble", scatter, layout);
}

  function numberChanged(newSample) {
    //buildCharts(newSample);
    //buildMetadata(newSample);

    let month = getWeeks(newSample); 
    graphData = []
    let weekCheck = month * 7;
    let day = parseInt(neoData[0].close_approach_date.charAt(8) + neoData[0].close_approach_date.charAt(9))
    let d = 0;
    let w = 0;

    for(let i = 0; i < neoData.length; i++)
    {
      d = parseInt(neoData[i].close_approach_date.charAt(8) + neoData[i].close_approach_date.charAt(9));

      if(d != day)
      { 
        w += 1;
        day = d;
        console.log(`d = ${d}, day = ${day}`)
        if(w >= weekCheck)
          break;
      }
     
      //neoData[i].close_approach_date.charAt(6) === month) && 
      if((checkbox.property("checked") || neoData[i].is_potentially_hazardous))
      {
        graphData.push(neoData[i]);
      }

      
    }



    data_managment(graphData)
  }

  function sortData()
  {
    console.log("change")  
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