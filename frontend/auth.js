async function signup(){

  const data = {

    name: document.getElementById("name").value,

    email: document.getElementById("email").value,

    password: document.getElementById("password").value
  };

  const res = await fetch("http://localhost:5000/signup",{

    method:"POST",

    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify(data)
  });

  const result = await res.json();

  alert(result.message);

   window.location.href = "login.html";
}

async function login(){

  const data = {

    email: document.getElementById("email").value,

    password: document.getElementById("password").value
  };

  const res = await fetch("http://localhost:5000/login",{

    method:"POST",

    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify(data)
  });

  const result = await res.json();

  if(result.token){

    localStorage.setItem("token", result.token);

    alert("Login Success");

    window.location.href = "home.html";

  }else{

    alert(result.message);
  }
}