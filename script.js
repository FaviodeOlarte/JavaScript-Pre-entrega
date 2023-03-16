

const cartilla={
    menu1:{
        detalleMenu1:"1 - Pizzeta común" ,
        precioMenu1:200

    },
    menu2:{
        detalleMenu2:"2 - Pizzeta con muzarella",
        precioMenu2:250
    },
    menu3:{
        detalleMenu3:"3 - Pizzeta con muzarella y un gusto",
        precioMenu3:280
    },
    menu4:{
        detalleMenu4:"4 - Pizzeta con muzarella y dos gustos",
        precioMenu4:300
    }
}

let menuIngresado="",factura="",aceptarPedido='',eliminarPedido='',descuento='',totalGral=''

class Producto{
    constructor(nombre,precio,cantidad,subTotal){
        this.nombre= nombre;
        this.precio=precio;
        this.cantidad=cantidad;
        this.subTotal=subTotal;
    }
}
// ------------------funciones
const descuentoTotalGral= function(p1,p2,p3,p4){
  return  (p1+p2+p3+p4)*Number(25/100)
}

const sumaTotalGral=function(p1,p2,p3,p4,d){
return ((p1+p2+p3+p4)-d)
}

alert("\n \n            Bienvenido a Script Pizzas\n\nLe recordamos que con una compra mayor a $ 300 obtenes un\n                  ! 25% de descuento ! \n\n")

do {
    let nombre='',precio='', cantidad=''
    
    menuIngresado=Number(prompt("     Seleccione su menú:"+"\n"+"\n"+cartilla.menu1.detalleMenu1+" ---------------------------------------- $ "+cartilla.menu1.precioMenu1+"\n"+cartilla.menu2.detalleMenu2+" -------------------------------- $ "+cartilla.menu2.precioMenu2+"\n"+cartilla.menu3.detalleMenu3+" -------------------- $"+cartilla.menu3.precioMenu3+"\n"+cartilla.menu4.detalleMenu4+" ------------------ $"+cartilla.menu4.precioMenu4+aceptarPedido+eliminarPedido+"\n"+"\nIngresar número del menú"))
    switch (menuIngresado) {
        case 1:
            nombre=cartilla.menu1.detalleMenu1
            precio=Number(cartilla.menu1.precioMenu1)
            cantidad=Number(prompt(nombre+" ----- $ "+precio+"\n\nIngrese cuantas unidades desea:"))
            break;
        case 2:
            nombre=cartilla.menu2.detalleMenu2
            precio=Number(cartilla.menu2.precioMenu2)
            cantidad=Number(prompt(nombre+" ----- $ "+precio+"\n\nIngrese cuantas unidades desea:"))
            break;
        case 3:
            nombre=cartilla.menu3.detalleMenu3
            precio=Number(cartilla.menu3.precioMenu3)
            cantidad=Number(prompt(nombre+" ----- $ "+precio+"\n\nIngrese cuantas unidades desea:"))
            break;
        case 4:
            nombre=cartilla.menu4.detalleMenu4
            precio=Number(cartilla.menu4.precioMenu4)
            cantidad=Number(prompt(nombre+" ----- $ "+precio+"\n\nIngrese cuantas unidades desea:"))
            break;
        
        case 0:
            alert("Muchas gracias por su preferencia\n\n Su pedido sera entregado a la brevedad.")
            break
        case -1:
            alert("\nLamentamos su desición, cualquier inconveniente no dude en contactarnos\n")
            break
        default:
            alert("Numero incorrecto, ingrese un numero del menu de opciones")
            break;
    }

    if ((menuIngresado!=0) && (menuIngresado!=-1)&&((menuIngresado==1)||(menuIngresado==2)||(menuIngresado==3)||(menuIngresado==4) )){

    const producto1= new Producto(nombre,precio,cantidad,Number(precio)*Number(cantidad))

    if (producto1.subTotal>300){
        descuento= descuentoTotalGral(producto1.subTotal,0,0,0)
    } else descuento=0
    totalGral= sumaTotalGral(producto1.subTotal,0,0,0,descuento)

    do {
        factura=prompt(producto1.nombre+"---- $ "+producto1.precio+"\n     Unidades: "+producto1.cantidad+"\n              Sub total: $ "+producto1.subTotal+"\n------------------------------------\nDescuento ---------- $ -"+descuento+'\n------------------------------------\n     ----- Total : $'+totalGral+" -----\n------------------------------------\n\n + --- Agregar otra pizza\n 0 --- Aceptar el pedido\n -1 -- Eliminar todo el pedido")
        
    } while (factura!=0&&factura!=-1&&factura!="+");
    
     if (factura==0){
        menuIngresado=0
        alert("Muchas gracias por su preferencia\n\n Su pedido sera entregado a la brevedad.")
     }
     if (factura==-1){
        menuIngresado=-1
        alert("\nLamentamos su desición, cualquier inconveniente no dude en contactarnos\n")
     }
    //  ---------------------------------- Agregado de otro producto2
     if(factura=="+"){
        do {
            menuIngresado=Number(prompt("     Seleccione su menú:"+"\n"+"\n"+cartilla.menu1.detalleMenu1+" ---------------------------------------- $ "+cartilla.menu1.precioMenu1+"\n"+cartilla.menu2.detalleMenu2+" -------------------------------- $ "+cartilla.menu2.precioMenu2+"\n"+cartilla.menu3.detalleMenu3+" -------------------- $"+cartilla.menu3.precioMenu3+"\n"+cartilla.menu4.detalleMenu4+" ------------------ $"+cartilla.menu4.precioMenu4+aceptarPedido+eliminarPedido+"\n"+"\nIngresar número del menú"))
            switch (menuIngresado) {
                case 1:
                    nombre=cartilla.menu1.detalleMenu1
                    precio=Number(cartilla.menu1.precioMenu1)
                    cantidad=Number(prompt(nombre+" ----- $ "+precio+"\n\nIngrese cuantas unidades desea:"))
                    break;
                case 2:
                    nombre=cartilla.menu2.detalleMenu2
                    precio=Number(cartilla.menu2.precioMenu2)
                    cantidad=Number(prompt(nombre+" ----- $ "+precio+"\n\nIngrese cuantas unidades desea:"))
                    break;
                case 3:
                    nombre=cartilla.menu3.detalleMenu3
                    precio=Number(cartilla.menu3.precioMenu3)
                    cantidad=Number(prompt(nombre+" ----- $ "+precio+"\n\nIngrese cuantas unidades desea:"))
                    break;
                case 4:
                    nombre=cartilla.menu4.detalleMenu4
                    precio=Number(cartilla.menu4.precioMenu4)
                    cantidad=Number(prompt(nombre+" ----- $ "+precio+"\n\nIngrese cuantas unidades desea:"))
                    break;
                
                case 0:
                    alert("Muchas gracias por su preferencia\n\n Su pedido sera entregado a la brevedad.")
                    break
                case -1:
                    alert("\nLamentamos su desición, cualquier inconveniente no dude en contactarnos\n")
                    break
                default:
                    alert("Numero incorrecto, ingrese un numero del menu de opciones")
                    break;
            }
            
        if ((menuIngresado!=0) && (menuIngresado!=-1)&&((menuIngresado==1)||(menuIngresado==2)||(menuIngresado==3)||(menuIngresado==4) )){

            const producto2= new Producto(nombre,precio,cantidad,Number(precio)*Number(cantidad))
        
            if ((producto1.subTotal+producto2.subTotal)>300){
                descuento= descuentoTotalGral(producto1.subTotal,producto2.subTotal,0,0)
            } else descuento=0
                totalGral= sumaTotalGral(producto1.subTotal,producto2.subTotal,0,0,descuento)
            do {
                factura=prompt(producto1.nombre+"---- $ "+producto1.precio+"\n     Unidades: "+producto1.cantidad+"\n              Sub total: $ "+producto1.subTotal+"\n"+producto2.nombre+"---- $ "+producto2.precio+"\n     Unidades: "+producto2.cantidad+"\n              Sub total: $ "+producto2.subTotal
                +"\n------------------------------------\nDescuento ---------- $ -"+descuento+'\n------------------------------------\n     ----- Total : $'+totalGral+" -----\n------------------------------------\n\n + --- Agregar otra pizza\n 0 --- Aceptar el pedido\n -1 -- Eliminar todo el pedido")
                
            } while (factura!=0&&factura!=-1&&factura!="+");
            
            if (factura==0){
                menuIngresado=0
                alert("Muchas gracias por su preferencia\n\n Su pedido sera entregado a la brevedad.")
            }
            if (factura==-1){
                menuIngresado=-1
                alert("\nLamentamos su desición, cualquier inconveniente no dude en contactarnos\n")
            }
            if (factura=="+"){
                                //  ---------------------------------- Agregado de otro producto3
                        do {
                            menuIngresado=Number(prompt("     Seleccione su menú:"+"\n"+"\n"+cartilla.menu1.detalleMenu1+" ---------------------------------------- $ "+cartilla.menu1.precioMenu1+"\n"+cartilla.menu2.detalleMenu2+" -------------------------------- $ "+cartilla.menu2.precioMenu2+"\n"+cartilla.menu3.detalleMenu3+" -------------------- $"+cartilla.menu3.precioMenu3+"\n"+cartilla.menu4.detalleMenu4+" ------------------ $"+cartilla.menu4.precioMenu4+aceptarPedido+eliminarPedido+"\n"+"\nIngresar número del menú"))
                            switch (menuIngresado) {
                                case 1:
                                    nombre=cartilla.menu1.detalleMenu1
                                    precio=Number(cartilla.menu1.precioMenu1)
                                    cantidad=Number(prompt(nombre+" ----- $ "+precio+"\n\nIngrese cuantas unidades desea:"))
                                    break;
                                case 2:
                                    nombre=cartilla.menu2.detalleMenu2
                                    precio=Number(cartilla.menu2.precioMenu2)
                                    cantidad=Number(prompt(nombre+" ----- $ "+precio+"\n\nIngrese cuantas unidades desea:"))
                                    break;
                                case 3:
                                    nombre=cartilla.menu3.detalleMenu3
                                    precio=Number(cartilla.menu3.precioMenu3)
                                    cantidad=Number(prompt(nombre+" ----- $ "+precio+"\n\nIngrese cuantas unidades desea:"))
                                    break;
                                case 4:
                                    nombre=cartilla.menu4.detalleMenu4
                                    precio=Number(cartilla.menu4.precioMenu4)
                                    cantidad=Number(prompt(nombre+" ----- $ "+precio+"\n\nIngrese cuantas unidades desea:"))
                                    break;
                                
                                case 0:
                                    alert("Muchas gracias por su preferencia\n\n Su pedido sera entregado a la brevedad.")
                                    break
                                case -1:
                                    alert("\nLamentamos su desición, cualquier inconveniente no dude en contactarnos\n")
                                    break
                                default:
                                    alert("Numero incorrecto, ingrese un numero del menu de opciones")
                                    break;
                            }
                            
                        if ((menuIngresado!=0) && (menuIngresado!=-1)&&((menuIngresado==1)||(menuIngresado==2)||(menuIngresado==3)||(menuIngresado==4) )){

                            const producto3= new Producto(nombre,precio,cantidad,Number(precio)*Number(cantidad))
                        
                            if ((producto1.subTotal+producto2.subTotal+producto3.subTotal)>300){
                                descuento= descuentoTotalGral(producto1.subTotal,producto2.subTotal,producto3.subTotal,0)
                            } else descuento=0
                                totalGral= sumaTotalGral(producto1.subTotal,producto2.subTotal,producto3.subTotal,0,descuento)
                            do {
                                factura=prompt(producto1.nombre+"---- $ "+producto1.precio+"\n     Unidades: "+producto1.cantidad+"\n              Sub total: $ "+producto1.subTotal+"\n"+producto2.nombre+"---- $ "+producto2.precio+"\n     Unidades: "+producto2.cantidad+"\n              Sub total: $ "+producto2.subTotal+"\n"+producto3.nombre+"---- $ "+producto3.precio+"\n     Unidades: "+producto3.cantidad+"\n              Sub total: $ "+producto3.subTotal+"\n------------------------------------\nDescuento ---------- $ -"+descuento+'\n------------------------------------\n     ----- Total : $'+totalGral+" -----\n------------------------------------\n\n + --- Agregar otra pizza\n 0 --- Aceptar el pedido\n -1 -- Eliminar todo el pedido")
                                
                            } while (factura!=0&&factura!=-1&&factura!="+");
                            
                            if (factura==0){
                                menuIngresado=0
                                alert("Muchas gracias por su preferencia\n\n Su pedido sera entregado a la brevedad.")
                            }
                            if (factura==-1){
                                menuIngresado=-1
                                alert("\nLamentamos su desición, cualquier inconveniente no dude en contactarnos\n")
                            }
                            
                            if (factura=="+"){
                                        //  ---------------------------------- Agregado de otro producto4
                                do {
                                    menuIngresado=Number(prompt("     Seleccione su menú:"+"\n"+"\n"+cartilla.menu1.detalleMenu1+" ---------------------------------------- $ "+cartilla.menu1.precioMenu1+"\n"+cartilla.menu2.detalleMenu2+" -------------------------------- $ "+cartilla.menu2.precioMenu2+"\n"+cartilla.menu3.detalleMenu3+" -------------------- $"+cartilla.menu3.precioMenu3+"\n"+cartilla.menu4.detalleMenu4+" ------------------ $"+cartilla.menu4.precioMenu4+aceptarPedido+eliminarPedido+"\n"+"\nIngresar número del menú"))
                                    switch (menuIngresado) {
                                        case 1:
                                            nombre=cartilla.menu1.detalleMenu1
                                            precio=Number(cartilla.menu1.precioMenu1)
                                            cantidad=Number(prompt(nombre+" ----- $ "+precio+"\n\nIngrese cuantas unidades desea:"))
                                            break;
                                        case 2:
                                            nombre=cartilla.menu2.detalleMenu2
                                            precio=Number(cartilla.menu2.precioMenu2)
                                            cantidad=Number(prompt(nombre+" ----- $ "+precio+"\n\nIngrese cuantas unidades desea:"))
                                            break;
                                        case 3:
                                            nombre=cartilla.menu3.detalleMenu3
                                            precio=Number(cartilla.menu3.precioMenu3)
                                            cantidad=Number(prompt(nombre+" ----- $ "+precio+"\n\nIngrese cuantas unidades desea:"))
                                            break;
                                        case 4:
                                            nombre=cartilla.menu4.detalleMenu4
                                            precio=Number(cartilla.menu4.precioMenu4)
                                            cantidad=Number(prompt(nombre+" ----- $ "+precio+"\n\nIngrese cuantas unidades desea:"))
                                            break;
                                        
                                        case 0:
                                            alert("Muchas gracias por su preferencia\n\n Su pedido sera entregado a la brevedad.")
                                            break
                                        case -1:
                                            alert("\nLamentamos su desición, cualquier inconveniente no dude en contactarnos\n")
                                            break
                                        default:
                                            alert("Numero incorrecto, ingrese un numero del menu de opciones")
                                            break;
                                    }
                                    
                                if ((menuIngresado!=0) && (menuIngresado!=-1)&&((menuIngresado==1)||(menuIngresado==2)||(menuIngresado==3)||(menuIngresado==4) )){

                                    const producto4= new Producto(nombre,precio,cantidad,Number(precio)*Number(cantidad))
                                
                                    if ((producto1.subTotal+producto2.subTotal+producto3.subTotal+producto4.subTotal)>300){
                                        descuento= descuentoTotalGral(producto1.subTotal,producto2.subTotal,producto3.subTotal,producto4.subTotal)
                                    } else descuento=0
                                        totalGral= sumaTotalGral(producto1.subTotal,producto2.subTotal,producto3.subTotal,producto4.subTotal,descuento)
                                    do {
                                        factura=prompt(producto1.nombre+"---- $ "+producto1.precio+"\n     Unidades: "+producto1.cantidad+"\n              Sub total: $ "+producto1.subTotal+"\n"+producto2.nombre+"---- $ "+producto2.precio+"\n     Unidades: "+producto2.cantidad+"\n              Sub total: $ "+producto2.subTotal+"\n"+producto3.nombre+"---- $ "+producto3.precio+"\n     Unidades: "+producto3.cantidad+"\n              Sub total: $ "+producto3.subTotal+"\n"+producto4.nombre+"---- $ "+producto4.precio+"\n     Unidades: "+producto4.cantidad+"\n              Sub total: $ "+producto4.subTotal+"\n------------------------------------\nDescuento ---------- $ -"+descuento+'\n------------------------------------\n     ----- Total : $'+totalGral+" -----\n------------------------------------\n\n 0 --- Aceptar el pedido\n -1 -- Eliminar todo el pedido")
                                        
                                    } while (factura!=0&&factura!=-1&&factura!="+");
                                    
                                    if (factura==0){
                                        menuIngresado=0
                                        alert("Muchas gracias por su preferencia\n\n Su pedido sera entregado a la brevedad.")
                                    }
                                    if (factura==-1){
                                        menuIngresado=-1
                                        alert("\nLamentamos su desición, cualquier inconveniente no dude en contactarnos\n")
                                    }
                                    
                                    
                                }} while (menuIngresado!=0 && menuIngresado!=-1);
                            
                    }
                            
                        }} while (menuIngresado!=0 && menuIngresado!=-1);
                    
            }
            
        }} while (menuIngresado!=0 && menuIngresado!=-1);
     }

    aceptarPedido='\n\n   0 - Aceptar el pedido'
    eliminarPedido='\n -1 - Eliminar todo el pedido'}
    
    
} while (menuIngresado!=0 && menuIngresado!=-1);



