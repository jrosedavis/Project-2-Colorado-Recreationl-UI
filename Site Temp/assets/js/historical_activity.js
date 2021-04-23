d3.json('http://localhost:5000/api/v1.0/nps_rmnp').then(data=>{
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
        var trace4 = {
            y: (data.February.RV),
            type: 'box',
            name: 'February',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var trace5 = {
            y: (data.February.RV),
            type: 'box',
            name: 'February',
            marker: {
            color: 'rgb(107,174,214)'
            },
            boxpoints: 'Outliers'
        };
        var data = [trace1,trace2];
        var layout = {
            title: 'Box Plot Styling Outliers'
        };
        Plotly.newPlot('myDiv', data, layout);
    });