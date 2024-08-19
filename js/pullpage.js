document.addEventListener("DOMContentLoaded", function () {
  // 섹션 ID를 배열로 관리
  const sections = [ㄴ
    "section1",
    "section2",
    "section3",
    "section4",
    "contact",
  ];

  let currentSectionIndex = 0;
  let isScrolling = false; // 스크롤 중인지 체크

  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      const section = document.getElementById(sections[index]);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        currentSectionIndex = index;
      }
    }
  }

  // 휠 이벤트로 섹션 이동
  document.addEventListener("wheel", function (event) {
    if (isScrolling) return; // 스크롤 중이면 동작하지 않음
    isScrolling = true; // 스크롤 시작

    requestAnimationFrame(() => {
      setTimeout(() => {
        isScrolling = false; // 일정 시간 후 스크롤 종료
      }, 1000); // 1초 동안 스크롤 중 상태 유지

      if (event.deltaY > 0) {
        // 아래로 스크롤
        if (currentSectionIndex < sections.length - 1) {
          scrollToSection(currentSectionIndex + 1);
        }
      } else {
        // 위로 스크롤
        if (currentSectionIndex > 0) {
          scrollToSection(currentSectionIndex - 1);
        }
      }
    });
  });
});
