const courseItem = document.querySelectorAll(`.course-dropdown__item`),
  faqItem = document.querySelectorAll(`.faq-item`);

courseItem.forEach((i) => {
  i.addEventListener(`click`, () => {
    i.classList.toggle(`active`)
  });
});
faqItem.forEach((i) => {
    i.addEventListener(`click`, () => {
      i.classList.toggle(`active`)
    });
  });
  