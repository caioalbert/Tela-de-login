// função de soma
function sum(n1, n2){
  var n1 = document.getElementById('n1').value
  var n2 = document.getElementById('n2').value
  var total = Number(n1) + Number(n2)
  return window.alert(`a soma entre ${n1} e ${n2} é = ${total}`)
}
// função de subtração
function sub(sub1, sub2){
  var n1 = document.getElementById('sub1').value
  var n2 = document.getElementById('sub2').value
  var total = Number(n1) - Number(n2)
  return window.alert(`a sutração entre ${n1} - ${n2} é = ${total}`)
}sub1
// função que multiplica
function multiply(n1, n2){
 var number1 = document.getElementById('n1').value
 var number2 = document.getElementById('n2').value
 var total = Number(n1) * Number(n2)
 return window.alert(`a multipicação é igual a ${total}`)
}