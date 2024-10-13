
function load_page() {
  console.log("hellllloooooooo");
  displayNavbar();
}


function displayNavbar() {
  let bar, nav, li, a, div, img;
  let cutegories = ["כלי כתיבה", "מחברות", "מחברות קמפוס", "מחברות יצירה"];
  let routes = [
    "../html/paintingTools.html",
    "../html/notebooks.html",
    "../html/paintingTools.html",
    "../html/paintingTools.html",
  ];
  bar = document.getElementById("sidebar");
  nav = document.createElement("nav");
  console.log("display items");

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

  div = document.createElement("div");
  div.classList.add("pay");
  bar.appendChild(div);
  a = document.createElement("a");
  a.href = "./homePage.html";
  div.appendChild(a);
  img = document.createElement("img");
  img.src = "https://img.icons8.com/pulsar-gradient/48/shopping-cart.png";
  a.appendChild(img);
  div = document.createElement('div')
  div.id = 'logo'
  
  a = document.createElement("a");
  a.href = "./homePage.html";
  div.appendChild(a);
  img = document.createElement("img");
  img.src = '../imgs/logo.png'
  a.appendChild(img);

  img.classList.add('logo')
  bar.appendChild(div)
}
