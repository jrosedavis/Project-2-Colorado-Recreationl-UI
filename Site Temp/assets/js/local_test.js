d3.json('http://localhost:5000/api/v1.0/nps_summary').then(data=>{
    console.log(Object.keys(data))
   // console.log('Black')
})

function refresh_chart(park_name_from_drop_down){
    d3.json(f`http://localhost:5000/api/v1.0/nps_summary/${pnfdd}`).then(data=>{
        c onsole.log(pnfdd)
    });
}

d3.select('#park_drop_down').on('change', refresh_chart(this.value))