let allMainData = [
    {id:1,img:"../images/11.jpg",name:"iPhone 11",price:"$450"},
    {id:2,img:"../images/11 pro.jpg",name:"iPhone 11 pro",price:"$550"},
    {id:3,img:"../images/12.jpg",name:"iPhone 12",price:"$650"},
    {id:4,img:"../images/12 pro.jpg",name:"iPhone 12 pro",price:"$700"},
    {id:5,img:"../images/13 pro max.jpg",name:"iPhone 13 pro and pro max",price:"$750"},
    {id:6,img:"../images/14.jpg",name:"iPhone 14",price:"$800"},
    {id:7,img:"../images/14 pro max.jpg",name:"iPhone 14 pro and pro max",price:"$950"},
    {id:8,img:"../images/15.jpg",name:"iPhone 15",price:"$1000"},
    {id:9,img:"../images/ipad.jpg",name:"ipad",price:"$558"},
    {id:10,img:"../images/ipad air 4.jpg",name:"ipad Air 4",price:"$658"},
    {id:11,img:"../images/ipad minii.jpeg",name:"ipad Mini",price:"$358"},
    {id:12,img:"../images/ipad pro.jpg",name:"ipad Pro",price:"$758"},
    {id:13,img:"../images/macbook-air-2017.jpeg",name:"macbook air 2017",price:"$1900"},
    {id:14,img:"../images/macbook-air-midnight-select-20220606.jpeg",name:"macbook Air Midnight",price:"$1800"},
    {id:15,img:"../images/macbookair_2021.png",name:"macbook air 2021",price:"$2100"},
    {id:16,img:"../images/mbp16-spaceblack-select-202310.jpeg",name:"macbook Pro 16",price:"$2900"},
    {id:17,img:"../images/hermes.jpg",name:"watsh Hermes",price:"$700"},
    {id:18,img:"../images/nike.jpg",name:"watsh Nike",price:"$750"},
    {id:19,img:"../images/ultra 2.jpg",name:"watsh Ultra 2",price:"$780"},
    {id:20,img:"../images/watsh series 9.jpg",name:"watsh Series 9",price:"$790"},
    {id:21,img:"../images/se.jpg",name:"watsh SE",price:"$890"},
]
let allDataMapped = allMainData.map(el => el);
let iphoneData = [
    {id:1,img:"../images/11.jpg",name:"iPhone 11",price:"$450"},
    {id:2,img:"../images/11 pro.jpg",name:"iPhone 11 pro",price:"$550"},
    {id:3,img:"../images/12.jpg",name:"iPhone 12",price:"$650"},
    {id:4,img:"../images/12 pro.jpg",name:"iPhone 12 pro",price:"$700"},
    {id:5,img:"../images/13 pro max.jpg",name:"iPhone 13 pro and pro max",price:"$750"},
    {id:6,img:"../images/14.jpg",name:"iPhone 14",price:"$800"},
    {id:7,img:"../images/14 pro max.jpg",name:"iPhone 14 pro and pro max",price:"$950"},
    {id:8,img:"../images/15.jpg",name:"iPhone 15",price:"$1000"},
];
let iphonecard = document.querySelector(".iphoneSection");
let iphoneDataMapped = iphoneData.map(it => {
    return`
    <div class="card">
    <div id="card-img"><img src="${it.img}" alt="Product Image"></div>
    <div class="card-content">
        <div class="card-title">${it.name}</div>
        <div class="card-info">a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface</div>
        <div class="card-price">${it.price}</div>
        <button key="${it.id}" class="add-to-cart-btn">Ajout au panier</button>
    </div>
    </div>
    `;
});
iphonecard.insertAdjacentHTML('afterbegin', iphoneDataMapped.join(''));

let ipadData = [
    {id:9,img:"../images/ipad.jpg",name:"ipad",price:"$558"},
    {id:10,img:"../images/ipad air 4.jpg",name:"ipad Air 4",price:"$658"},
    {id:11,img:"../images/ipad minii.jpeg",name:"ipad Mini",price:"$358"},
    {id:12,img:"../images/ipad pro.jpg",name:"ipad Pro",price:"$758"},
];
let ipadCard = document.querySelector(".ipadSection");
let ipadDataMapped = ipadData.map(it => {
    return`
    <div class="card">
    <div id="card-img"><img src="${it.img}" alt="Product Image"></div>
    <div class="card-content">
        <div class="card-title">${it.name}</div>
        <div class="card-info">The iPad is a touchscreen tablet PC made by Apple</div>
        <div class="card-price">${it.price}</div>
        <button key="${it.id}" class="add-to-cart-btn">Ajout au panier</button>
    </div>
    </div>
    `;
});
ipadCard.insertAdjacentHTML('afterbegin',ipadDataMapped.join(''));

let macData = [
    {id:13,img:"../images/macbook-air-2017.jpeg",name:"macbook air 2017",price:"$1900"},
    {id:14,img:"../images/macbook-air-midnight-select-20220606.jpeg",name:"macbook Air Midnight",price:"$1800"},
    {id:15,img:"../images/macbookair_2021.png",name:"macbook air 2021",price:"$2100"},
    {id:16,img:"../images/mbp16-spaceblack-select-202310.jpeg",name:"macbook Pro 16",price:"$2900"},
];
let macCard = document.querySelector(".macSection");
let macDataMapped = macData.map(it => {
    return`
    <div class="card">
    <div id="card-img"><img src="${it.img}" alt="Product Image"></div>
    <div class="card-content">
        <div class="card-title">${it.name}</div>
        <div class="card-info">a brand of Macintosh laptop computers designed by Apple</div>
        <div class="card-price">${it.price}</div>
        <button key="${it.id}" class="add-to-cart-btn">Ajout au panier</button>
    </div>
    </div>
    `;
});
macCard.insertAdjacentHTML('afterbegin',macDataMapped.join(''));
let watshData = [
    {id:17,img:"../images/hermes.jpg",name:"watsh Hermes",price:"$700"},
    {id:18,img:"../images/nike.jpg",name:"watsh Nike",price:"$750"},
    {id:19,img:"../images/ultra 2.jpg",name:"watsh Ultra 2",price:"$780"},
    {id:20,img:"../images/watsh series 9.jpg",name:"watsh Series 9",price:"$790"},
    {id:21,img:"../images/se.jpg",name:"watsh SE",price:"$890"},
];
let watshCard = document.querySelector(".wathshSection");
let watshDataMapped = watshData.map(it => {
    return`
    <div class="card">
    <div id="card-img"><img src="${it.img}" alt="Product Image"></div>
    <div class="card-content">
        <div class="card-title">${it.name}</div>
        <div class="card-info">ultimate device for a healthy life</div>
        <div class="card-price">${it.price}</div>
        <button key="${it.id}" class="add-to-cart-btn" >Ajout au panier</button>
    </div>
    </div>
    `;
});
watshCard.insertAdjacentHTML('afterbegin',watshDataMapped.join(''));
let addBtn = document.querySelectorAll(".add-to-cart-btn");
let allData = [];
for(let i=0; i<addBtn.length;i++){
    addBtn[i].addEventListener("click",function(){
       
        let keyGetted = addBtn[i].getAttribute("key")
        
        let dataSendedToLocal = allDataMapped.filter(el=>el.id == keyGetted )[0]
        
      allData = [...allData, dataSendedToLocal]
     let myTable = JSON.stringify(allData)
      localStorage.setItem("dataSaved", myTable)
     
    })
}