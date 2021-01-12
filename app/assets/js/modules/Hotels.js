class Tabs {
  constructor() {
    // this.hotelTab = document.querySelector(".hotels-tab");
    // this.hotelContent = document.querySelector(".hotel-content");

    // this.flightsTab = document.querySelector(".flights-tab");
    // this.flightsContent = document.querySelector(".flight-content");

    // this.comboTab = document.querySelector(".combo-tab");
    // this.comboContent = document.querySelector(".combo-content");

    // this.holidaysTab = document.querySelector(".holiday-tab");
    // this.holidaysContent = document.querySelector(".holidays-content");
    this.tabs = document.querySelectorAll(".tabbed-box__tabs--links");
    this.events();
  }

  events() {
    this.toggleContent();

    // this.hotelTab.addEventListener("click", () => this.toggleContent());
  }

  toggleContent() {
    console.log(this.tabs);
    for (const tab of this.tabs) {
      tab.addEventListener("click", (e) => {
        console.log(`${e.target} for: ${e.target.getAttribute("content")}`);
        let clickedTab = e.target;
        let content = document.querySelector(clickedTab.getAttribute("content"));
        console.log(content);
        for (var contents of content.parentNode.querySelectorAll(".is-current")) {
          if (contents !== content) {
            contents.classList.toggle("is-current");
            contents.classList.toggle("is-hidden");
            content.classList.toggle("is-current");
            content.classList.toggle("is-hidden");

            for (var tabs of clickedTab.parentNode.querySelectorAll(".is-active")) {
              if (tabs !== clickedTab) {
                tabs.classList.toggle("is-active");
                clickedTab.classList.toggle("is-active");
              }
            }
          }
        }
      });
    }
  }
}

export default Tabs;
