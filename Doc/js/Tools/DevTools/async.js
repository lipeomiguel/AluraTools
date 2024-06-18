async function buscarDados(){
    const time = await setTimeout(async ()=>{
        await console.log("Buscando dados")
    },5000)
    await console.log("Segundo de dados")
};
buscarDados()
