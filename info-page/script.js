"use strict";

//BALUCKI
document.querySelector(".balucki").addEventListener("click", function () {
  document.querySelector(".balucki").classList.add("clicked");
  document.querySelector(".bartek").classList.remove("clicked");
  document.querySelector(".daniel").classList.remove("clicked");
  document.querySelector(".oskar").classList.remove("clicked");
  document.querySelector(".wojtek").classList.remove("clicked");
  document.querySelector(".antek").classList.remove("clicked");
  document.querySelector(".patryk").classList.remove("clicked");
  document.querySelector(".kamil").classList.remove("clicked");
  document.querySelector(".pawel").classList.remove("clicked");
  document.querySelector(".oj").classList.remove("clicked");
  document.querySelector(".imie").textContent = "Dawid B.";
  document.querySelector(".opis").textContent = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quis enim lobortis scelerisque fermentum. Ultricies mi quis hendrerit dolor magna eget est lorem. Blandit cursus risus at ultrices mi tempus imperdiet. Sed lectus vestibulum mattis ullamcorper velit sed. Habitant morbi tristique senectus et netus. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Semper feugiat nibh sed pulvinar. Sed vulputate odio ut enim blandit volutpat. Sed nisi lacus sed viverra. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Dui faucibus in ornare quam viverra. Pellentesque habitant morbi tristique senectus et netus et. Velit laoreet id donec ultrices tincidunt arcu. Justo laoreet sit amet cursus sit amet dictum. Nisl tincidunt eget nullam non nisi est sit.`;
  document.querySelector(".zdj").src = "zdjecia/balucki-spi.jpg";
  document.querySelector(".zdj2").src = "zdjecia/balucki-gasi.jpg";
  document.querySelector(".zdj").classList.add("fix");
  document.querySelector(".zdj2").classList.add("fix");

  document.querySelector(".yt-zdj").src = "zdjecia/yt.png";
  document.querySelector(".fb-zdj").src = "zdjecia/fb.png";
  document.querySelector(".insta-zdj").src = "zdjecia/insta.png";
  document.querySelector(".yt-zdj").classList.add("yt");
  document.querySelector(".fb-zdj").classList.add("fb");
  document.querySelector(".insta-zdj").classList.add("insta");

  document.querySelector(".yt-link").href = "https://youtube.com";
  document.querySelector(".fb-link").href = "https://www.facebook.com";
  document.querySelector(".insta-link").href = "https://www.instagram.com";
});

//PAWEŁ
document.querySelector(".pawel").addEventListener("click", function () {
  document.querySelector(".balucki").classList.remove("clicked");
  document.querySelector(".bartek").classList.remove("clicked");
  document.querySelector(".daniel").classList.remove("clicked");
  document.querySelector(".oskar").classList.remove("clicked");
  document.querySelector(".wojtek").classList.remove("clicked");
  document.querySelector(".antek").classList.remove("clicked");
  document.querySelector(".patryk").classList.remove("clicked");
  document.querySelector(".kamil").classList.remove("clicked");
  document.querySelector(".pawel").classList.add("clicked");
  document.querySelector(".oj").classList.remove("clicked");

  document.querySelector(".imie").textContent = "Paweł";
  document.querySelector(
    ".opis"
  ).textContent = `Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Cursus metus aliquam eleifend mi. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Nunc lobortis mattis aliquam faucibus. Tristique nulla aliquet enim tortor at auctor. Blandit cursus risus at ultrices. Ultrices sagittis orci a scelerisque purus. Morbi tristique senectus et netus et malesuada fames ac. Nulla malesuada pellentesque elit eget gravida cum sociis. Enim ut tellus elementum sagittis vitae et leo. Sit amet facilisis magna etiam tempor orci eu. Consectetur libero id faucibus nisl. Arcu dui vivamus arcu felis bibendum ut tristique et. Lacinia quis vel eros donec ac odio tempor orci dapibus. Bibendum arcu vitae elementum curabitur vitae. Viverra nibh cras pulvinar mattis nunc sed. Scelerisque viverra mauris in aliquam sem.`;
  document.querySelector(".zdj").src = "zdjecia/pawel-pizza.jpg";
  document.querySelector(".zdj2").src = "zdjecia/pawel.jpg";
  document.querySelector(".zdj").classList.add("fix");
  document.querySelector(".zdj2").classList.add("fix");

  document.querySelector(".yt-zdj").src = "zdjecia/yt.png";
  document.querySelector(".fb-zdj").src = "zdjecia/fb.png";
  document.querySelector(".insta-zdj").src = "zdjecia/insta.png";
  document.querySelector(".yt-zdj").classList.add("yt");
  document.querySelector(".fb-zdj").classList.add("fb");
  document.querySelector(".insta-zdj").classList.add("insta");

  document.querySelector(".yt-link").href = "https://youtube.com";
  document.querySelector(".fb-link").href = "https://www.facebook.com";
  document.querySelector(".insta-link").href = "https://www.instagram.com";
});

//OJ
document.querySelector(".oj").addEventListener("click", function () {
  document.querySelector(".balucki").classList.remove("clicked");
  document.querySelector(".bartek").classList.remove("clicked");
  document.querySelector(".daniel").classList.remove("clicked");
  document.querySelector(".oskar").classList.remove("clicked");
  document.querySelector(".wojtek").classList.remove("clicked");
  document.querySelector(".antek").classList.remove("clicked");
  document.querySelector(".patryk").classList.remove("clicked");
  document.querySelector(".kamil").classList.remove("clicked");
  document.querySelector(".pawel").classList.remove("clicked");
  document.querySelector(".oj").classList.add("clicked");

  document.querySelector(".imie").textContent = "Dawid O";
  document.querySelector(
    ".opis"
  ).textContent = `Libero nunc consequat interdum varius. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Aliquam sem et tortor consequat. Tellus mauris a diam maecenas. Lectus urna duis convallis convallis. Nunc consequat interdum varius sit amet mattis vulputate enim. Ultricies integer quis auctor elit sed vulputate mi sit amet. Urna nec tincidunt praesent semper feugiat. Dolor sed viverra ipsum nunc aliquet bibendum enim. Molestie a iaculis at erat pellentesque. Vel turpis nunc eget lorem dolor.`;
  document.querySelector(".zdj").src = "zdjecia/oj-zachod.jpg";
  document.querySelector(".zdj2").src = "zdjecia/oj.jpg";
  document.querySelector(".zdj").classList.add("fix");
  document.querySelector(".zdj2").classList.add("fix");

  document.querySelector(".yt-zdj").src = "zdjecia/yt.png";
  document.querySelector(".fb-zdj").src = "zdjecia/fb.png";
  document.querySelector(".insta-zdj").src = "zdjecia/insta.png";
  document.querySelector(".yt-zdj").classList.add("yt");
  document.querySelector(".fb-zdj").classList.add("fb");
  document.querySelector(".insta-zdj").classList.add("insta");

  document.querySelector(".yt-link").href = "https://youtube.com";
  document.querySelector(".fb-link").href = "https://www.facebook.com";
  document.querySelector(".insta-link").href = "https://www.instagram.com";
});

//OSKAR
document.querySelector(".oskar").addEventListener("click", function () {
  document.querySelector(".balucki").classList.remove("clicked");
  document.querySelector(".bartek").classList.remove("clicked");
  document.querySelector(".daniel").classList.remove("clicked");
  document.querySelector(".oskar").classList.add("clicked");
  document.querySelector(".wojtek").classList.remove("clicked");
  document.querySelector(".antek").classList.remove("clicked");
  document.querySelector(".patryk").classList.remove("clicked");
  document.querySelector(".kamil").classList.remove("clicked");
  document.querySelector(".pawel").classList.remove("clicked");
  document.querySelector(".oj").classList.remove("clicked");

  document.querySelector(".imie").textContent = "Oskar";
  document.querySelector(
    ".opis"
  ).textContent = `Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. In est ante in nibh mauris cursus mattis molestie. Suscipit adipiscing bibendum est ultricies integer quis auctor. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Quis viverra nibh cras pulvinar mattis nunc sed. Ipsum dolor sit amet consectetur. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Quis ipsum suspendisse ultrices gravida dictum fusce. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id diam maecenas ultricies mi eget mauris. Faucibus a pellentesque sit amet porttitor eget dolor. Gravida quis blandit turpis cursus in. Aliquet nibh praesent tristique magna sit amet purus. Sed nisi lacus sed viverra tellus in hac. Suspendisse potenti nullam ac tortor vitae.`;
  document.querySelector(".zdj").src = "zdjecia/oskar.jpg";
  document.querySelector(".zdj2").src = "zdjecia/oskar-aparat.jpg";
  document.querySelector(".zdj").classList.add("fix");
  document.querySelector(".zdj2").classList.add("fix");

  document.querySelector(".yt-zdj").src = "zdjecia/yt.png";
  document.querySelector(".fb-zdj").src = "zdjecia/fb.png";
  document.querySelector(".insta-zdj").src = "zdjecia/insta.png";
  document.querySelector(".yt-zdj").classList.add("yt");
  document.querySelector(".fb-zdj").classList.add("fb");
  document.querySelector(".insta-zdj").classList.add("insta");

  document.querySelector(".yt-link").href = "https://youtube.com";
  document.querySelector(".fb-link").href = "https://www.facebook.com";
  document.querySelector(".insta-link").href = "https://www.instagram.com";
});

//KAMIL
document.querySelector(".kamil").addEventListener("click", function () {
  document.querySelector(".balucki").classList.remove("clicked");
  document.querySelector(".bartek").classList.remove("clicked");
  document.querySelector(".daniel").classList.remove("clicked");
  document.querySelector(".oskar").classList.remove("clicked");
  document.querySelector(".wojtek").classList.remove("clicked");
  document.querySelector(".antek").classList.remove("clicked");
  document.querySelector(".patryk").classList.remove("clicked");
  document.querySelector(".kamil").classList.add("clicked");
  document.querySelector(".pawel").classList.remove("clicked");
  document.querySelector(".oj").classList.remove("clicked");

  document.querySelector(".imie").textContent = "Kamil";
  document.querySelector(
    ".opis"
  ).textContent = `Lacinia quis vel eros donec ac. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. In tellus integer feugiat scelerisque varius morbi enim. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Sed risus ultricies tristique nulla aliquet enim. Volutpat est velit egestas dui id. Fames ac turpis egestas maecenas pharetra convallis posuere. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Et egestas quis ipsum suspendisse ultrices gravida. Velit euismod in pellentesque massa placerat. Condimentum id venenatis a condimentum vitae sapien pellentesque. Libero id faucibus nisl tincidunt eget nullam non nisi est. Et netus et malesuada fames ac. Vestibulum sed arcu non odio euismod lacinia at. Sed odio morbi quis commodo odio aenean sed adipiscing. Suscipit tellus mauris a diam. Interdum varius sit amet mattis vulputate enim. Integer enim neque volutpat ac tincidunt vitae semper quis lectus.`;
  document.querySelector(".zdj").src = "zdjecia/kamil.jpg";
  document.querySelector(".zdj2").src = "zdjecia/kamil2.jpg";
  document.querySelector(".zdj").classList.add("fix");
  document.querySelector(".zdj2").classList.add("fix");

  document.querySelector(".yt-zdj").src = "zdjecia/yt.png";
  document.querySelector(".fb-zdj").src = "zdjecia/fb.png";
  document.querySelector(".insta-zdj").src = "zdjecia/insta.png";
  document.querySelector(".yt-zdj").classList.add("yt");
  document.querySelector(".fb-zdj").classList.add("fb");
  document.querySelector(".insta-zdj").classList.add("insta");

  document.querySelector(".yt-link").href = "https://youtube.com";
  document.querySelector(".fb-link").href = "https://www.facebook.com";
  document.querySelector(".insta-link").href = "https://www.instagram.com";
});

//WOJTEK
document.querySelector(".wojtek").addEventListener("click", function () {
  document.querySelector(".balucki").classList.remove("clicked");
  document.querySelector(".bartek").classList.remove("clicked");
  document.querySelector(".daniel").classList.remove("clicked");
  document.querySelector(".oskar").classList.remove("clicked");
  document.querySelector(".wojtek").classList.add("clicked");
  document.querySelector(".antek").classList.remove("clicked");
  document.querySelector(".patryk").classList.remove("clicked");
  document.querySelector(".kamil").classList.remove("clicked");
  document.querySelector(".pawel").classList.remove("clicked");
  document.querySelector(".oj").classList.remove("clicked");

  document.querySelector(".imie").textContent = "Wojciech Górski";
  document.querySelector(
    ".opis"
  ).textContent = `Sodales ut etiam sit amet nisl purus in mollis. A iaculis at erat pellentesque adipiscing commodo elit. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Sem viverra aliquet eget sit amet tellus. Et netus et malesuada fames. Et sollicitudin ac orci phasellus egestas tellus. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Congue nisi vitae suscipit tellus mauris. Nunc sed velit dignissim sodales ut eu sem integer vitae. At augue eget arcu dictum varius duis at consectetur. Auctor eu augue ut lectus arcu bibendum. Cras fermentum odio eu feugiat pretium. Vitae nunc sed velit dignissim sodales. At tellus at urna condimentum mattis. Convallis tellus id interdum velit laoreet id. Pharetra et ultrices neque ornare aenean euismod.`;
  document.querySelector(".zdj").src = "zdjecia/wojtek.jpg";
  document.querySelector(".zdj2").src = "zdjecia/wojtek-wwa.jpg";
  document.querySelector(".zdj").classList.add("fix");
  document.querySelector(".zdj2").classList.add("fix");

  document.querySelector(".yt-zdj").src = "zdjecia/yt.png";
  document.querySelector(".fb-zdj").src = "zdjecia/fb.png";
  document.querySelector(".insta-zdj").src = "zdjecia/insta.png";
  document.querySelector(".yt-zdj").classList.add("yt");
  document.querySelector(".fb-zdj").classList.add("fb");
  document.querySelector(".insta-zdj").classList.add("insta");

  document.querySelector(".yt-link").href = "https://youtube.com";
  document.querySelector(".fb-link").href = "https://www.facebook.com";
  document.querySelector(".insta-link").href = "https://www.instagram.com";
});

//PATRYK
document.querySelector(".patryk").addEventListener("click", function () {
  document.querySelector(".balucki").classList.remove("clicked");
  document.querySelector(".bartek").classList.remove("clicked");
  document.querySelector(".daniel").classList.remove("clicked");
  document.querySelector(".oskar").classList.remove("clicked");
  document.querySelector(".wojtek").classList.remove("clicked");
  document.querySelector(".antek").classList.remove("clicked");
  document.querySelector(".patryk").classList.add("clicked");
  document.querySelector(".kamil").classList.remove("clicked");
  document.querySelector(".pawel").classList.remove("clicked");
  document.querySelector(".oj").classList.remove("clicked");

  document.querySelector(".imie").textContent = "Patryk";
  document.querySelector(
    ".opis"
  ).textContent = `Laoreet id donec ultrices tincidunt. Eu non diam phasellus vestibulum. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Facilisis sed odio morbi quis commodo. Eu mi bibendum neque egestas congue quisque egestas diam in. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Nibh praesent tristique magna sit amet purus gravida. Enim neque volutpat ac tincidunt vitae. Malesuada bibendum arcu vitae elementum curabitur. Adipiscing tristique risus nec feugiat in fermentum.
  `;
  document.querySelector(".zdj").src = "zdjecia/patryk.jpg";
  document.querySelector(".zdj2").src = "zdjecia/patryk-farmer.jpg";
  document.querySelector(".zdj").classList.add("fix");
  document.querySelector(".zdj2").classList.add("fix");

  document.querySelector(".yt-zdj").src = "zdjecia/yt.png";
  document.querySelector(".fb-zdj").src = "zdjecia/fb.png";
  document.querySelector(".insta-zdj").src = "zdjecia/insta.png";
  document.querySelector(".yt-zdj").classList.add("yt");
  document.querySelector(".fb-zdj").classList.add("fb");
  document.querySelector(".insta-zdj").classList.add("insta");

  document.querySelector(".yt-link").href = "https://youtube.com";
  document.querySelector(".fb-link").href = "https://www.facebook.com";
  document.querySelector(".insta-link").href = "https://www.instagram.com";
});

//ANTEK
document.querySelector(".antek").addEventListener("click", function () {
  document.querySelector(".balucki").classList.remove("clicked");
  document.querySelector(".bartek").classList.remove("clicked");
  document.querySelector(".daniel").classList.remove("clicked");
  document.querySelector(".oskar").classList.remove("clicked");
  document.querySelector(".wojtek").classList.remove("clicked");
  document.querySelector(".antek").classList.add("clicked");
  document.querySelector(".patryk").classList.remove("clicked");
  document.querySelector(".kamil").classList.remove("clicked");
  document.querySelector(".pawel").classList.remove("clicked");
  document.querySelector(".oj").classList.remove("clicked");

  document.querySelector(".imie").textContent = "Antoni";
  document.querySelector(
    ".opis"
  ).textContent = `Nec feugiat nisl pretium fusce id. Lacus suspendisse faucibus interdum posuere. Fermentum iaculis eu non diam phasellus. Elementum facilisis leo vel fringilla est ullamcorper. Lorem dolor sed viverra ipsum. Vitae semper quis lectus nulla at volutpat diam. In metus vulputate eu scelerisque felis. Id semper risus in hendrerit gravida rutrum quisque non tellus. Tristique senectus et netus et malesuada fames ac turpis egestas. Netus et malesuada fames ac turpis egestas sed tempus. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Arcu felis bibendum ut tristique et. Eget aliquet nibh praesent tristique magna. Proin sed libero enim sed faucibus turpis in eu. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. At elementum eu facilisis sed odio morbi. 
    `;
  document.querySelector(".zdj").src = "zdjecia/antek-wiking.jpg";
  document.querySelector(".zdj2").src = "zdjecia/antek-goryl.jpg";
  document.querySelector(".zdj").classList.add("fix");
  document.querySelector(".zdj2").classList.add("fix");

  document.querySelector(".yt-zdj").src = "zdjecia/yt.png";
  document.querySelector(".fb-zdj").src = "zdjecia/fb.png";
  document.querySelector(".insta-zdj").src = "zdjecia/insta.png";
  document.querySelector(".yt-zdj").classList.add("yt");
  document.querySelector(".fb-zdj").classList.add("fb");
  document.querySelector(".insta-zdj").classList.add("insta");

  document.querySelector(".yt-link").href = "https://youtube.com";
  document.querySelector(".fb-link").href = "https://www.facebook.com";
  document.querySelector(".insta-link").href = "https://www.instagram.com";
});

//DANIEL
document.querySelector(".daniel").addEventListener("click", function () {
  document.querySelector(".balucki").classList.remove("clicked");
  document.querySelector(".bartek").classList.remove("clicked");
  document.querySelector(".daniel").classList.add("clicked");
  document.querySelector(".oskar").classList.remove("clicked");
  document.querySelector(".wojtek").classList.remove("clicked");
  document.querySelector(".antek").classList.remove("clicked");
  document.querySelector(".patryk").classList.remove("clicked");
  document.querySelector(".kamil").classList.remove("clicked");
  document.querySelector(".pawel").classList.remove("clicked");
  document.querySelector(".oj").classList.remove("clicked");

  document.querySelector(".imie").textContent = "Daniel";
  document.querySelector(
    ".opis"
  ).textContent = `Morbi non arcu risus quis varius quam quisque id diam. Amet facilisis magna etiam tempor orci eu. In tellus integer feugiat scelerisque varius. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Pellentesque diam volutpat commodo sed egestas egestas. Elementum integer enim neque volutpat ac tincidunt vitae. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Faucibus interdum posuere lorem ipsum dolor. Leo a diam sollicitudin tempor id eu. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Pellentesque massa placerat duis ultricies lacus. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Nisl suscipit adipiscing bibendum est. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Duis tristique sollicitudin nibh sit. Volutpat sed cras ornare arcu dui vivamus arcu. Tempus quam pellentesque nec nam aliquam. Egestas integer eget aliquet nibh praesent tristique. 
    `;
  document.querySelector(".zdj").src = "zdjecia/daniel-bizon.jpg";
  document.querySelector(".zdj2").src = "zdjecia/daniel-kruszki.jpg";
  document.querySelector(".zdj").classList.add("fix");
  document.querySelector(".zdj2").classList.add("fix");

  document.querySelector(".yt-zdj").src = "zdjecia/yt.png";
  document.querySelector(".fb-zdj").src = "zdjecia/fb.png";
  document.querySelector(".insta-zdj").src = "zdjecia/insta.png";
  document.querySelector(".yt-zdj").classList.add("yt");
  document.querySelector(".fb-zdj").classList.add("fb");
  document.querySelector(".insta-zdj").classList.add("insta");

  document.querySelector(".yt-link").href = "https://youtube.com";
  document.querySelector(".fb-link").href = "https://www.facebook.com";
  document.querySelector(".insta-link").href = "https://www.instagram.com";
});

//BARTEK
document.querySelector(".bartek").addEventListener("click", function () {
  document.querySelector(".balucki").classList.remove("clicked");
  document.querySelector(".bartek").classList.add("clicked");
  document.querySelector(".daniel").classList.remove("clicked");
  document.querySelector(".oskar").classList.remove("clicked");
  document.querySelector(".wojtek").classList.remove("clicked");
  document.querySelector(".antek").classList.remove("clicked");
  document.querySelector(".patryk").classList.remove("clicked");
  document.querySelector(".kamil").classList.remove("clicked");
  document.querySelector(".pawel").classList.remove("clicked");
  document.querySelector(".oj").classList.remove("clicked");

  document.querySelector(".imie").textContent = "Bartosz";
  document.querySelector(
    ".opis"
  ).textContent = `Lorem dolor sed viverra ipsum. Sagittis aliquam malesuada bibendum arcu. Sed risus pretium quam vulputate dignissim. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Id neque aliquam vestibulum morbi blandit. Placerat in egestas erat imperdiet sed euismod nisi. Urna condimentum mattis pellentesque id. Augue lacus viverra vitae congue eu consequat. Eu consequat ac felis donec.`;
  document.querySelector(".zdj").src = "zdjecia/bartek-zaba.jpg";
  document.querySelector(".zdj2").src = "zdjecia/bartek-itachi.jpg";
  document.querySelector(".zdj").classList.add("fix");
  document.querySelector(".zdj2").classList.add("fix");

  document.querySelector(".yt-zdj").src = "zdjecia/yt.png";
  document.querySelector(".fb-zdj").src = "zdjecia/fb.png";
  document.querySelector(".insta-zdj").src = "zdjecia/insta.png";
  document.querySelector(".yt-zdj").classList.add("yt");
  document.querySelector(".fb-zdj").classList.add("fb");
  document.querySelector(".insta-zdj").classList.add("insta");

  document.querySelector(".yt-link").href = "https://youtube.com";
  document.querySelector(".fb-link").href = "https://www.facebook.com";
  document.querySelector(".insta-link").href = "https://www.instagram.com";
});
