$(document).ready(function () {
  const $header = $(".header");
  const $section = $("#section");
  const $section1 = $("#section1");
  let scrolledToSection1 = false; // 중복 실행 방지 플래그

  // 페이지 로드 후 5초 동안 헤더 숨기기
  setTimeout(() => {
    $header.addClass("hide");
  }, 5000); // 5초 후 헤더 숨김

  // 헤더를 숨기고 보이게 하는 함수
  function toggleHeader() {
    const sectionOffsetTop = $section.offset().top;
    const sectionHeight = $section.outerHeight();
    const windowScrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    const isSectionVisible =
      windowScrollTop + windowHeight * 0.1 >= sectionOffsetTop &&
      windowScrollTop < sectionOffsetTop + sectionHeight;

    if (isSectionVisible) {
      // #section이 화면에 보일 때 헤더를 숨김
      $header.addClass("hide");
    } else {
      // #section이 화면에서 벗어나면 헤더를 다시 보이게 함
      $header.removeClass("hide");
    }
  }

  // #section이 화면에 보일 때 7초 후 #section1으로 스크롤 이동하는 함수
  function scrollToSection1() {
    const sectionOffsetTop = $section.offset().top;
    const sectionHeight = $section.outerHeight();
    const windowScrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    const isSectionVisible =
      windowScrollTop + windowHeight * 0.1 >= sectionOffsetTop &&
      windowScrollTop < sectionOffsetTop + sectionHeight;

    if (isSectionVisible && !scrolledToSection1) {
      // 7초 후에 #section1으로 스크롤 이동 (한 번만 실행)
      scrolledToSection1 = true;
      setTimeout(() => {
        $("html, body").scrollTop($section1.offset().top); // 부드럽지 않게 즉시 이동
      }, 4000); // 7초 후 #section1으로 스크롤 이동
    }
  }

  // 스크롤 이벤트 핸들러 등록
  $(window).on("scroll", function () {
    toggleHeader(); // 헤더 토글
    scrollToSection1(); // #section1으로 스크롤
  });

  // 초기 스크롤 체크
  toggleHeader();
  scrollToSection1();
});
