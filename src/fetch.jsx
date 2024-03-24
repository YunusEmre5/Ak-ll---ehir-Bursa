import React, {useEffect} from "react";

document.querySelector("#button1").addEventListener("click",getTramvay);


function getTramvay(){
  fetch("Tramvay.jsx").then(function(response){

    return response.jsx();
  }).then(function(data){

    let output = "<ul>";

    data.forEach(function(Tramvay){

      output += `<li> Başlık ${Tramvay.title} - İçerik ${Tramvay.body} </li>`
    })

    output += "</ul>";

    document.getElementById("output").innerHTML += output;
  });
}