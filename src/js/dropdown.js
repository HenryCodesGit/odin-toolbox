import "../css/dropdown.css";

let currentVisible;

//This script takes any elements set up with the following hierarchy, class names, and ids in an HTML file and adds drop-down functionality to them
/*
      <nav class="hcg-option-container">
        <div class="hcg-option">
          Links
          <div class="hcg-sub-option-container">
            <a class="hcg-sub-option">Sub-option</a>
            <a class="hcg-sub-option">Sub-option</a>
            <a class="hcg-sub-option">Sub-option</a>
            <a class="hcg-sub-option">Sub-option</a>
            <a class="hcg-sub-option">Sub-option</a>
            <a class="hcg-sub-option">Sub-option</a>
          </div>
        </div>
        <div class="hcg-option">
            Links
            <div class="hcg-sub-option-container">
              <a class="hcg-sub-option">Sub-option</a>
              <a class="hcg-sub-option">Sub-option</a>
              <a class="hcg-sub-option">Sub-option</a>
              <a class="hcg-sub-option">Sub-option</a>
              <a class="hcg-sub-option">Sub-option</a>
              <a class="hcg-sub-option">Sub-option</a>
            </div>
          </div>
      </nav>
*/

//Need to provide a 'hcg-option-container' to the function
export default addDropdown;
const addDropdown = function addDropdownBehaviourTo(element) {
  let options = element.querySelectorAll(".hcg-option");

  //Upon click, need to hide all other drawers, and then show this drawer
  options.forEach((option) => {
    option.onclick = (e) => {
      console.log(e);
      hideDrawers();
      showDrawer(option.querySelector(".hcg-sub-option-container"));
      e.stopPropagation();
    };
  });
}; 


export function hideDrawers() {
  currentVisible?.classList?.remove("hcg-visible");
}

export function showDrawer(drawer) {
  currentVisible = drawer;
  currentVisible.classList.add("hcg-visible");
}

function example(){
  //Add default functionality on the page where the currentVisible drawer is closed whenever a user clicks anywhere other than the drawer itself
  document.addEventListener("mousedown", (e) => {
    hideDrawers();
  });

  /* Test code below */

  //Test code to initiate the script on some pre-made html
  window.a = document.querySelector(".hcg-option-container");
  addDropdown(window.a);

  /*

  //Test code to see when something is being resized
  const observer = new ResizeObserver((element) => {
      console.log(element);
  })
  window.b = document.querySelector('iframe');
  observer.observe(window.b);


  //Test code to see if something is overflowing a container
  let a = document.querySelector('.container')
  if(a.scrollWidth > a.clientWidth) console.log('Overflowing!');

  */
}