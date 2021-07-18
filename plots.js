function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
    optionChanged(sampleNames[0])
})}

init();

function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");
    //console.log("******************************");
    //console.log(sample);
    PANEL.html("");
    Object.entries(result).forEach(([key,value]) => {
      PANEL.append("h6").text(`${key}:${value}`);
    })
    
  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var sampledata = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var resultArray = sampledata.filter(sampleObj => sampleObj.id == sample);
    
    //  5. Create a variable that holds the first sample in the array.
    var result = resultArray[0];

    //console.log(result);
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuids = result.otu_ids.map
    var otulabels = result.otu_labels
    var samplevalues = result.sample_values;
    
     
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

   // var yticks = otuids.slice(0, 10).map(otuids => `${otuids}`);
   var yvalues = (data.samples[0].otu_ids.slice(0,10));
   
   // var yticks = yvalues.toString();
   var yticks = yvalues.map(y => "OTU " + y);
   var xticks = (data.samples[0].sample_values.slice(0,10));
   xticks = xticks.reverse();
   //console.log("******************************");
   //console.log(otulabels)
   // console.log(otu_labels)
  //console.log(yticks, 'this is my yaxis')
  //console.log(samplevalues, 'x axis')
    // 8. Create the trace for the bar chart. 
    var trace = {
      x: xticks,
      y: yticks,
      text: otulabels,
      marker: {color: 'blue'},
      type: "bar",
      orientation: "h"
    };
    // 9. Create the layout for the bar chart. 
    //var barLayout = {barmode: 
    var data = [trace];
    var layout = {
      title: "Top 10 Bacteria Cultures Found",
      xaxis: { title: "" },
      yaxis: { title: ""}
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", data, layout);
  });
}

// Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot(); 

    // 1. Create the trace for the bubble chart.
    var bubbleData = [
   
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot(); 
  });
}

