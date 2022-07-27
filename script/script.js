function logar(user, password){
	var user = document.getElementById("user").value
	var password = document.getElementById("password").value

	if (user == "admin" && password == "admin") {
		window.alert("logado com sucesso")

		console.log("logado com sucesso")
		
		location.href = "home.html"
	
	}else if (user == "caio" && password == "C@io2204") {
		window.alert("bem vindo caio, você foi logado com sucesso")
		location.href = "home.html"
	}else if(user == "carlos" && password == "0502"){
		window.alert("bem vindo carlos, você foi logado com sucesso")
		location.href = "home.html"
	}else{
		window.alert("usuário ou senha incorretos")
	}
}