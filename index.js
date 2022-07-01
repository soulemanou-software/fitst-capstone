const ham = document.getElementById('ham');
const mobileNav = document.getElementById('hide')
ham.addEventListener('click', () => {
  mobileNav.style.left = '0';
 mobileNav.style.right = '0';
});

// const links =document.querySelectorAll('.navlink');
// links.forEach((link) => {
//   link.addEventListerner('click', () => {
//     div.classList.add('hide');
//     ham.classList.remove('hide');
//     document.querySelector('.box').classList.remove('blur');
//   })
// })

// This will listen for clicks on the X button
const closebtn = document.querySelector('.markx');
closebtn.addEventListener('click', () => {
 mobileNav.style.left = '-100vw';
 mobileNav.style.right = '100vw';
})
/* main program zone */
let data =[
  {
    image:'fa-solid fa-masks-theater',
    heading:'CC Exhuibition',
    paragraph:'Appreciate various creations applying CC license of artist, organised from Art Center Nabi.'
  },
  {
    image:'fa-solid fa-masks-theater',
    heading:"CC Exhuibition",
    paragraph:'Appreciate various creations applying CC license of artist, organised from Art Center Nabi.'
  },
  {
    image:'fa-solid fa-masks-theater',
    heading:"CC Exhuibition",
    paragraph:'Appreciate various creations applying CC license of artist, organised from Art Center Nabi.'
  },
  {
    image:'fa-solid fa-masks-theater',
    heading:'CC Exhuibition',
    paragraph:'Appreciate various creations applying CC license of artist, organised from Art Center Nabi.'
  },
];

function Cartdisplay() {
  for (let i = 0; i < data.length; i += 1) {
    const mainProContent = document.getElementsByClassName('box2ao');
    const cart = document.createElement("div");
    cart.classList.add('box2a');
    const divImg = document.createElement("div");
    divImg.classList.add('box2a-img');
    const iconImg = document.createElement("i");
    const cartattribute = "${data[i].image}";
    iconImg.classList(cartattribute);
    const cartHead = document.createElement("h2");
    cartHead.innerHTML=`${data[i].heading}`;
    const cartPara = document.createElement("p");
    cartPara.innerHTML = data[i].paragraph;

    /* Need to append all the element to it various parent */
    mainProContent.appendChild(cart);
    cart.appendChild(divImg);
    divImg.appendChild(iconImg);
    cart.appendChild(cartHead);
    cart.appendChild(cartPara);

  }
}
Cartdisplay(data);