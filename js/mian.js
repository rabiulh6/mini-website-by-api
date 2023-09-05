fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(resData => pushData(resData))

const pushData = (allData) => {
    const containerDiv = document.getElementById("data-container");
    
    console.log(containerDiv)
    allData.forEach(element => {
        console.log("ID ", element)      

      const addChild = `
            <p> ${element.id} </p>
            <h2> ${element.title} </h2>
            <p> ${element.body} </p>
            <p> User ID </p>
        `
        containerDiv.innerHTML = addChild;


    });
}