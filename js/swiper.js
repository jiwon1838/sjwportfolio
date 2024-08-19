const swiper = new Swiper(".mySwiper", {
  loop: true, // 슬라이드를 루프 시킴
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000, // 슬라이드를 3초마다 자동 전환
    disableOnInteraction: false,
  },
});
document.addEventListener("DOMContentLoaded", function () {
  // const swiper = new Swiper(".mySwiper", {
  //   loop: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
  // });
  //my swiper1
  const swiper1 = new Swiper(".mySwiper1", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        // 현재 활성 슬라이드 가져오기
        const activeSlide = $(this.slides[this.activeIndex]);
        // 데이터 속성 가져오기
        const title = activeSlide.data("title") || "";
        const subtitle = activeSlide.data("subtitle") || "";
        const link = activeSlide.data("link") || "#";
        const tools = activeSlide.data("tools") || "";

        // 슬라이드 정보 업데이트
        $("#side-text h1").text(title);
        $("#side-text p").text(subtitle);
        $("#side-text .tool").html(tools);

        // 링크 업데이트
        $("#ogwebsite-link").text("Original Website").attr("href", link);
      },
    },
  });
  //my swiper2
  const swiper2 = new Swiper(".mySwiper2", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        // 현재 활성 슬라이드 가져오기
        const activeSlide = $(this.slides[this.activeIndex]);
        // 데이터 속성 가져오기
        const title = activeSlide.data("title") || "";
        const subtitle = activeSlide.data("subtitle") || "";
        const link = activeSlide.data("link") || "#";
        const tools = activeSlide.data("tools") || "";

        // 슬라이드 정보 업데이트
        $("#side-text1 h1").text(title);
        $("#side-text1 p").text(subtitle);
        $("#side-text1 .tool").html(tools);

        // 링크 업데이트
        $("#ogwebsite-link2").text("Prototype View").attr("href", link);
      },
    },
  });

  //my swiper 3
  const swiper3 = new Swiper(".mySwiper3", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        // 현재 활성 슬라이드 가져오기
        const activeSlide = $(this.slides[this.activeIndex]);
        // 데이터 속성 가져오기
        const title = activeSlide.data("title") || "";
        const subtitle = activeSlide.data("subtitle") || "";
        const link = activeSlide.data("link") || "#";
        const tools = activeSlide.data("tools") || "";

        // 슬라이드 정보 업데이트
        $("#side-text2 h1").text(title);
        $("#side-text2 p").text(subtitle);
        $("#side-text2 .tool").html(tools);

        // 링크 업데이트
        $("#ogwebsite-link3").text("Original Website").attr("href", link);
      },
    },
  });

  //design swiper
  const swiperDesign = new Swiper(".designswiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination-design",
      clickable: true,
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const swiperDesign = new Swiper(".designswiper", {
    slidesPerView: 3, // 화면에 1개의 슬라이드만 보이도록 설정
    spaceBetween: 40,
    loop: true, // 슬라이드가 반복되도록 설정
    autoplay: {
      delay: 3000, // 슬라이드가 3초마다 자동으로 변경
      disableOnInteraction: false, // 사용자 상호작용에 의해 자동 재생이 중단되지 않도록 설정
    },
    pagination: {
      el: ".swiper-pagination-design",
      clickable: true,
    },
    on: {
      slideChange: function () {
        // 커짐 효과를 위한 추가적인 설정이나 동작이 필요할 경우 이곳에 작성
      },
    },
  });
});

//스크롤 시 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null, // 뷰포트가 루트
    rootMargin: "0px",
    threshold: 0.1, // 요소의 10% 이상이 뷰포트에 나타날 때 감지
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 요소가 화면에 감지되었을 때
        entry.target.classList.add("show");
        // 한 번 애니메이션이 실행되면 더 이상 감지하지 않음
        // observer.unobserve(entry.target);
      }
    });
  }, options);

  // 모든 myswiper 요소들을 감지
  const swiperElements = document.querySelectorAll(
    ".mySwiper1,.mySwiper2,.mySwiper3"
  );
  swiperElements.forEach((element) => {
    observer.observe(element);
  });
});
