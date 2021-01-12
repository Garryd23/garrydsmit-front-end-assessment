class CurrencyDropdown {
  constructor() {
    this.dropdownBtn = document.querySelector(".dropdown-container__dropdown__trigger");
    this.dropdown = document.querySelector(".dropdown-container__dropdown-options");
    this.dropdownOption = document.querySelectorAll(".dropdown-container__dropdown-options-option");
    this.arrow = document.querySelector(".dropdown-arrow");
    this.events();
  }

  events() {
    console.log(this.dropdownOption);
    this.dropdownBtn.addEventListener("click", () => this.toggleDropdown());
    this.select();
  }

  toggleDropdown() {
    this.dropdown.classList.toggle("dropdown-container__dropdown-options-is-open");
    this.arrow.classList.toggle("dropdown-arrow-is-rotated");
  }

  select() {
    let text = this.dropdownBtn;
    for (const option of this.dropdownOption) {
      option.addEventListener("click", (e) => {
        let selected = e.target;
        console.log(!selected.classList.contains("selected"));
        if (!selected.classList.contains("selected")) {
          console.log(selected.parentNode);
          selected.parentNode.querySelector(".dropdown-container__dropdown-options-option.selected").classList.remove("selected");
          selected.classList.add("selected");
          text.querySelector("span").textContent = selected.textContent;
          this.toggleDropdown();
        }
      });
    }
  }
}

export default CurrencyDropdown;
