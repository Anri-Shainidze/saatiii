



const saati = [
  {
    className: "days",
    label: "Days",
  },
  {
    className: "hours",
    label: "Hours",
  },
  {
    className: "minutes",
    label: "Minutes",
  },
  {
    className: "seconds",
    label: "Seconds",
  },
];





const countdownContainer = document.querySelector(".countdown");
const countToDate = new Date().setHours(new Date().getHours() + 240);
let previous;

function showTimer() {
  saati.forEach(
    (element) => {
      const div222 = document.createElement("div");
      div222.classList.add(element.className);
      div222.innerHTML = `
      <div class="flip-card">
        <div class="top">00</div>
        <div class="bottom">00</div>
      </div>
      <p class="title">${element.label}</p>
    `;

      countdownContainer.append(div222);
    }
  );
}

showTimer();
setInterval(() => {
  const currentDate = new Date();
  const ragac = Math.floor((countToDate - currentDate) / 1000);
  if (ragac !== previous) {
    flipAllCards(ragac);
  }
  previous = ragac;
}, 250);

function flipAllCards(time) {
  const hours = Math.floor(
    (time / 3600) % 24
  );
  const days = Math.floor(
    time / (24 * 3600)
  );
  const minutes = Math.floor(
    (time / 60) % 60)
    ;
  const seconds = Math.floor(
    time % 60
  );

  const day1 = document.querySelector(".days > .flip-card");
  const hour1 = document.querySelector(".hours > .flip-card");
  const minute1 = document.querySelector(".minutes > .flip-card");
  const second1 = document.querySelector(".seconds > .flip-card");

  flipCard(day1, days);
  flipCard(hour1, hours);
  flipCard(minute1, minutes);
  flipCard(second1, seconds);
}

function flipCard(flipCard, time) {
  time = String(time).padStart(2, "0");
  const currentValue = flipCard.querySelector(".top").innerText;

  if (
    time == currentValue
  ) return;

  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  topFlip.innerText = currentValue;

  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");
  bottomFlip.innerText = time;

  const topHalf = flipCard.querySelector(".top");
  const bottomHalf = flipCard.querySelector(".bottom");

  topFlip.addEventListener("animationstart", () => {
    topHalf.innerText = time;
  });

  topFlip.addEventListener("animationend", () => {
    topFlip.remove();
  });

  bottomFlip.addEventListener("animationend", () => {
    bottomHalf.innerText = time;
    bottomFlip.remove();
  });

  flipCard.appendChild(topFlip);
  flipCard.appendChild(bottomFlip);
}
