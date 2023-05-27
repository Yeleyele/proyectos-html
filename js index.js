function openMenu(){

    document.getElementById("mainMenu").style.width="480px";//abrir munu opciones en el celular//
    
    document.getElementById("mainMenu").style.display="flex";//abrir munu opciones en el celular//
    
    document.getElementById("mainMenu").style.height="1000px";//abrir munu opciones en el celular//
    
    document.getElementById("openmenu").style.display="none";//abrir munu opciones en el celular//
    
    }
    
    function closeNav(){
    
    document.getElementById("mainMenu").style.width="0";//cerrar menu opciones en el celular// 
    
    document.getElementById("mainMenu").style.transition="0.9s all";//cerrar menu opciones en el celular//
    
    window.location.reload()// recargar pagina actual - f5-
    
    }