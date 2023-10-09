//querySelector Trae los datos y los almacena en un arreglo.
const pantalla = document.querySelector(".pantalla");
const boton = document.querySelectorAll(".boton");
boton.forEach(boton =>{
    //addEvenListener Registra un evento a un objeto en específico.
    boton.addEventListener("click", () => {
        //console.log(boton.textContent);
        const botonOn = boton.textContent;
        //pantalla.textContent=botonOn;

        if(boton.id==="borrar"){
            if(pantalla.textContent.length===1||pantalla.textContent==="¡Error!"){
                pantalla.textContent="0";
            }else{
                pantalla.textContent= pantalla.textContent.slice(0,-1);
            }
            return;
        }
        if(boton.id==="igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
                if(pantalla.textContent===""){
                    pantalla.textContent="¡Error!";
                }else{
                    pantalla.textContent += botonOn;
                }   
            }catch{
                pantalla.textContent="¡Error!";
            }
            return ;
        }
       
            
        
        if(boton.id==="limpiar"){
            pantalla.textContent ="0"
            return;
        }

        if(pantalla.textContent==="0"||pantalla.textContent==="¡Error!"){
            pantalla.textContent = botonOn;
        }else{
            pantalla.textContent += botonOn;
        }
        
    })
})
//slice Partir desde determinada posicion.