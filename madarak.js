var tomb = ["guvat","jegmadar","karokatona"]
var tombkepek =["guvat.png","jegmadar.png","karokatona.png"] 
var tombleiras =["","",""]
function kattintas(szam){
    //alert(tomb[szam])
    document.getElementById("modalisfej").innerHTML=tomb[szam]
    document.getElementById("modalisbody").innerHTML=`<img src="kepek/${tombkepek[szam]}">`

    
}