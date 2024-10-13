function load_page() {
  console.log("hellllloooooooo");
  displaybar();
}
function displaybar() {
  let cutegories = ["כלי כתיבה", "מחברות", "מחברות קמפוס", "מחברות יצירה"];
  let routes = [
    "../html/paintingTools.html",
    "../html/notebooks.html",
    "../html/paintingTools.html",
    "../html/paintingTools.html",
  ];
  let bar = document.getElementById("sidebar");
  creatNavBar(cutegories, routes, bar);
  creatSelectBar(cutegories, routes, bar);
  navigationImages(bar);
}

function creatNavBar(cutegories, routes, bar) {
  let nav, li, a;

  nav = document.createElement("nav");
  nav.classList.add("navbar");
  bar.appendChild(nav);

  for (i in cutegories) {
    li = document.createElement("li");
    li.classList.add("menuItem");
    console.log(li);
    a = document.createElement("a");
    a.innerHTML = cutegories[i];
    a.href = routes[i];
    li.appendChild(a);
    nav.appendChild(li);
  }
}

function creatSelectBar(cutegories, routes, bar) {
  let select, option;
  select = document.createElement("select");
  for (i in cutegories) {
    option = document.createElement("option");
    // option.classList.add("menuItem");
    option.innerText=cutegories[i]
    option.value = routes[i];
    select.appendChild(option);
  }
  select.addEventListener('change', function() {
    let url = this.value;
    if (url) {
      window.location.href = url;
    }
  });
  bar.appendChild(select);
}

function navigationImages(bar) {
  let a, img, div;
  div = document.createElement("div");
  div.classList.add("pay");
  bar.appendChild(div);
  a = document.createElement("a");
  a.href = "./homePage.html";
  div.appendChild(a);
  img = document.createElement("img");
  img.src = "https://img.icons8.com/pulsar-gradient/48/shopping-cart.png";
  a.appendChild(img);
  div = document.createElement("div");
  a = document.createElement("a");
  a.href = "./homePage.html";
  div.appendChild(a);
  img = document.createElement("img");
  img.src = "../imgs/logo.png";
  a.appendChild(img);

  img.classList.add("logo");
  bar.appendChild(div);
}
