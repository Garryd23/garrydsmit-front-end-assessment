class Hotels {
  constructor() {
    this.hotelTab = document.querySelector(".hotels-tab");
    this.hotelContent = document.querySelector(".hotel-content");
    this.events();
  }

  events() {
    this.hotelTab.addEventListener("click", () => this.toggleHotelContent());
  }

  toggleHotelContent() {
    for (var content of this.hotelContent.parentNode.querySelectorAll(".is-current")) {
      if (content !== this.hotelContent) {
        content.classList.toggle("is-current");
        content.style.display = "none";
        this.hotelContent.classList.toggle("is-current");

        for (var tab of this.hotelTab.parentNode.querySelectorAll(".is-active")) {
          if (tab !== this.hotelTab) {
            tab.classList.toggle("is-active");
            this.hotelTab.classList.toggle("is-active");
          }
        }
      }
    }
  }
}

export default Hotels;
