class Flights {
  constructor() {
    this.intBtn = document.querySelector(".btnInternational");
    this.domesticBtn = document.querySelector(".btnDomestic");

    this.events();
  }

  events() {
    this.domesticBtn.addEventListener("click", () => this.selectTravelType());
    this.intBtn.addEventListener("click", () => this.selectTravelType());
  }

  selectTravelType(e) {
    this.domesticBtn.classList.toggle("is-selected");
    this.intBtn.classList.toggle("is-selected");
  }
}

export default Flights;
