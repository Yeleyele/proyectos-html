//  CAPTURA DE DATOS DE SMLV Y SUBSIDIO TRANSPORTE AÑO 2023
let smlv=parseFloat(prompt("INGRESE SALARIO MINIMO LV 2023"));
let subtte=parseFloat(prompt("INGRESE SUNSIDIO DE TRANSPORTE LV 2023"));
function liquidar(){
    //SUELDO BASICO
    let n1=document.getElementById("salario").value;// bajar info salario desde formulario

    let n2=document.getElementById("dias").value;// bajar info dias lab desde formulario
    
    Sueldo=parseInt(n1)/30*parseInt(n2);//calcular sueldo basico
    
    document.getElementById("basico").value=Sueldo.toFixed(0);//subir info sueldo al formulario
    
    //SUBSIDIO TRANSPORTE
    
    if (n1>=2*smlv){
    
    subsidiot=0;
    
    document.getElementById("subsidio").value=subsidiot.toFixed(2);
    
    }
    
    else{
    
    subsidiot=subtte/30*parseInt(n2);
    
    document.getElementById("subsidio").value=subsidiot.toFixed(0);
    
    }
    
    //RECARGO NOCTURNO

    
    var nhrn=document.getElementById("hrn").value;
    
    let vhrn=n1/240*nhrn*1.35;
    
    document.getElementById('totrecn').value=vhrn.toFixed(0);
    
    //Total Devengado
    
    document.getElementById("totaldev").value=(parseFloat(document.getElementById('basico').value)+parseFloat(document.getElementById('subsidio').value)+parseFloat(document.getElementById('bonif').value)+parseFloat(document.getElementById('totrecn').value)|| 0).toFixed(0);
    
    //
    
    let totaldevo=document.getElementById("totaldev").value;
    
    // LIQUIDACIÓN DE DEDUCCIONES//
    
    //EPS y Pensión
    
    let eps00=(totaldevo-subsidiot)*0.04;
    
    let pens00=(totaldevo-subsidiot)*0.04;
    
    document.getElementById('eps').value=eps00.toFixed(0);
    
    document.getElementById('pension').value=pens00.toFixed(0);
    
    //Fondo de solidaridad
    
    let fondo=0;
    
    if (n1 >= 4*smlv){
    
    let fondo=totaldevo*0.01;
    
    document.getElementById("fondos").value=fondo.toFixed(0);
    
    }else{
    
    document.getElementById("fondos").value=fondo.toFixed(0);
    
    }
    
    //PRRESTAMO
    
    let presta=document.getElementById("prestam").value;
    
//TOTAL DEDUCCIONES
document.getElementById("totaldedu").value=(parseFloat(document.getElementById('fondos').value)+parseFloat(document.getElementById('prestam').value)+parseFloat(document.getElementById('eps').value)+parseFloat(document.getElementById('pension').value)|| 0).toFixed(0);

//CALCULAR VALOR NETO A PAGAR
let vneto=totaldevo-totalddc;
document.getElementById("neto").value=vneto.toFixed(0);
}