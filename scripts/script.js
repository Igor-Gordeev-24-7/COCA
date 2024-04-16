// iMask

// IMask(document.getElementById("input-number"), {
//   mask: "+{7}(000)000-00-00",
// });

// Burger menu
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const headerBurgerBtn = document.querySelector(".header__burger-btn");

  headerBurgerBtn.addEventListener("click", () => {
    header.classList.toggle("open");
    // console.log(1);
  });
});

// Появление элементов

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    } else {
      change.target.classList.remove("element-show");
    }
  });
}
let options = {
  threshold: [0.01],
};
let observer = new IntersectionObserver(onEntry, options);

// Показать элемент сверху в низ
let topDown = document.querySelectorAll(".down-top");
for (let elm of topDown) {
  observer.observe(elm);
}
// Показать элемент снизу в верх
let downTop = document.querySelectorAll(".top-down");
for (let elm of downTop) {
  observer.observe(elm);
}
// Показать элемент слева на право
let fromLeftToRight = document.querySelectorAll(".from-left-to-right");
for (let elm of fromLeftToRight) {
  observer.observe(elm);
}
// Показать элемент слева на право
let fromRightToLeft = document.querySelectorAll(".from-right-to-left");
for (let elm of fromRightToLeft) {
  observer.observe(elm);
}
// Сделать видимым
let makeVisible = document.querySelectorAll(".make-visible");
for (let elm of makeVisible) {
  observer.observe(elm);
}

// ACCORDION

const faqItemEl = document.querySelectorAll(".faq__item");

for (let i = 0; i < faqItemEl.length; i++) {
  faqItemEl[i].addEventListener("click", () => {
    faqItemEl[i].classList.toggle("active");
  });
}

// SWIPER

// testimonials__swiper
var swiper = new Swiper(".testimonials__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    allowTouchMove: false,
    autoplay: {
      delay: 5000, // Задержка между слайдами в миллисекундах
      disableOnInteraction: false, // Отключение автоплея после взаимодействия пользователя (по умолчанию: true)
    },
  },
});

// header__swiper
var swiper = new Swiper(".header__swiper", {
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // allowTouchMove: false,
  // autoplay: {
  //   delay: 5000, // Задержка между слайдами в миллисекундах
  //   disableOnInteraction: false, // Отключение автоплея после взаимодействия пользователя (по умолчанию: true)
  // },
});

// team__swiper
var swiper = new Swiper(".team__swiper", {
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  // allowTouchMove: false,
  // autoplay: {
  //   delay: 5000, // Задержка между слайдами в миллисекундах
  //   disableOnInteraction: false, // Отключение автоплея после взаимодействия пользователя (по умолчанию: true)
  // },
});

// complex__swiper
var swiper = new Swiper(".complex__swiper", {
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  allowTouchMove: false,

  autoplay: {
    delay: 5000, // Задержка между слайдами в миллисекундах
    disableOnInteraction: false, // Отключение автоплея после взаимодействия пользователя (по умолчанию: true)
  },
});

// insightSwiper
var swiper = new Swiper(".insightSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2,
  spaceBetween: 32,
  allowTouchMove: false,
  autoplay: {
    delay: 5000, // Задержка между слайдами в миллисекундах
    disableOnInteraction: false, // Отключение автоплея после взаимодействия пользователя (по умолчанию: true)
  },
});

function initSwiper() {
  if (window.innerWidth <= 1440) {
    // header__swiper
    var swiper = new Swiper(".header__swiper", {
      slidesPerView: 2,
      spaceBetween: 32,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // allowTouchMove: false,
      // autoplay: {
      //   delay: 5000, // Задержка между слайдами в миллисекундах
      //   disableOnInteraction: false, // Отключение автоплея после взаимодействия пользователя (по умолчанию: true)
      // },
    });

    // team__swiper
    var swiper = new Swiper(".team__swiper", {
      slidesPerView: 3,
      spaceBetween: 32,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // allowTouchMove: false,
      // autoplay: {
      //   delay: 5000, // Задержка между слайдами в миллисекундах
      //   disableOnInteraction: false, // Отключение автоплея после взаимодействия пользователя (по умолчанию: true)
      // },
    });
  }
  if (window.innerWidth <= 1000) {
    // complex__swiper
    var swiper = new Swiper(".complex__swiper", {
      slidesPerView: 2,
      spaceBetween: 32,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      allowTouchMove: false,
      autoplay: {
        delay: 5000, // Задержка между слайдами в миллисекундах
        disableOnInteraction: false, // Отключение автоплея после взаимодействия пользователя (по умолчанию: true)
      },
    });
    // team__swiper
    var swiper = new Swiper(".team__swiper", {
      slidesPerView: 2,
      spaceBetween: 32,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // allowTouchMove: false,
      // autoplay: {
      //   delay: 5000, // Задержка между слайдами в миллисекундах
      //   disableOnInteraction: false, // Отключение автоплея после взаимодействия пользователя (по умолчанию: true)
      // },
    });
  }
  // insightSwiper
  if (window.innerWidth <= 700) {
    // header__swiper
    var swiper = new Swiper(".header__swiper", {
      slidesPerView: 1,
      spaceBetween: 32,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      allowTouchMove: false,
      autoplay: {
        delay: 5000, // Задержка между слайдами в миллисекундах
        disableOnInteraction: false, // Отключение автоплея после взаимодействия пользователя (по умолчанию: true)
      },
    });
    var swiper = new Swiper(".insightSwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 1.3,
      spaceBetween: 32,
      allowTouchMove: false,
      autoplay: {
        delay: 5000, // Задержка между слайдами в миллисекундах
        disableOnInteraction: false, // Отключение автоплея после взаимодействия пользователя (по умолчанию: true)
      },
    });
    // team__swiper
    var swiper = new Swiper(".team__swiper", {
      slidesPerView: 1,
      spaceBetween: 32,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      allowTouchMove: false,
      autoplay: {
        delay: 5000, // Задержка между слайдами в миллисекундах
        disableOnInteraction: false, // Отключение автоплея после взаимодействия пользователя (по умолчанию: true)
      },
    });
  }
}
initSwiper();
