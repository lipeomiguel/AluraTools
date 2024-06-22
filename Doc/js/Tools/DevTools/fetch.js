const endpoint =  "https://api.thecatapi.com/v1/images/search?limit=10";
fetch(endpoint).then((response)=>{
    console.log(response.text().then((txt)=>{
        const textJSon = JSON.parse(txt);
        console.log(textJSon);
        console.log(textJSon[0].id);
    }));
})