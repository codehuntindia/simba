function respnav() {
   var navbar = document.getElementById("navbar")
   if(navbar.className === "navbar"){
      navbar.className += " responsive";
   } else{
      navbar.className = "navbar";
   }
}

function hideloader() {
   setTimeout(function () {document.querySelector('#preloader').style.display = 'none'}, 2000)
}
