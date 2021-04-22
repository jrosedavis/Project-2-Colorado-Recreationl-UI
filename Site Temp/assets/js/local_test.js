d3.json('http://localhost:5000/api/v1.0/nps_rmnp').then(data=>{
    console.log(Object.keys(data))
    console.log(data)
})

d3.json('http://localhost:5000/api/v1.0/nps_mvnp').then(data=>{
    console.log(Object.keys(data))
    console.log(data)
})

d3.json('http://localhost:5000/api/v1.0/nps_gsdnp').then(data=>{
    console.log(Object.keys(data))
    console.log(data)
})

d3.json('http://localhost:5000/api/v1.0/nps_bcnp').then(data=>{
    console.log(Object.keys(data))
    console.log(data)
})

d3.json('http://localhost:5000/api/v1.0/geocode').then(data=>{
    console.log(Object.keys(data))
    console.log(data)
})

//function refresh_chart(park_name_from_drop_down){
//    d3.json(f`http://localhost:5000/api/v1.0/nps_rmnp/${pnfdd}`).then(data=>{
//        console.log(pnfdd)
//    });
//}

//d3.select('#park_drop_down').on('change', refresh_chart(this.value))