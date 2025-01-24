const CryptoJS = require("crypto-js");

const mensaorigi = "Minha mensagem secreta!";
const senha = "Assiaht#SI"; 
if (!senha) {
  console.error("Erro: A senha não pode estar vazia!");
  process.exit(1); 
}

const chavepri = CryptoJS.SHA256(senha).toString();
console.log("Chave Gerada (SHA-256):", chavepri);

const textocrip = CryptoJS.AES.encrypt(mensaorigi, chavepri).toString();
console.log("Texto Criptografado:", textocrip);

const bytes = CryptoJS.AES.decrypt(textocrip, chavepri);
const mensadescri = bytes.toString(CryptoJS.enc.Utf8);
console.log("Mensagem Descriptografada:", mensadescri);

if (mensaorigi === mensadescri) {
  console.log("A mensagem foi descriptografada com sucesso!");
} else {
  console.log("Falha na descriptografia!");
}
