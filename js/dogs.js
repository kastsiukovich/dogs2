//https://dog.ceo/dog-api/

const newDog = document.querySelector('#new-dog');
const DOG_URL = 'https://dog.ceo/api/breeds/image/random'

let cardDogs = document.querySelector('#dogs');
const newFotoDogs = () => {
   fetch(`${DOG_URL}`).then(
      response => {
         return response.json();
      }
   )
      .then(
         data => {
            cardDogs.innerHTML = '';
            cardDogs.innerHTML += `<div class="card blue-grey darken-1">
            <div class="card-content white-text">
            <img src=${data.message} alt="dog">  
            <span class="card-title">Good boy or good girl!</span>
            </div>
            </div>`
         }
      )
      .catch(
         (err) => {
            console.log(err)
         }
      )
}
newDog.addEventListener('click', newFotoDogs)

const moreFotoDogs = (currentsFotos) => {
   fetch(`${DOG_URL}/${currentsFotos}`).then(
      response => {
         return response.json();
      }
   )
      .then(
         data => {
            data.message.forEach((item) => {
               let cardDogs = document.querySelector('#dogs');
               cardDogs.innerHTML += `<div class="card blue-grey darken-1">
               <div class="card-content white-text">
               <img src=${item} alt="dog">  
               <span class="card-title">Good boy or good girl!</span>
               </div>
               </div>`
            })

         }
      )
      .catch(
         (err) => {
            console.log(err)
         }
      )
}
document.querySelector('#more-dog').addEventListener('click', () => {
   moreFotoDogs(3)
})

function checkPosition() {
   const height = document.body.offsetHeight;
   const screenHeight = window.innerHeight;
   const scrolled = window.scrollY;
   const threshold = height - screenHeight / 100;
   const position = scrolled + screenHeight;
   if (position >= threshold) {
      moreFotoDogs();
   }
}
const scroll = () => {
   window.addEventListener("scroll", checkPosition);
}
scroll()
