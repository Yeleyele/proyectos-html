let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu-btn');
let items = new Array();
let msj = "";

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let cart = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.add('active');
}

document.querySelector('#close-form').onclick = () =>{
    cart.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    cnteredSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function addToCart(item, nombre, valor){   
    var elemnt = document.getElementById(item);
    console.log(items);
    if(items.indexOf(elemnt) == -1) {      
        items.push(elemnt);  
        const virtual = Object.assign(
            document.createElement(`div`), 
            { innerHTML: ` 
                  <div class="cart-item">
                      <span class="fas fa-times" onclick='eliminarItem(this)'></span>
                      <img src="" alt="">
                      <div class="content">
                          <h3>%</h3>
                          <div class="price">&</div>
                      </div>
                  </div>            
             `, }
        );
        virtual.id = item;
        var imgnElemn = elemnt.firstElementChild.innerHTML;         
        virtual.children[0].childNodes[3].outerHTML = imgnElemn;        
        var data = virtual.children[0].childNodes[5].children;  
        if(data[0] != undefined) {
            data[0].outerHTML = "<h3>" + nombre + "</h3>";
        } 
        
        if(data[1] != undefined) {
            data[1].outerHTML = " <div class='price'>" + valor + " </div>";   
        }       
       
        virtual.children[0].childNodes[1].outerHTML = '<span class="fas fa-times" onclick="eliminarItem(' 
        + item + ')"></span>';        
        carro.appendChild(virtual);       
        msj = "Elemento agregado al carrito de compras";
        alert(msj);
    }
    else {
      msj = "El elemento ya esta seleccionado";
      alert(msj);
    }    
}

function eliminarItem(item){    
    var elemn = document.getElementById(item);   
    elemn.remove();
}