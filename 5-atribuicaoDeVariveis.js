console.log("Trabalhando com atribuição de variáveis");

const primeiroNome = "Luisa";
//Usando let, a variável pode ser reescrita e/ou sobrescrita sem problemas. Evitar em casos desnecessários
const sobrenome = "Montenegro";

console.log(primeiroNome + sobrenome);
//Para separar o nome do sobrenome, usar vírgula ou + " " +
console.log(primeiroNome + " " + sobrenome);

console.log(`Meu nome é ${primeiroNome}`);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

let contador = 0;
contador = contador + 1;
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade;
idade = 26;
idade = 26 + 1;
console.log(idade);