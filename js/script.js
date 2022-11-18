
// card links from api

let getOurServicesCard = document.querySelector(".OurServices__cards")
console.log(getOurServicesCard)
let API_URL =
  "https://fakerapi.it/api/v1/images?_quantity=6&_type=kittens&_height=300"

async function getRendomServices() {
  let Object = await fetch(API_URL)
  let json = await Object.json()

  json.data.forEach((placekitten) => {
    let cardsElement = document.createElement("div")
    cardsElement.classList.add("OurServices__cards")
    cardsElement.innerHTML =
     `
    <div class="OurServices__cards">
    <div class="container OurServicesCard">
        <div class="card" style="width: 100%;>
            <img src="${placekitten.url}" class="card-img-top" alt="img not found">
            <div class="card-body">
                <h5 class="card-title">${placekitten.title}</h5>
                <p class="card-text">
                    ${placekitten.description}
                </p>

            </div>
        </div>
    </div>
    </div>
    `
    getOurServicesCard.appendChild(cardsElement)
  })
}
getRendomServices()


// card links from api








// this is burger menu
let HearedBurger = document.querySelector('.heared__burger');
let HearedMenu = document.querySelector('.header__menu');
let Body = document.querySelector('body');

HearedBurger.addEventListener('click', function () {
    HearedBurger.classList.toggle('active');
    HearedMenu.classList.toggle('active');
    Body.classList.toggle('lock');
});
// end of burger menu


// this is carousel

let allcarouselItems = document.querySelectorAll(".carousel__item")
let nextBtn = document.querySelector(".arrowRight")
let prewBtn = document.querySelector(".arrowLeft")
let autoPlayValue = document.querySelector(".section__carousel").getAttribute("data-autoPlay")

nextBtn.addEventListener("click", function () {
    let activeItem = document.querySelector(".carousel__item.active")

    if (activeItem.nextElementSibling != null) {
        activeItem.classList.remove("active")
        activeItem.nextElementSibling.classList.add("active")
    }
    else {
        activeItem.classList.remove("active")
        allcarouselItems[0].classList.add("active")
    }
})

prewBtn.addEventListener("click", function () {
    let activeItem = document.querySelector(".carousel__item.active")

    if (activeItem.previousElementSibling != null) {
        activeItem.classList.remove("active")
        activeItem.previousElementSibling.classList.add("active")

    }
    else {
        activeItem.classList.remove("active")
        allcarouselItems[allcarouselItems.length - 1].classList.add("active")
    }
})

if (autoPlayValue != "false") {
    setInterval(() => {
        let activeItem = document.querySelector(".carousel__item.active")

        if (activeItem.nextElementSibling != null) {
            activeItem.classList.remove("active")
            activeItem.nextElementSibling.classList.add("active")
        }
        else {
            activeItem.classList.remove("active")
            allcarouselItems[0].classList.add("active")
        }
    }, Number(3000));
}
// end of carousel

// this is our hot services cards
let ServicesCardDiv = document.querySelector('.Services__cards')

let Services = [
    { header: "FLIGHT BOOKING", title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.", image: "../img/ServicesCards/Card1.png" },
    { header: "HOTEL & RESORT BOOKING", title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.", image: "../img/ServicesCards/Card2.png" },
    { header: "FAMILY TRIP PLANNER", title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.", image: "../img/ServicesCards/Card3.png" },
    { header: "CRUISE TOUR", title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.", image: "../img/ServicesCards/Card4.png" },
    { header: "FIRE CAMP", title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.", image: "../img/ServicesCards/Card5.png" },
    { header: "CORPORATE HOLIDAYS", title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.", image: "../img/ServicesCards/Card6.png" }
];

Services.forEach(DisplayServicesinHtml)

function DisplayServicesinHtml(Services) {
    ServicesCardDiv.innerHTML +=

        `
 <div class="card col-md-3 border-0 h-50" style="width: 32%;" >

  <img  class="h-50" style="cursor:pointer;" src="${Services.image}">
  <div class="card-body text-start ps-0">
    <h6 class="header">${Services.header}</h6>
    
    <p class="title text-muted">${Services.title}</p>
  </div>
</div>

`
}

// position fixed

const zoomBox = document.querySelector(".position-fixed")

const closeZoomBox = document.querySelector(".close-zoom")



ServicesCardDiv.addEventListener("click", function (e) {
  if (e.target.tagName == "IMG") {
    zoomBox.classList.add("open-zoom")
    document.querySelector(".zoom_img").src = e.target.src
  }
})

closeZoomBox.addEventListener("click", function () {
  zoomBox.classList.remove("open-zoom")
})


// end of our hot services cards

