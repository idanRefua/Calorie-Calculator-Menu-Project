const productsArr = [
  {
    title: "Hamburger",
    id: 1,
    price: 30,
    calories: 1000,
    img: "https://cdn.pixabay.com/photo/2016/03/26/23/19/hamburger-1281855_960_720.jpg",
    qty: 1,
  },
  {
    title: "Pizza",
    id: 2,
    price: 25,
    calories: 700,
    img: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg",
    qty: 1,
  },
  {
    title: "Nuggets",
    id: 3,
    price: 15,
    calories: 450,
    img: "https://cdn.pixabay.com/photo/2014/01/16/01/48/chicken-nuggets-246180_960_720.jpg",
    qty: 1,
  },
  {
    title: "Steak",
    id: 4,
    price: 70,
    calories: 700,
    img: "https://cdn.pixabay.com/photo/2018/02/08/15/02/meat-3139641_960_720.jpg",
    qty: 1,
  },
  {
    title: "Noodles Chicken",
    id: 5,
    price: 23,
    calories: 1000,
    img: "https://cdn.pixabay.com/photo/2015/02/11/10/10/food-632215_960_720.jpg",
    qty: 1,
  },
];
const menuArr = [];
const menu = document.getElementById("menu");
const caloriesMenu = document.getElementById("calories-menu");

function renderData() {
  let sumPrice = 0;
  let sumCalories = 0;

  caloriesMenu.innerHTML = "";
  caloriesMenu.innerHTML = `  
            <div class="row" >
            <div class="col col-title">Food</div>
            <div class="col col-title">Qty</div>
            <div class="col col-title">Calories</div>
          </div>
          <br />`;

  menuArr.map((food) => {
    caloriesMenu.innerHTML += `
    <div class="row">
    <div class="col col-body">
      ${food.title}
    </div>
    <div class="col col-body">
      <button class="qty-btn minus-btn" onclick="removeOne('${
        food.title
      }')">-</button> ${
      food.qty
    } <button class="qty-btn plus-btn" onclick="addOne('${
      food.title
    }')">+</button>
    </div>
    <div class="col col-body">
      ${food.calories * food.qty}
    </div>
    </div> 
    <br/>

  `;
  });

  for (food of menuArr) {
    sumCalories += food.qty * food.calories;
    sumPrice += food.qty * food.price;
  }

  caloriesMenu.innerHTML += `
  <br/>
  <br/>
  <br/>
  <div>
  <p class="p-sum">
  Total calories : ${sumCalories}
  </p>
  <p class="p-sum">
  Total Price : ${sumPrice}$
  </p>
  </div>
  
  `;

  if (menuArr.length === 0) {
    caloriesMenu.innerHTML = "";
  }
}

function removeOne(title) {
  let chooseFood = menuArr.find((food) => food.title === title);

  if (chooseFood.qty === 1) {
    let indexFood = menuArr.indexOf(chooseFood);
    if (indexFood > -1) {
      menuArr.splice(indexFood, 1);
    }
  }
  chooseFood.qty -= 1;
  renderData();
}

function addOne(title) {
  let chooseFood = menuArr.find((food) => food.title === title);
  chooseFood.qty += 1;
  renderData();
}

function addToMenu(id, title, price, calories, qty) {
  let newFood = { id, title, price, calories, qty };

  let thereIsFood = menuArr.find((food) => food.title === title);

  if (thereIsFood) {
    thereIsFood.qty += 1;
  } else {
    menuArr.push(newFood);
  }
  renderData();
}

function loadThePage() {
  productsArr.map((food, i) => {
    let templateFood = `
  <div class="card" style="width: 18rem">
  <img src="${food.img}" class="card-img-top" alt="${food.title}">
  <div class="card-body">
    <h5 class="card-title">${food.title}</h5>
    <h5 class="card-title">${food.calories} Calories</h5>
    <h6 class="card-title">${food.price}$</h6>
    <button class="btn btn-primary" onclick="addToMenu(${food.id},'${food.title}',${food.price},${food.calories} , ${food.qty})" >Add</button>
  </div>
</div> 
    `;

    menu.innerHTML += templateFood;
  });
}
loadThePage();
