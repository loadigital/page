
let params = new URL(document.location).searchParams;
let e = params.get('e');


document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

const fetchData = async () => {
    try{
        const res = await fetch('js/db.json');
        const data = await res.json();
        list(data);
    }catch (error) {
        console.log(error);
    }
}

const list = data => {
 data.forEach(element => {
    
    console.log(element.link)
    if(e === element.id){
     document.querySelector(".container-title").innerHTML = `<h1>${element.title}</h1>`
     document.querySelector(".container-seccion-1").innerHTML = `
            <div class="flexrow-c col-12"><img class="img--" src="${element.img_seccion1}"></div>
            <div class="flexrow-c col-10"><p  class="text-p">${element.text_seccion1}</p></div>
     `

     document.querySelector(".container-seccion-2").innerHTML = `
             <div class="flexrow-c col-12"><h2>Ver Video</h2></div>
            <div class=" container-iframe flexrow-c col-10"><iframe src="${element.video}" frameborder=0 marginwidth=0 marginheight=0 scrolling=no width=720 height=460 allowfullscreen allow="autoplay" ></iframe></div>
            <div class="flexrow-c col-10"><p  class="text-p">${element.text_seccion2}</p></div>
     `

     document.querySelector(".container-seccion-3").innerHTML = `
             <div class="flexrow-c col-10"><img class="img--" src="${element.img_seccion3}"></div>
             <div class="flexrow-c col-10"><p class="text-p">${element.text_seccion3}</p></div>
     `
    }
     
})
}
