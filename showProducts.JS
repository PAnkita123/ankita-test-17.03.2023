window.onload = function () {

    var product = JSON.parse(localStorage.getItem("product"));

    var divFromHtml = document.getElementById("screen");

    var array = [];

    for (var i = 0; i < product.length; i++) {
        array += `<div><img src="${product[i].image}" alt='proImage' /><br/><h3>${product[i].name}</h3><br/><p>${product[i].price}</p><button onclick='addToCart(${JSON.stringify(product[i])})'>Add to cart</button></div>`
    }
    divFromHtml.innerHTML = array;
}


function addToCart(pro){
    var product = JSON.stringify(pro);
    var dataFromLS=JSON.parse(localStorage.getItem("userData"));
    var currentUser=JSON.parse(localStorage.getItem("currentUser"));
    if(currentUser){
        var allUsers=[];
        for(var i=0;i<dataFromLS.length;i++){
            if(dataFromLS[i].email===currentUser["current-user-email"]){
                var newObj=dataFromLS[i];
                newObj["cartProducts2"]=newObj["cartProducts2"] || [];
                newObj["cartProducts2"].push(JSON.parse(product));
                allUsers.push(newObj)
            } else{
                allUsers.push(dataFromLS[i])
            }


        }
        localStorage.setItem("userData", JSON.stringify(allUsers));
        alert("Product added to cart!")
    }else{
        alert("login first to add product into cart!")
    }
}