(function () {
  "use strict";
  let img = [
    "img/image1.jpg",
    "img/image2.jpg",
    "img/image3.jpg",
    "img/image4.jpg",
    "img/image5.jpg",
  ];
  let a = document.querySelector("img");
  let p = document.querySelector("#previous");
  let n = document.querySelector("#next");
  let h = document.querySelector("h1");
  let i = document.querySelector("input");
  let r = document.querySelector("#review");
  let c = 0;

  let add1 = (c) => {
    return c == img.length - 1 ? 0 : c + 1;
  };
  let sub1 = (c) => {
    return c == 0 ? img.length - 1 : c - 1;
  };

  p.addEventListener("click", (e) => {
    c = sub1(c);
    a.style.opacity = 0; // Start the fade-out effect
    setTimeout(() => {
      a.setAttribute("src", img[c]);
      h.innerHTML = "IMAGE " + (c + 1);
      a.style.opacity = 1; // Start the fade-in effect
    }, 500); // Wait for 0.5 seconds for the fade-out effect
  });

  n.addEventListener("click", (e) => {
    c = add1(c);
    a.style.opacity = 0; // Start the fade-out effect
    setTimeout(() => {
      a.setAttribute("src", img[c]);
      h.innerHTML = "IMAGE " + (c + 1);
      a.style.opacity = 1; // Start the fade-in effect
    }, 500); // Wait for 0.5 seconds for the fade-out effect
  });

  i.addEventListener("input", (e) => {
    let data = i.value;
    if (data.length == 0) {
      r.innerHTML = "";
    } else if (isNaN(Number.parseInt(data))) {
      r.innerHTML = "Enter a valid Number ";
    } else {
      if (data > 5 || data < 1) {
        r.innerHTML = "Enter between 1 to 5";
      } else {
        r.innerHTML = "";
        a.style.opacity = 0;
        setTimeout(() => {
          a.setAttribute("src", img[data - 1]);
          h.innerHTML = "IMAGE " + Number.parseInt(data);
          c = Number.parseInt(data) - 1;
          a.style.opacity = 1; // Start the fade-in effect
        }, 500);
      }
    }
  });
})();
