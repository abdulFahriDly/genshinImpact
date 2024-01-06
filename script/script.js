const characters = [
    {
        nama:"Barbara",
        img:"Barbara.jpg",
        description:"",
        sound:"",
        element:"hydro"
    },
    {
        nama:"Chongyun",
        img:"Chongyun.jpg",
        description:"",
        sound:"",
        element:"cyro"
    },
    {
        nama:"Hu Tao",
        img:"Hu-Tao.png",
        description:"",
        sound:"",
        element:"pyro"
    },
    {
        nama:"Kamisato Ayato",
        img:"Kamisato-Ayato.png",
        description:"",
        sound:"",
        element:"hydro"
    },
    {
        nama:"Kazuha",
        img:"Kazuha.jpg",
        description:"",
        sound:"",
        element:"anemo"
    },
    {
        nama:"Keqing",
        img:"Keqing.jpg",
        description:"",
        sound:"",
        element:"electro"
    },
    {
        nama:"Layla",
        img:"Layla.png",
        description:"",
        sound:"",
        element:"cyro"
    },
    {
        nama:"Raiden Shogun",
        img:"Raiden-Shogun.png",
        description:"",
        sound:"",
        element:"electro"
    },
    {
        nama:"Shenhe",
        img:"Shenhe.jpg",
        description:"",
        sound:"",
        element:"cyro"
    },
    {
        nama:"Sucrose",
        img:"Sucrose.jpg",
        description:"",
        sound:"",
        element:"anemo"
    },
    {
        nama:"Tighnari",
        img:"Tighnari.png",
        description:"",
        sound:"",
        element:"dendro"
    },
    {
        nama:"Xiao",
        img:"Xiao.png",
        description:"",
        sound:"",
        element:"anemo"
    },
    {
        nama:"Yae Miko",
        img:"Yae-Miko.jpg",
        description:"",
        sound:"",
        element:"electro"
    },
    {
        nama:"Zhongli",
        img:"Zhongli.png",
        description:"",
        sound:"",
        element:"geo"
    },
    {
        nama:"Albedo",
        img:"Albedo.png",
        description:"",
        sound:"",
        element:"geo"
    },
    {
        nama:"Arataki Itto",
        img:"Arataki-itto.png",
        description:"",
        sound:"",
        element:"geo"
    },
    {
        nama:"Dainsleif",
        img:"Dainsleif.jpg",
        description:"",
        sound:"",
        element:"cyro"
    },
    {
        nama:"Mona",
        img:"Mona.jpg",
        description:"",
        sound:"",
        element:"hydro"
    },
    {
        nama:"Ganyu",
        img:"Ganyu.png",
        description:"",
        sound:"",
        element:"cyro"
    },
    {
        nama:"Faruzan",
        img:"Faruzan.png",
        description:"",
        sound:"",
        element:"anemo"
    },
    {
        nama:"Diluc",
        img:"Diluc.jpg",
        description:"",
        sound:"",
        element:"pyro"
    },
    {
        nama:"Yoimiya",
        img:"Yoimiya.png",
        description:"",
        sound:"",
        element:"pyro"
    },
    {
        nama:"Beidou",
        img:"Beidou.png",
        description:"",
        sound:"",
        element:"electro"
    },
    {
        nama:"Kujou Sara",
        img:"Kujou-Sara.jpg",
        description:"",
        sound:"",
        element:"electro"
    },
    {
        nama:"Venti",
        img:"Venti.jpg",
        description:"",
        sound:"",
        element:"anemo"
    },
    {
        nama:"Yelan",
        img:"Yelan.jpg",
        description:"",
        sound:"",
        element:"hydro"
    },
];

const cards = document.querySelector("main #characters #cards");
const element = document.querySelectorAll("main #characters #elements .element")

let pk = 0;

for(let i = 0; i < characters.length; i++){
    // nama[1].style.opacity = 0
    
    let card = document.createElement("div")
    card.setAttribute("class", "card-character")
    card.innerHTML = `<figure><img src="img/${characters[i].img}" alt=""></figure><figcaption>${characters[i].nama}</figcaption>`
    cards.appendChild(card);
    
    const kartu = document.querySelectorAll(".card-character")
    
    kartu[i].addEventListener("click", ()=>{
        // alert(characters[i].nama)
        const play = document.getElementById("play")
        // play.setAttribute("loop")
        play.play()
    })
    

    element[0].addEventListener("click",()=>{
        // card.remove()
        // up()
        card.style.display = "block"

    })

    element[1].addEventListener("click",()=>{
        // card.remove()
        if(characters[i].element !== "anemo"){
            // up();
            card.style.display = "none"
        }else{
            card.style.display = "block"
        }

    })

    element[2].addEventListener("click",()=>{
        // card.remove()
        if(characters[i].element !== "cyro"){
            // up();
            card.style.display = "none"
        }else{
            card.style.display = "block"

        }

    })

    element[3].addEventListener("click",()=>{
        // card.remove()
        if(characters[i].element !== "dendro"){
            // up();
            card.style.display = "none"
        }else{
            card.style.display = "block"

        }

    })

    element[4].addEventListener("click",()=>{
        // card.remove()
        if(characters[i].element !== "electro"){
            // up();
            card.style.display = "none"
        }else{
            card.style.display = "block"

        }

    })

    element[5].addEventListener("click",()=>{
        // card.remove()
        if(characters[i].element !== "geo"){
            // up();
            card.style.display = "none"
        }else{
            card.style.display = "block"

        }

    })

    element[6].addEventListener("click",()=>{
        // card.remove()
        if(characters[i].element !== "hydro"){
            // up();
            card.style.display = "none"
        }else{
            card.style.display = "block"

        }

    })
    
    element[7].addEventListener("click",()=>{
        // card.remove()
        if(characters[i].element !== "pyro"){
            // up();
            card.style.display = "none"
        }else{
            card.style.display = "block"

        }

    })

}

const menu = document.querySelector("header nav #menu")
const ul = document.querySelector("header nav ul")
const download = document.querySelector("header nav #download")

menu.addEventListener("click", ()=>{
    ul.classList.toggle("ul")
    download.classList.toggle("download")
    if(window.screenTop() >= 0){
        ul.classList.remove("ul")
    }

})


