const showBtn = document.getElementById("showBtn");
const garden = document.getElementById("garden");

showBtn.addEventListener("click", () => {
  garden.innerHTML = ""; // reset

  const totalFlowers = 20; // banyak bunga (bisa diubah)
  for (let i = 0; i < totalFlowers; i++) {
    const sunflower = document.createElement("div");
    sunflower.classList.add("sunflower");
    sunflower.style.animationDelay = `${i * 0.2}s`;

    // batang
    const stem = document.createElement("div");
    stem.classList.add("stem");

    // daun
    const leafLeft = document.createElement("div");
    leafLeft.classList.add("leaf", "left");
    const leafRight = document.createElement("div");
    leafRight.classList.add("leaf", "right");
    stem.appendChild(leafLeft);
    stem.appendChild(leafRight);

    // bunga
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.animationDelay = `${i * 0.2 + 0.5}s`;

    // kelopak banyak (12 kelopak)
    for (let j = 0; j < 12; j++) {
      const petal = document.createElement("div");
      petal.classList.add("petal");
      petal.style.transform = `rotate(${j * 30}deg) translate(-50%, -50%)`;
      flower.appendChild(petal);
    }

    // tengah bunga
    const center = document.createElement("div");
    center.classList.add("center");
    flower.appendChild(center);

    sunflower.appendChild(stem);
    sunflower.appendChild(flower);
    garden.appendChild(sunflower);
  }
});
