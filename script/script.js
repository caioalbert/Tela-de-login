function logar(user, password){
  var user = document.getElementById("user").value
  var password = document.getElementById("password").value

  if(user == "admin" && password == "admin"){
    window.alert("logado com sucesso")
    console.log("logado com sucesso")
    location.href = "home.html"
  }else{
    alert("usario ou senha incorretos")
  }
}