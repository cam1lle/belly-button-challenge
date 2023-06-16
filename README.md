# Interactive Dashboard for Belly Button Biodiversity Dataset
## Background
In this assignment, I have built an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species, known as operational taxonomic units (OTUs), were present in more than 70% of people, while the rest were relatively rare.

## Instructions
I have completed the following steps to create this interactive dashboard:

1. Used the D3 library to read in the samples.json file from the following URL: https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
2. Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in an individual. The chart uses the sample_values as the values for the bar chart, otu_ids as the labels for the bar chart, and otu_labels as the hovertext for the chart.
3. Created a bubble chart that displays each sample. The chart uses otu_ids for the x-values, sample_values for the y-values, sample_values for the marker size, otu_ids for the marker colors, and otu_labels for the text values.
4. Displayed the sample metadata, which includes an individual's demographic information. Each key-value pair from the metadata JSON object is displayed on the page.
5. Updated all the plots when a new sample is selected. The dashboard dynamically updates based on the selected sample.
