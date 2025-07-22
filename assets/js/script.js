let box = document.getElementById("box-container");

// chiamata ajax per avere array di oggetti
axios.get("https://lanciweb.github.io/demo/api/pictures/").then((resp) => {
  const cards = resp.data;
  // definisco variabile che contiene tutti i box da iniettare in pagina
  let postCards = "";
  // ciclo array e sostituisco le info con le chiavi
  for (let i = 0; i < cards.length; i++) {
    // destructuring dell'array cards
    const postCard = cards[i];
    const { title, date, url } = postCard;

    postCards += `<div class="col-12 col-md-6 col-lg-4">
              <div class="box p-3 bg-light position-relative pointer">
                <img id="image" class="img-fluid" src="${url}" alt="" />
                <img id="pin" src="./img/pin.svg" alt="pin">
                <div id="info" class="box-info text-center">
                  <p class='fs-1'> ${title}</p>
                  <p class='date'>${date}</p>
                </div>
              </div>
            </div>`;
    box.innerHTML = postCards;
  }
  // richiamo tutti gli elementi del dom
  const boxes = document.querySelectorAll(".box");
  const overlay = document.getElementById("overlay");
  // ciclo gli elementi e assegno event Listener che faccia ricomparire l'verlay al click di ogni box
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
      overlay.classList.remove("d-none");
    });
  }
  // richiamo il button per creare eventListener e chudere l'overlay
  const button = document.getElementById('button')
  button.addEventListener('click',()=>{
    overlay.classList.add("d-none");
    
  })
});
