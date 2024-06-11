// ! Estamos importando os arquivos import.js;
// ? [ { Echo as PrintStream } a função foi renomeada para PrintStream com a função [ as ] ]
// import * as PrintStream from "./import.js"; TODO: estamos importando tudo do arquivo import.js e renomeando a função PrintStream;
import {Echo, numberRandom} from "./import.js";
const echoImport = new Echo("echo", 18, "hello");
const echoReturn = echoImport.getEcho();
console.log(echoReturn);