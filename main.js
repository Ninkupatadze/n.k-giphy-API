var buttons =["Internet Cats","Meme's","Typing","Space","Rick and Morty"];
let btnsArray = document.getElementsByClassName("get-gif");
let searchBtns = document.getElementsByClassName("search-btn");
let contentArray = document.getElementById("animation");

function remove(){
    
            if(contentArray.childElementCount !=0){
                while(contentArray.childElementCount != 0){
                    contentArray.removeChild(contentArray.childNodes[0]);
                 }
            }
}

function onClickTab(btn){
    for(let i=0; i< btnsArray.length; i++){
        if(btnsArray[i] == btn){
           var find = buttons[i];
           getGif(find);
           
        }else{ 
            remove();
        }
        
    }
}

function seeTrending(){
    getTrending();
    remove();
}
function btnList(){
    for (let i=0; i<btnsArray.length; i++){
        btnsArray[i].addEventListener('click',(event)=>{
            onClickTab(event.target);
        });
    }
}
btnList();
function deleteBtn(){
    document.getElementById("searchButtons").innerHTML = "";
   

}

function deleteFirst(){
    let allBtns = document.getElementById("searchButtons");
    allBtns.removeChild(allBtns.childNodes[0]);
    allBtns.removeChild(allBtns.childNodes[1]);
    btnList();
}

function nojs(){
    let x = document.getElementById("searchButtons").lastChild;
    x.addEventListener("click", (item)=>{
       getGif(item.target.innerHTML);
       onClickTab(searchBtns);
    });
   
}

function onClickSubmit(){
    
    deleteFirst();
    let setBtn = document.createElement('button');
    let text = document.getElementById('searchText').value;
    let newBtn = document.createElement("text");
    setBtn.appendChild(newBtn);
    
    if(text != ""){
        if(btnList.length > 5){
            btnList.shift();    
        }
        setBtn.classList.add("search-btn");
        setBtn.classList.add("btn");      
        setBtn.innerHTML=text;
        document.getElementById("searchButtons").appendChild(setBtn);
        document.getElementById("searchText").value="";
        
    }else{
        alert("firstly type text!");

    }

    btnList();
    nojs();
}
 

function getTrending()  {
    let trendingUrl = `https://api.giphy.com/v1/gifs/trending?&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&limit=12`;
    const seeTrend = new Catalog(trendingUrl);
    seeTrend.showGifs();
}

function getGif(find){        
    var urlgif = `https://api.giphy.com/v1/gifs/search?q=${find}&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&limit=12`;
    const newCatalog = new Catalog(urlgif);
    newCatalog.showGifs();
}

class Config{
    constructor(url){
        this.url = url;
    }
}
class Catalog extends Config{
    showGifs(){
        async function seeGifs(urlgif){
            try{
                const request = await fetch (urlgif,{ method: 'GET'});
                const list = await request.json();
                 const y = list.data;
                for(let i in y) {
                    const gifStructure = document.createElement('div');
                    const gif = document.createElement('img');
                    const giftext = document.createElement('div');
                    let gifUrl = y[i].images.original.url;                   
                    gif.setAttribute('src' , gifUrl);
                    gifStructure.classList.add("newGifStyles");
                    gif.classList.add("onlyGifStyles");
                    giftext.classList.add("giftext");
                    giftext.innerHTML = "rating: g";
                    gifStructure.appendChild(gif);
                    gifStructure.appendChild(giftext);
                    document.getElementById('animation').appendChild(gifStructure);
                    
                };
    
            }
            catch(err){
                console.log(err);
    
            }
        }
        seeGifs(this.url);
    }

}



