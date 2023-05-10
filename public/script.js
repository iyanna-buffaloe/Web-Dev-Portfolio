let fields = document.getElementsByClassName("onebtn");
let fieldsarry = Array.from(fields);

for (var i = 0; i < fieldsarry.length; i++) {
  let children = Array.from(fieldsarry[i].children);

  //add event listener to the button
  children[0].addEventListener("mouseover", function () {
    let title = children[1];

    let icon = this.firstElementChild;
    icon.classList.remove("fa-3x");
    icon.classList.add("fa-4x");

    title.style.fontWeight = 600;
  });
  children[0].addEventListener("mouseout", function () {
    let title = children[1];
    let icon = this.firstElementChild;
    icon.classList.remove("fa-4x");
    icon.classList.add("fa-3x");
    title.style.fontWeight = 500;
  });
}
