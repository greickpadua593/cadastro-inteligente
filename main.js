

let nome = document.getElementById("nome");
let email = document.getElementById("email")
let senha = document.getElementById("senha")


document.getElementById("botao").onclick = () => {

let nome1 = nome.value.trim()
let email1 = email.value.trim()
let senha1 = senha.value.trim()

if(nome1 == "" || email1 == "" || senha1 == ""){
    alert("Preencha o campo")
    return
}
if(!email1.includes("@")){
    alert("Informe um e-mail válido")
    return
}
if(senha1.length < 8){
    alert("A senha deve possuir pelo menos 8 digitos")
    document.getElementById("regraTamanho").innerText = "⛔ Pelo menos 8 caracteres";
    return
}
else{
    document.getElementById("regraTamanho").innerText = "✅ Pelo menos 8 caracteres";
}
let temMaiuscula = false;

for (let i = 0; i < senha.value.length; i++) {
    let caracter = senha.value[i];
   
    // Usa && para garantir que está entre "A" e "Z"
    if (caracter >= "A" && caracter <= "Z") {
        temMaiuscula = true;
        break; // Para o loop assim que achar uma maiúscula
    }
}

// Atualiza a tela fora do loop
if (temMaiuscula) {
    document.getElementById("regraMaiuscula").innerText = "✅ Pelo menos 1 letra maiuscula";
} else {
    document.getElementById("regraMaiuscula").innerText = "❌ Pelo menos 1 letra maiuscula";
}
 let temNumero = false;

for (let i = 0; i < senha.value.length; i++) {
    let numero = senha.value[i];
   
   
    if (numero>= 0 && numero <= 9) {
        temNumero = true;
        break; // Para o loop assim que achar uma maiúscula
    }
}

// Atualiza a tela fora do loop
if (temNumero) {
    document.getElementById("regraNumero").innerText = "✅ Pelo menos 1 numero";
} else {
    document.getElementById("regraNumero").innerText = "❌ Pelo menos 1 numero";
}

document.getElementById('mensagem').innerText= `🎉 Cadastro Realizado  
👤Nome: ${nome1}
📧E-mail: ${email1}
🔐 Senha: ${senha1}`
}
