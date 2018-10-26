 window.onload = init;
   
 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             let element = document.createElement("li");
             element.innerText = task;

             let terminar= document.createElement("button");
             terminar.innerHTML= "Borrar";

             let tachar= document.createElement("button");
             tachar.innerHTML="Tachar";

             element.appendChild(this);
             element.appendChild(tachar);

             /*element.addEventListener("click", () => {
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });*/



             element.addEventListener("click", function(){
                let parent = this.parentNode;
                let parent2= parent.parentNode;
                if(parent){
                    parent.removeChild(this);
                }
             });



            // Añadir un boton para marcar de finalizado
            // Elmine de la lista

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
 }