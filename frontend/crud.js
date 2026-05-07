async function loadFoods(){

  const res = await fetch("http://localhost:5000/foods");

  const foods = await res.json();

  const container =
    document.getElementById("foodsContainer");

  container.innerHTML = "";

  foods.forEach(food=>{

    container.innerHTML += `

      <div>

        <h3>${food.name}</h3>

        <img src="${food.img}" width="100">

        <button onclick="deleteFood('${food._id}')">
          Delete
        </button>

      </div>
    `;
  });
}

async function addFood(){

  const food = {

    name:
      document.getElementById("name").value,

    vitaminC:
      document.getElementById("vitaminC").value,

    antioxidants:
      document.getElementById("antioxidants").value,

    protein:
      document.getElementById("protein").value,

    fat:
      document.getElementById("fat").value,

    img:
      document.getElementById("img").value
  };

  await fetch("http://localhost:5000/foods",{

    method:"POST",

    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify(food)
  });

  alert("Food Added");

  loadFoods();
}

async function deleteFood(id){

  await fetch(`http://localhost:5000/foods/${id}`,{

    method:"DELETE"
  });

  alert("Deleted");

  loadFoods();
}

loadFoods();