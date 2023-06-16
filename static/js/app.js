// Define function to initialize the dashboard
function init() {
    // Use D3 to read the samples.json file
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
      // Get the dropdown select element
      var dropdown = d3.select("#selDataset");
  
      // Populate the dropdown options with sample IDs
      data.names.forEach((name) => {
        dropdown.append("option").text(name).property("value", name);
      });
  
      // Use the first sample ID to initialize the dashboard
      var initialSample = data.names[0];
      buildCharts(initialSample);
      showMetadata(initialSample);
    });
  }
  
  // Define function to build the charts and display metadata for a given sample
  function buildCharts(sample) {
    // Use D3 to read the samples.json file
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
      // Filter the samples data for the selected sample
      var samples = data.samples.filter((s) => s.id === sample)[0];
  
      // Get the top 10 OTUs for the selected sample
      var otuIds = samples.otu_ids.slice(0, 10).reverse();
      var sampleValues = samples.sample_values.slice(0, 10).reverse();
      var otuLabels = samples.otu_labels.slice(0, 10).reverse();
  
      // Create the horizontal bar chart
      var barTrace = {
        x: sampleValues,
        y: otuIds.map((id) => `OTU ${id}`),
        text: otuLabels,
        type: "bar",
        orientation: "h"
      };
  
      var barData = [barTrace];
  
      var barLayout = {
        title: "Top 10 OTUs",
        xaxis: { title: "Sample Values" },
        yaxis: { title: "OTU IDs" }
      };
  
      Plotly.newPlot("bar", barData, barLayout);
  
      // Create the bubble chart
      var bubbleTrace = {
        x: samples.otu_ids,
        y: samples.sample_values,
        text: samples.otu_labels,
        mode: "markers",
        marker: {
          size: samples.sample_values,
          color: samples.otu_ids
        }
      };
  
      var bubbleData = [bubbleTrace];
  
      var bubbleLayout = {
        title: "OTU IDs vs Sample Values",
        xaxis: { title: "OTU IDs" },
        yaxis: { title: "Sample Values" }
      };
  
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    });
  }
  
  // Define function to display the metadata for a given sample
  function showMetadata(sample) {
    // Use D3 to read the samples.json file
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
      // Filter the metadata for the selected sample
      var metadata = data.metadata.filter((m) => m.id == sample)[0];
  
      // Select the metadata panel
      var metadataPanel = d3.select("#sample-metadata");

      // Clear any existing metadata
      metadataPanel.html("");

      // Iterate through the metadata object and display key-value pairs
      Object.entries(metadata).forEach(([key, value]) => {
        metadataPanel.append("p").text(`${key}: ${value}`);
      });
    });
  }

  // Define function to handle changes in the dropdown selection
  function optionChanged(sample) {
    buildCharts(sample);
    showMetadata(sample);
  }

  // Initialize the dashboard
  init();
  