/*
* User ID
* Numero
* Ende
*/

function getUser(callback){
    setTimeout(function(){

        return callback(null, {
            id: 1,
            nome: usuario,
            dataNascimento: new Date()
        }

    }, 1000);

}
function getFone(idUsuario,callback){
    setTimeout(() =>{
        return{
            telefone:'981156819',
            ddd:'81'
        }
    },2000);

}
function getEnd(idUsuario){

}
function resolverUsuario(erro, usuario){
    console.log('usuario ', usuario);
}
obterUsuario(function resolverUsuario(erro, usuario){
    //null || "" || 0 === false
    if(error){
        console,erro('DEU RUIM em USUARIO', error)
        return;
    }
        obeterTelefone(usuario.id, function resolverTelefone(erro1, telefone){
            if(error1){
                console.log('Deu riom mano, deu ruim no telefone', error1)
                return;
            }
        }
}

const usuario = getUser();
const telefone = getFone();


console.log('telefone', telefone);