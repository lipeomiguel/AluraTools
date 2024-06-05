const pessoa = {
  nome: "Felipe",
  canal: "CFB Cursos",
  aulas: {
    javascript: {
      nome: "Javascript",
      video: 100,
      aulas: 100
    },
    python: {
      nome: "Python",
      video: 100,
      aulas: 100
    }
  }
};
const pessoa_json = JSON.parse(`{"javascript":{"nome":"Javascript","video":100,"aulas":100},"python":{"nome":"Python","video":100,"aulas":100}}`);
console.log(JSON.stringify(pessoa));
console.log(JSON.stringify(pessoa_json));