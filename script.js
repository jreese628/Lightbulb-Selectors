// Write your code here
let lightBulb1 = document.querySelector("#lightbulb1")
let lightBulb2 = document.querySelector("#lightbulb2")
let lightBulb3 = document.querySelector("#lightbulb3")
let h3 = document.querySelector(".subtitle")
let count = 0

lightBulb1.addEventListener('mouseover', function(){
    count ++
    h3.innerHTML = `You've clicked the light ${count} times`
    lightBulb1.classList.toggle("active")
})

lightBulb2.addEventListener('click', function(){
    count ++
    h3.innerHTML = `You've clicked the light ${count} times`
    lightBulb2.classList.toggle("active")
})

lightBulb3.addEventListener('click', function(){
    count ++
    h3.innerHTML = `You've clicked the light ${count} times`
    lightBulb3.classList.toggle("active")
})

