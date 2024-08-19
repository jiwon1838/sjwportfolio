window.addEventListener("load", function () {
  // 타이핑 애니메이션
  const text = "HELLO, I'M JIWON";
  const typingText = document.getElementById("typing-text");
  let index = 0;
  const typingSpeed = 100; // 타이핑 속도 (밀리초)
  const pauseBetweenLoops = 6000; // 반복 사이의 대기 시간 (밀리초)

  function type() {
    if (index < text.length) {
      typingText.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(resetAndType, pauseBetweenLoops);
    }
  }

  function resetAndType() {
    typingText.innerHTML = "";
    index = 0;
    type();
  }

  type();
  //#section에 왔을 때만 실행
  document.addEventListener("DOMContentLoaded", function () {
    const mainment = document.querySelector(".typewriter");
    const section3 = document.querySelector("#section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 요소가 화면에 보일 때 'show' 클래스 추가
            typewriter.classList.add("show");
          } else {
            // 요소가 화면에서 벗어날 때 'show' 클래스 제거
            typewriter.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.5, // 요소가 50% 이상 보일 때 애니메이션 실행
      }
    );

    observer.observe(section);
  });

  // top 버튼 클릭 시 스크롤 상단으로 이동
  const topButton = document.querySelector("#top-button");
  if (topButton) {
    topButton.addEventListener("click", function () {
      document.body.scrollIntoView({ behavior: "smooth" });
    });
  }

  // AOS 라이브러리 초기화
  AOS.init();

  // 네비게이션 바의 sticky 효과
  const navbar = document.querySelector(".navbar");
  const sticky = navbar.offsetTop;
  let isSticky = false;
  let slideTimeout;
  let isMouseOverNavbar = false;
  let lastMouseMoveTime = 0;

  function makeSticky() {
    if (window.pageYOffset >= sticky && !isSticky) {
      navbar.classList.add("sticky");
      isSticky = true;

      slideTimeout = setTimeout(() => {
        if (!isMouseOverNavbar) {
          navbar.classList.add("slide-up");
        }
      }, 2000);
    } else if (window.pageYOffset < sticky && isSticky) {
      navbar.classList.remove("sticky", "slide-up");
      isSticky = false;
      clearTimeout(slideTimeout);
    }
  }

  window.onscroll = makeSticky;

  window.addEventListener("mousemove", function (event) {
    const now = Date.now();

    if (now - lastMouseMoveTime < 100) return;

    lastMouseMoveTime = now;

    if (event.clientY < 50 && isSticky && !isMouseOverNavbar) {
      navbar.classList.remove("slide-up");
    }
  });

  navbar.addEventListener("mouseenter", function () {
    isMouseOverNavbar = true;
    if (isSticky) navbar.classList.remove("slide-up");
  });

  navbar.addEventListener("mouseleave", function () {
    isMouseOverNavbar = false;
    if (isSticky) navbar.classList.add("slide-up");
  });

  // 클릭 이벤트 애니메이션
  const oneElement = document.querySelector(".one");

  if (oneElement) {
    oneElement.addEventListener("click", function () {
      oneElement.classList.add("rotating");

      setTimeout(function () {
        document
          .querySelector("#section2")
          .scrollIntoView({ behavior: "smooth" });
        oneElement.classList.remove("rotating");
      }, 1000);
    });
  }

  // loop text
  const loopContainer = document.querySelector(".loop-container");
  const loopText = document.querySelector(".loop-text");
  const clone = loopText.cloneNode(true);
  loopContainer.appendChild(clone);
});

//main ment text
document.addEventListener("DOMContentLoaded", function () {
  const mainment = document.querySelector(".mainment");
  const section3 = document.querySelector("#section3");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 요소가 화면에 보일 때 'show' 클래스 추가
          mainment.classList.add("show");
        } else {
          // 요소가 화면에서 벗어날 때 'show' 클래스 제거
          mainment.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.5, // 요소가 50% 이상 보일 때 애니메이션 실행
    }
  );

  observer.observe(section3);
});
