(function(){
     // Selecciona todos los elementos con la clase 'questions__title'
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
   
// Itera sobre cada elemento seleccionado
    titleQuestions.forEach(question =>{
         // Agrega un event listener para el evento 'click' a cada pregunta
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;
 // Agrega o quita una clase para cambiar el estilo (puede ser para agregar padding)
            addPadding.classList.toggle('questions__padding--add');
             // Rota un ícono de flecha (posiblemente para indicar si la pregunta está abierta o cerrada)
            question.children[0].classList.toggle('questions__arrow--rotate');
  // Si la altura de la respuesta es 0, establece la altura como la altura total de la respuesta
            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();