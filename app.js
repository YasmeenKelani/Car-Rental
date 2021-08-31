'use strict'

let container = document.getElementById('container')
let tabelEl = document.createElement('table')

let cars = [];

container.appendChild(tabelEl);

function car (customerName, carModel, image){
    this.customerName = customerName;
    this.carModel = carModel;
    this.image = image;
    this.carPrice = 0;
    cars.push(this)
}

function saveToLocalStorage(){
    let data = JSON.stringify(cars);
    localStorage.setItem('car', data);
}
 
car.prototype.random = function(){

    return this.carPrice = Math.floor(Math.random() * (max - min) + min);

}

car.prototype.render = function (){
    let trEl = document.createElement('tr');
    tabelEl.appendChild(trEl);

let tdEl1 = document.createElement('td');
trEl.appendChild(tdEl1);
tdEl1.textContent = this.customerName;

let tdEl2 = document.createElement('td');
trEl.appendChild(tdEl2);
tdEl2.textContent = this.carModel;

let tdEl3 = document.createElement('td');
trEl.appendChild(tdEl3);
tdEl3.textContent = this.carPrice;

let tdEl4 = document.createElement('td');
let image = document.createElement('img');
image.setAttribute('src', this.image);
tdEl4.appendChild(image)
trEl.appendChild(tdEl4)

}
saveToLocalStorage();

function createTableHeader (){
    let trEl = document.createElement('tr');
    tabelEl.appendChild(trEl);
    
    let thEl1 = document.createElement('th');
    trEl.appendChild(thEl1);
    thEl1.textContent = 'Order Image';

    let thEl2 = document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent = 'Order Details';
    
}

function readFromLocalStorage(){

let item = localStorage.getItem('car');
let parse = JSON.parse(item);
cars = parse;
this.cars.render;

}

createTableHeader();


let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', addcar);

function addcar(event){
    event.preventDefault();
   
    let customerName = event.target.customerName.value;
    let carModel = event.target.carModel.value;
    let carPrice = event.target.carPrice.value;

    let newCar = new car(customerName, carModel, carPrice);
    newCar.random(1000, 10000);
    newCar.render();
}

readFromLocalStorage();

