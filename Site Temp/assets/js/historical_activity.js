// Initial Params
function init() {
    // var endRoute = "poverty";
    var endRoute = "nps_rmnp";

    var activity='RV';
    
    var nps_select="Rocky Mountain National Park"
    
    var boxplot_title = `${nps_select}: ${activity} Activity`;
    

    d3.json(`http://localhost:5000/${endRoute}`).then(data=>{
            // console.log(Object.keys(data))
        // console.log(data)
        var trace1 = {
            y: (data.January[`${activity}`]),
            type: 'box',
            name: 'January',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace2 = {
            y: (data.February[`${activity}`]),
            type: 'box',
            name: 'February',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        
        var trace3 = {
            y: (data.March[`${activity}`]),
            type: 'box',
            name: 'March',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };

        var trace4 = {
            y: (data.April[`${activity}`]),
            type: 'box',
            name: 'April',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };

        var trace5 = {
            y: (data.May[`${activity}`]),
            type: 'box',
            name: 'May',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };

        var trace6 = {
            y: (data.June[`${activity}`]),
            type: 'box',
            name: 'June',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace7 = {
            y: (data.July[`${activity}`]),
            type: 'box',
            name: 'July',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace8 = {
            y: (data.August[`${activity}`]),
            type: 'box',
            name: 'August',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace9 = {
            y: (data.September[`${activity}`]),
            type: 'box',
            name: 'September',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace10 = {
            y: (data.October[`${activity}`]),
            type: 'box',
            name: 'October',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace11 = {
            y: (data.November[`${activity}`]),
            type: 'box',
            name: 'Nocember',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace12 = {
            y: (data.December[`${activity}`]),
            type: 'box',
            name: 'December',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };

        var data_traces = [trace1,trace2,trace3,trace4,trace5,trace6,trace7,trace8,trace9,trace10,trace11,trace12];
        var layout = {
            title: `${boxplot_title}`
        };
        Plotly.newPlot('myDiv', data_traces, layout);

    });
};

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {

    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    console.log(dropdownMenu);

    // // Assign the value of the dropdown menu option to a variable
    var endRoute = dropdownMenu.property('value');
    console.log(endRoute);

    // var activity = dropdownMenu.text();
    var activity = d3.select("#selDataset option:checked").text();
    console.log(activity);

    var nps_select

    if (endRoute=="nps_rmnp"){
        nps_select="Rocky Mountian National Park";
    }
    else if (endRoute=="nps_bcnp"){
        nps_select="Black Canyon of the Gunnison National Park";
    }
    else if (endRoute=="nps_gsdnp"){
        nps_select="Great Sand Dunes National Park";
    }
    else{
        nps_select="Mesa Verde National Park";
    };

    var boxplot_title = `${nps_select}: ${activity} Activity`;

    // Load json data as d3 object
    d3.json(`http://localhost:5000/${endRoute}`).then(data=>{
        // Grab values from the response json object to build the plots
        console.log(data.April[`${activity}`])
        // console.log(data)
        var trace1 = {
            y: (data.January[`${activity}`]),
            type: 'box',
            name: 'January',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace2 = {
            y: (data.February[`${activity}`]),
            type: 'box',
            name: 'February',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        
        var trace3 = {
            y: (data.March[`${activity}`]),
            type: 'box',
            name: 'March',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };

        var trace4 = {
            y: (data.April[`${activity}`]),
            type: 'box',
            name: 'April',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };

        var trace5 = {
            y: (data.May[`${activity}`]),
            type: 'box',
            name: 'May',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };

        var trace6 = {
            y: (data.June[`${activity}`]),
            type: 'box',
            name: 'June',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace7 = {
            y: (data.July[`${activity}`]),
            type: 'box',
            name: 'July',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace8 = {
            y: (data.August[`${activity}`]),
            type: 'box',
            name: 'August',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace9 = {
            y: (data.September[`${activity}`]),
            type: 'box',
            name: 'September',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace10 = {
            y: (data.October[`${activity}`]),
            type: 'box',
            name: 'October',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace11 = {
            y: (data.November[`${activity}`]),
            type: 'box',
            name: 'Nocember',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace12 = {
            y: (data.December[`${activity}`]),
            type: 'box',
            name: 'December',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };

        var data_traces = [trace1,trace2,trace3,trace4,trace5,trace6,trace7,trace8,trace9,trace10,trace11,trace12];
        var layout = {
            title: `${boxplot_title}`
        };
        Plotly.newPlot('myDiv',data_traces,layout);

    }); 
};

init();