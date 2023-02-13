    getData();

    function getData(){
        let data = new Array();
        fetch('https://server-eight-sable.vercel.app/api/v1/promos',{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
            },
        })
        .then(response => response.json())
        .then(response => {
            console.log(data);
            data = response;
            addElement(data);
        }).catch()
    }
    function addElement(items){
    console.log(items);
        console.log("first");
        for(let i=0;i<items.length; i++){
            let artElem = document.createElement("article");
            let divElem = document.createElement("div");
            let divElem2 = document.createElement("div");
            let h3Elem = document.createElement("h3");
            let pElem = document.createElement("p");
            let img1 = document.createElement("img");
            divElem.setAttribute("class","container1");
            divElem2.setAttribute("class","details1");
            artElem.setAttribute("class","card1");
            divElem2.appendChild(h3Elem);
            divElem2.appendChild(pElem);
            h3Elem.innerText = items[i].name;
            pElem.innerText = items[i].description;
            img1.setAttribute("src", items[i].path);
            img1.setAttribute("alt",items[i].path);
            img1.className = "hha"
            console.log(img1)
            divElem.appendChild(img1);
            divElem.appendChild(divElem2);
            artElem.appendChild(divElem);
            document.getElementById("cu").appendChild(artElem);

        }
    }