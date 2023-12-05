(function(){
     // Selecciona todos los elementos con la clase 'questions__title' y se convierte en array
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
   
// Itera sobre cada elemento seleccionado, es decir que de las 3 yo solo quier la seleccionada
    titleQuestions.forEach(question =>{
         // Agrega un event listener para el evento 'click' a cada pregunta
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;//este es el siguiente elemento osea el parrafo answer
            let addPadding = question.parentElement.parentElement; //toma todo el elemento de la pregunta
 // Agrega o quita una clase para cambiar el estilo (puede ser para agregar padding)
            addPadding.classList.toggle('questions__padding--add');
             // rota la flecha dependiendo si tiene la clase 
            question.children[0].classList.toggle('questions__arrow--rotate');
  // Si la altura de la respuesta es 0, establece la altura como la altura total de la respuesta
            if(answer.clientHeight === 0){ // si el elemento tiene un hight de o 
                height = answer.scrollHeight;// a height se le agrega scrollheight que es el minimo para que se muestre
            }

            answer.style.height = `${height}px`; // si eso no fuera verdad que height es o se le regresa para que al momento de dar otro click se regrese el answer
        });
    });
})();