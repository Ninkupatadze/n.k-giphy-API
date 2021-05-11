var buttons =["Internet Cats","Meme's","Typing","Space","Rick and Morty"];
let btnsArray = document.getElementsByClassName("get-gif");
let contentArray = document.getElementById("animation");

console.log(contentArray);
function onClickTab(item){
    for(let i=0; i< btnsArray.length; i++){
        if(btnsArray[i] == item){
            
           var find = buttons[i];
           getGif(find);
           
        }else{ 
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
const styles = {
    width: '300px',
    height: '200px',
    overflow: 'hidden'
};


function getGif(find){
            
    //var trend = "See what's trending";
    var url = "https://api.giphy.com/v1/gifs/search?";
    var urlgif = `https://api.giphy.com/v1/gifs/search?q=${find}&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&limit=10`;
    //let trengingUrl = `https://api.giphy.com/v1/gifs/trending?q=${trend}&limit=15&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB`;
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
                    console.log(list);
                    const y = list.data;
                    
                    for(let i in y) {
                        const gif = document.createElement('img');
                        let gifUrl = y[i].images.original.url;
                        console.log(gifUrl);
                        gif.setAttribute('src' , gifUrl);
                        gif.classList.add("newGifStyles");
                        document.getElementById('animation').appendChild(gif);
                        
                    };
        
                }
                catch(err){
                    console.log(err);
        
                }
            }
            seeGifs(this.url);
        }

    }
    const newCatalog = new Catalog(urlgif);
    newCatalog.showGifs();
}
