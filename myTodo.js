axios.get("https://api.vschool.io/shamikasims/todo/")
    .then(response =>{
        console.log(response)
        house(response.data)
    } 
    

    )
    .catch(error => console.log(error))
    function house(data) {
       document.body.innerHTML="<ul>"+ data.map(value=>`<li>name: ${value.title}</li>`)+ "</ul>" 
    }
