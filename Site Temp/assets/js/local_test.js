// Initial Params
var endRoute = "nps_rmnp";

function init() {
    // var endRoute = "poverty";

    d3.json(`http://localhost:5000/${endRoute}`).then(data=>{
            // console.log(Object.keys(data))
        console.log(data)
        var trace1 = {
            y: (data.January.RV),
            type: 'box',
            name: 'January',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace2 = {
            y: (data.February.RV),
            type: 'box',
            name: 'February',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        
        var trace3 = {
            y: (data.March.RV),
            type: 'box',
            name: 'March',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };

        var trace4 = {
            y: (data.April.RV),
            type: 'box',
            name: 'April',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };

        var trace5 = {
            y: (data.May.RV),
            type: 'box',
            name: 'May',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };

        var trace6 = {
            y: (data.June.RV),
            type: 'box',
            name: 'June',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace7 = {
            y: (data.July.RV),
            type: 'box',
            name: 'July',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace8 = {
            y: (data.August.RV),
            type: 'box',
            name: 'August',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace9 = {
            y: (data.September.RV),
            type: 'box',
            name: 'September',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace10 = {
            y: (data.October.RV),
            type: 'box',
            name: 'October',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace11 = {
            y: (data.November.RV),
            type: 'box',
            name: 'Nocember',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace12 = {
            y: (data.December.RV),
            type: 'box',
            name: 'December',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };

        var data = [trace1,trace2,trace3,trace4,trace5,trace6,trace7,trace8,trace9,trace10,trace11,trace12];
        var layout = {
            title: 'Box Plot Styling Outliers'
        };
        Plotly.newPlot('myDiv', data, layout);

    });
};

function updateEndRoute(selectionClass){
    var endRoute;

    if 
};

init();