let card = document.querySelector(".card")
let opening = document.querySelector('.opening')
let cardback = document.querySelector(".openingCardBack")
card.addEventListener("click", f)

function f() {
  cardback.style.display = "block"
  opening.style.display = "block"
}

cardback.addEventListener("click", close)

function close() {
  cardback.style.display = "none"
  opening.style.display = "none"
}




// -------------------------------------fetch---------------------------------------------


url = 'https://randomuser.me/api/?gender=female&results=10';


fetch('https://randomuser.me/api/?gender=female&results=10')
  .then((response) => { return response.json(); })
  .then(data => {
    let runners = data.results;
    return runners.map(runner => {
      let img = document.querySelector('.myimg')
      img.src = runner.picture.medium;
      let name = document.querySelector('.name')
      name.innerHTML = runner.name.first + ' ' + runner.name.last
      append(img, name);

      opening.innerHTML = card.innerHTML

    });
  })
  .catch(error => { console.log(error); })

