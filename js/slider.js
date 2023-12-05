(function(){
    
    const sliders = [...document.querySelectorAll('.LenguajesPro__body')];//agarramos en una variable sliders el id , al agrgar los 3 puntos se combierte a array
    const buttonNext = document.querySelector('#next');//creo una variable para el boton siguiente 
    const buttonBefore = document.querySelector('#before');// boton atras
    let value;   

    buttonNext.addEventListener('click', ()=>{ //funcion click de siguiente que recorre el id de los carruseles
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{//funcion click de atras que recorre el id de los carruseles
        changePosition(-1);
    });

    const changePosition = (add)=>{ // si presionamos los botones restara y sumara
        const currentTestimony = document.querySelector('.LenguajesPro__body--show').dataset.id; //obtenemos el elemento con el data id pero solo body__show
        value = Number(currentTestimony); //es para que al valor se le sume de acuerdo al boton seleccionado, si no se le agrega el  number los concatena
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('LenguajesPro__body--show');//es para remover el class
        if(value === sliders.length+1 || value === 0){ //es para no revasar el nomero de sliders tanto como al inicio como al final
            value = value === 0 ? sliders.length  : 1; //asi que si tenemos que sobrepasar el sliders regresara al  final de array o al inicio
        }

        sliders[value-1].classList.add('LenguajesPro__body--show');//selleccionamos al elemento. value  y se le agrega la clase testomony__show

    }

})();