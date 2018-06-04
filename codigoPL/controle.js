/*Aluno : Joao Henrique */

/*ENVIAR */
function inputMensagem() {
    let usuario = document.getElementById("id");
    let senha = document.getElementById("senha");
    let author = document.getElementById("autor");
    let title = document.getElementById("titulo");
    let texto = document.getElementById("mensagem");
   
    let campo = {
        "title" : title.value,
        "msg" : texto.value,
        "author" :author.value,
        "credentials" : usuario.value + ":" + senha.value
    };
    enviar(campo);
    usuario.value = "";
    senha.value = "";
    author.value = "";
    title.value = "";
    texto.value = "";
}
function enviar(msg) {
    fetch('http://150.165.85.16:9900/api/msgs', {
        method:'POST',
        body :JSON.stringify(msg)
    })
}
/*DELETAR */
function inputDeletar() {
    let usuario = document.getElementById("id");
    let senha = document.getElementById("senha");
    let idMensagem = document.getElementById("id_msg");
    let user = {
        credentials : usuario.value + ":" + senha.value
    };
    deletar(user,idMensagem.value);
    usuario.value = "";
    senha.value = "";
    idMensagem.value = "";
}
function deletar(credentials,idMensagem){
    fetch('http://150.165.85.16:9900/api/msgs/' + idMensagem, {
        method :'delete',
        body : JSON.stringify(credentials)
    })
}
/*Filtrar*/
function inputImprimir() {
    let user = document.getElementById("filtro").value;
    if(user == '') {
        alert("Frontend vazio");
    }
    imprimir(user);
}
function imprimir(user) {
    fetch('http://150.165.85.16:9900/api/msgs/')
    .then(response => response.json())
    .then(response => response.filter(usuario => usuario.frontend == user))
    .then(usuario => console.log(usuario))
}
