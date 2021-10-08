var vg_1 = "week9HW.vg.json";
var vg_2 = "week10HW.vg.json";

vegaEmbed("#asia_deaths", vg_1).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#death_vax", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error);
   
