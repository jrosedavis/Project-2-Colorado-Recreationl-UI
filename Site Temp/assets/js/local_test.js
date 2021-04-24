// // Initial Params
// var endRoute = "nps_rmnp";

// var activity='Rec';

// var boxplot_title = `Rocky Mountain National Park ${activity} Activity`;

// function init() {
//     // var endRoute = "poverty";

//     d3.json(`http://localhost:5000/${endRoute}`).then(data=>{
//             // console.log(Object.keys(data))
//         console.log(data)
//         var trace1 = {
//             y: (data.January[`${activity}`]),
//             type: 'box',
//             name: 'January',
//             marker: {
//             color: 'rgb(107,174,214)'
//             },
//             boxpoints: 'Outliers'
//         };
//         var trace2 = {
//             y: (data.February[`${activity}`]),
//             type: 'box',
//             name: 'February',
//             marker: {
//             color: 'rgb(107,174,214)'
//             },
//             boxpoints: 'Outliers'
//         };
        
//         var trace3 = {
//             y: (data.March[`${activity}`]),
//             type: 'box',
//             name: 'March',
//             marker: {
//             color: 'rgb(107,174,214)'
//             },
//             boxpoints: 'Outliers'
//         };

//         var trace4 = {
//             y: (data.April[`${activity}`]),
//             type: 'box',
//             name: 'April',
//             marker: {
//             color: 'rgb(107,174,214)'
//             },
//             boxpoints: 'Outliers'
//         };

//         var trace5 = {
//             y: (data.May[`${activity}`]),
//             type: 'box',
//             name: 'May',
//             marker: {
//             color: 'rgb(107,174,214)'
//             },
//             boxpoints: 'Outliers'
//         };

//         var trace6 = {
//             y: (data.June[`${activity}`]),
//             type: 'box',
//             name: 'June',
//             marker: {
//             color: 'rgb(107,174,214)'
//             },
//             boxpoints: 'Outliers'
//         };
//         var trace7 = {
//             y: (data.July[`${activity}`]),
//             type: 'box',
//             name: 'July',
//             marker: {
//             color: 'rgb(107,174,214)'
//             },
//             boxpoints: 'Outliers'
//         };
//         var trace8 = {
//             y: (data.August[`${activity}`]),
//             type: 'box',
//             name: 'August',
//             marker: {
//             color: 'rgb(107,174,214)'
//             },
//             boxpoints: 'Outliers'
//         };
//         var trace9 = {
//             y: (data.September[`${activity}`]),
//             type: 'box',
//             name: 'September',
//             marker: {
//             color: 'rgb(107,174,214)'
//             },
//             boxpoints: 'Outliers'
//         };
//         var trace10 = {
//             y: (data.October[`${activity}`]),
//             type: 'box',
//             name: 'October',
//             marker: {
//             color: 'rgb(107,174,214)'
//             },
//             boxpoints: 'Outliers'
//         };
//         var trace11 = {
//             y: (data.November[`${activity}`]),
//             type: 'box',
//             name: 'Nocember',
//             marker: {
//             color: 'rgb(107,174,214)'
//             },
//             boxpoints: 'Outliers'
//         };
//         var trace12 = {
//             y: (data.December[`${activity}`]),
//             type: 'box',
//             name: 'December',
//             marker: {
//             color: 'rgb(107,174,214)'
//             },
//             boxpoints: 'Outliers'
//         };

//         var data = [trace1,trace2,trace3,trace4,trace5,trace6,trace7,trace8,trace9,trace10,trace11,trace12];
//         var layout = {
//             title: `${boxplot_title}`
//         };
//         Plotly.newPlot('myDiv', data, layout);

//     });
// };

// // Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#myDropdown").on("click", updatePlotly);

// // This function is called when a dropdown menu item is selected
// function updatePlotly() {

//     // Use D3 to select the dropdown menu
//     var dropdownMenu = d3.select("#myDropdown");
// console.log(dropdownMenu)
//     // Assign the value of the dropdown menu option to a variable
//     var endRoute = dropdownMenu.property("href").replace('#','');
//     console.log(endRoute);

//     var activity = dropdownMenu.property("text");
//     console.log(activity);

//     // Load json data as d3 object
//     d3.json(`http://localhost:5000/${endRoute}`).then(data=>{
//         // Grab values from the response json object to build the plots
//         console.log(data.January[`${activity}`])

//   }); 
// };

// console.log()

// init();