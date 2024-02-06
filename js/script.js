$(document).ready(function ($) {
  $(".popup-open").click(function () {
    $(".popup-fade").fadeIn();
    return false;
  });

  $(".popup-close").click(function () {
    $(this).parents(".popup-fade").fadeOut();
    return false;
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $(".popup-fade").fadeOut();
    }
  });

  $(".popup-fade").click(function (e) {
    if ($(e.target).closest(".popup").length == 0) {
      $(this).fadeOut();
    }
  });
});

$(document).ready(function () {
  $(".header-burger").on("click", function () {
    $(".burger-menu").addClass("is-active");
  });

  $(".mobile-menu-close").on("click", function () {
    $(".burger-menu").removeClass("is-active");
  });
});

$(document).ready(function () {
  //прикрепляем клик по заголовкам acc-head
  $("#accordeon .acc-head").on("click", f_acc);
  $("#accordeon-step .accs1-head").on("click", f_accm1); 
  $("#accordeon-menu-mob .accm1-head").on("click", f_accm2);
  $("#accordeon-menu-mob2 .accm2-head").on("click", f_accm3);   
});

function f_acc() {
  //скрываем все кроме того, что должны открыть
  $("#accordeon .acc-body").not($(this).next()).slideUp(100);
  // открываем или скрываем блок под заголовоком, по которому кликнули
  $(this).next().slideToggle(100);
  $(this).toggleClass("add-bg");
  $("#accordeon .faq-open1").toggleClass("is-hidden");
  // $(this).toggleClass("is-hidden");
  $("#accordeon .faq-close1").toggleClass("is-hidden");
//   $(this).toggleClass("is-hidden");
}

function f_accm1() {
  $("#accordeon-step .accs1-body").not($(this).next()).slideUp(100);
    $(this).next().slideToggle(100);
    $(this).toggleClass("add-bg-s");
    $("#accordeon-step .faq-open1").toggleClass("is-hidden");
    $("#accordeon-step .faq-close1").toggleClass("is-hidden");
}
function f_accm2() {
  $("#accordeon-menu-mob .accm1-body").not($(this).next()).slideUp(100);
    $(this).next().slideToggle(100);
    //   $(this).toggleClass("add-bg-m1");
    // $("#accordeon-step .faq-open1").toggleClass("is-hidden");
    // $("#accordeon-step .faq-close1").toggleClass("is-hidden");
   
}
function f_accm3() {
  $("#accordeon-menu-mob2 .accm2-body").not($(this).next()).slideUp(100);
    $(this).next().slideToggle(100);
    //   $(this).toggleClass("add-bg-m1");
    // $("#accordeon-step .faq-open1").toggleClass("is-hidden");
    // $("#accordeon-step .faq-close1").toggleClass("is-hidden");
   
}

const refs = {
  menuAbout: document.querySelector(".header-menu-list-about"),
  openAbout: document.getElementById("menu-about"),
};

const openMenuAbout = (e) => {
  refs.openAbout.classList.remove("is-hidden");
  refs.menuAbout.classList.add("active");
};

const closeMenuAbout = () => {
  refs.openAbout.classList.add("is-hidden");
  refs.menuAbout.classList.remove("active");
};
const closeMenuAboutTwo = (e) => {
  if (e.relatedTarget === refs.openAbout) {
    return;
  }
  // closeMenuAbout();
};

refs.menuAbout.addEventListener("mouseover", openMenuAbout);
refs.menuAbout.addEventListener("mouseout", closeMenuAboutTwo);
refs.openAbout.addEventListener("mouseleave", closeMenuAbout);