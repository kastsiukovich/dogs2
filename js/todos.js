//https://jsonplaceholder.typicode.com/users/1/todos
// Выведите первые 4 задачи из данного списка. Обязательно нужно вывести название задачи, и текущее состоаяние выполнения(true/false)

const bnt10 = document.querySelector('#ten-tasks');
const bnt30 = document.querySelector('#thirty-tasks');
const btn3 = document.querySelector('#ninth-task');
const TODOS_URL = 'https://jsonplaceholder.typicode.com/users/1/todos';
const todosFunc = (countLimit) => {
   fetch(`${TODOS_URL}/?_limit=${countLimit}`).then(
      respons => {
         return respons.json();
      }
   )
      .then(
         data => {
            const content = document.querySelector('#todos');
            content.innerHTML = '';
            data.forEach(item => {
               content.innerHTML += `<div class="card pink darken-1">
         <div class="card-content white-text">
           <span class="card-title">${item.title}</span>
           <p>${item.completed}</p>
         </div>
       </div>`
            })
         }
      )
      .catch(
         err => {
            console.log(err);
         }
      )
}
bnt10.addEventListener('click', () => {
   todosFunc(10)
})

const TODOS_URL_ID1 = 'https://jsonplaceholder.typicode.com/todos';
const todosFunc3 = (postId) => {
   fetch(`${TODOS_URL_ID1}/${postId}`).then(
      respons => {
         return respons.json();
      }
   )
      .then(
         data => {
            const content = document.querySelector('#todos');
            content.innerHTML += `<div class="card pink darken-1">
         <div class="card-content white-text">
           <span class="card-title">${data.title}</span>
           <p>${data.completed}</p>
         </div>
       </div>`
         }
      )
      .catch(
         err => {
            console.log(err);
         }
      )
}
bnt30.addEventListener('click', () => {
   todosFunc(20);
   todosFunc3(21)
   todosFunc3(22)
   todosFunc3(23)
   todosFunc3(24)
   todosFunc3(25)
   todosFunc3(26)
   todosFunc3(27)
   todosFunc3(28)
   todosFunc3(29)
   todosFunc3(30)
})


const TODOS_URL_ID = 'https://jsonplaceholder.typicode.com/todos';
const todosFunc1 = (postId) => {
   fetch(`${TODOS_URL_ID}/${postId}`).then(
      respons => {
         return respons.json();
      }
   )
      .then(
         data => {
            const content = document.querySelector('#todos');
            content.innerHTML = '';
            content.innerHTML += `<div class="card pink darken-1">
         <div class="card-content white-text">
           <span class="card-title">${data.title}</span>
           <p>${data.completed}</p>
         </div>
       </div>`
         }
      )
      .catch(
         err => {
            console.log(err);
         }
      )
}

btn3.addEventListener('click', () => {
   todosFunc1(9)
})

