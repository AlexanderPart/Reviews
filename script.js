let persons = [{
  id: 1,
  name: "Monika",
  job: "It1",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas aperiam nesciunt ab at, ipsa suscipit alias, sint nobis quaerat modi cumque voluptatibus aliquam, blanditiis corporis eaque accusantium? Explicabo in est possimus vero?"
},{
  id: 2,
  name: "Jara",
  job: "It2",
  text: "suscipit alias, sint nobis quaerat modi cumque voluptatibus aliquam, blanditiis corporis eaque accusantium? Explicabo in est possimus vero?"
},{
  id: 3,
  name: "Lenka",
  job: "It3",
  text: "bis quaerat modi cumque voluptatibus aliquam, blanditiis corporis eaque accusantium? Explicabo in est possimus vero?"
},{
  id: 4,
  name: "Radek",
  job: "It4",
  text: " corporis eaque accusantium? Explicabo in est possimus vero?  corporis eaque accusantium? Explicabo in est possimus vero corporis eaque accusantium? Explicabo in est possimus vero"
},{
  id: 5,
  name: "Alex",
  job: "It5",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas aperiam nesciunt ab at,olor sit amet consectetur adipisicing elit. Quas aperiam olor sit amet consectetur adipisicing elit. Quas aperiam "
},{
  id: 6,
  name: "Tom",
  job: "It6",
  text: "adipisicing elit. Quas aperiam Quas aperiam nesciunt ab at, ipsa suscipit alias, sint nobis quaerat modi cumqueolor sit amet consectetur adipisicing elit. Quas aperiam Quas aperiam nesciunt ab at, ipsa suscipit alias, sint nobis quaerat modi cumque voluptatibus aliquam, blanditiis corporis eaque accusantium? Explicabo in est possimus vero?"
}]

let namePerson = document.querySelector(".name")
let job = document.querySelector(".job")
let text = document.querySelector(".text")

let prevBtn = document.querySelector(".prevBtn")
let nextBtn = document.querySelector(".nextBtn")
let suprBtn = document.querySelector(".suprBtn")

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
  showPerson(currentItem)
})

let showPerson = () => {
  const item = persons[currentItem]
  namePerson.textContent = item.name
  job.textContent = item.job
  text.textContent = item.text
}

prevBtn.addEventListener("click", function(){
    currentItem -= 1
    if(currentItem < 0) {
      currentItem = persons.length - 1
    }
    showPerson()
})

nextBtn.addEventListener("click", function(){
  currentItem += 1
  if(currentItem > persons.length - 1) {
    currentItem = 0
  }
    showPerson()
})

suprBtn.addEventListener("click", function(){
  let randomNum = Math.floor(Math.random() * persons.length)
  
  while(randomNum === currentItem){
    randomNum = Math.floor(Math.random() * persons.length)
  }
  currentItem = randomNum
  showPerson()
})