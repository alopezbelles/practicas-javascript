//SET INTERVAL


function start(){
  var tiempo = setInterval(function () {
    console.log("Set interval ejecutado. ");
    let encabezado = document.getElementById("title");
  
    if (
      encabezado.style.background == "yellow" ||
      encabezado.style.background == ""
    ) {
      encabezado.style.background = "green";
    } else {
      encabezado.style.background = "yellow";
    }
  }, 1000);
  return tiempo;
}

var tiempo = start();

var stop = document.getElementById("stop");
stop.addEventListener("click", function(){
    alert("Has parado el parpadeo. ")
    clearInterval(tiempo);
    
});

var start = document.getElementById("start");
start.addEventListener("click", ()=>
  
  start()
);


//SET TIMEOUT


// var tiempo = setTimeout(function () {
//     console.log("Set interval ejecutado. ");
//     let encabezado = document.getElementById("title");
  
//     if (
//       encabezado.style.background == "yellow" ||
//       encabezado.style.background == ""
//     ) {
//       encabezado.style.background = "green";
//     } else {
//       encabezado.style.background = "yellow";
//     }
//   }, 1000);
