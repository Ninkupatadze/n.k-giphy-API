var buttons =["Internet Cats","Meme's","Typing","Space","Rick and Morty"];

let btnsArray = document.getElementsByClassName("search-btn");
let contentArray = document.getElementById("animation");

console.log(contentArray);
function onClickTab(item){
    for(let i=0; i< btnsArray.length; i++){
        if(btnsArray[i] == item){
            btnsArray[i].classList.add("tab-active");  
           //contentArray.classList.add("content-active");
           var find = buttons[i];
           getGif(find);
           
        }else{ 
            btnsArray[i].classList.remove("tab-active");
            console.log(contentArray);
            if(contentArray.childElementCount !=0){
                while(contentArray.childElementCount != 0){
                    contentArray.removeChild(contentArray.childNodes[0]);
                }
            }
            

        }
        
    }
}
for (let i=0; i<btnsArray.length; i++){
    btnsArray[i].addEventListener('click',(event)=>{

        onClickTab(event.target);
        
    });
}

function getGif(find){
var url = "https://api.giphy.com/v1/gifs/search?";

var urlgif = `https://api.giphy.com/v1/gifs/search?q=${find}&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB`;
class Config{
    constructor(url){
        this.url = url;
    }
}
class Catalog extends Config{
    myclass(){
        async function arvici(urlgif){
            try{
                const request = await fetch (urlgif,{ method: 'GET'});
                const list = await request.json();
                console.log(list);
                const y = list.data;
                
                for(let i in y) {
                    const gif = document.createElement('img');
                    let gifUrl = y[i].images.original.url;
                    console.log(gifUrl);
                    gif.setAttribute('src' , gifUrl);
                    gif.setAttribute('width','200px');
                    gif.setAttribute('height','150px');
                    document.getElementById('animation').appendChild(gif);
                    
                };
    
            }
            catch(err){
                console.log(err);
    
            }
        }
        arvici(this.url);
    }

}
const newCatalog = new Catalog(urlgif);
newCatalog.myclass();
}
//arvici();