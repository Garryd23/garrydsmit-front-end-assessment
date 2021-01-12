class AdvancedSearch {
  constructor() {
    this.container = document.querySelector(".tabbed-box__tabcontent--flights-form__row");
    this.button = document.querySelector(".tabbed-box__tabcontent--advanced-search");
    this.count = 0;

    this.events();
  }
  events() {
    this.button.addEventListener("click", () => this.toggleAdvanced());
  }

  toggleAdvanced() {
    if (this.count < 1) {
      this.container.insertAdjacentHTML(
        "afterend",
        `<div class="tabbed-box__tabcontent--flights-form__row" id='advancedContent' >
    <div id='advancedContent' class="tabbed-box__tabcontent--flights-form__item col-2">
                <div><label for="advsearchitem1">Advanced Search Field 1</label></div>
                <input type="text" name="advsearchitem1" id="advsearchitem1" placeholder="Advanced Search Field 1" />
              </div>
              <div class="tabbed-box__tabcontent--flights-form__item col-2">
                <div><label for="advsearchitem2">Advanced Search Field 2</label></div>
                <input type="text" name="advsearchitem2" id="advsearchitem2" placeholder="Advanced Search Field 2" />
              </div></div>
    `
      );

      this.count++;
    } else {
      document.querySelector("#advancedContent").remove();
      this.count = 0;
    }
  }
}

export default AdvancedSearch;
