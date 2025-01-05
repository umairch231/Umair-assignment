document.addEventListener("DOMContentLoaded", function () {
  const firstPage = document.getElementById("fitness-quiz-first-section");
  const womenPage = document.getElementById("women-page");
  const menPage = document.getElementById("men-page");

  const womenLink = document.getElementById("women-link");
  const menLink = document.getElementById("men-link");

  const backToFirstWomen = document.getElementById("back-to-first-women");
  const backToFirstMen = document.getElementById("back-to-first-men");

  womenLink.addEventListener("click", function (e) {
    e.preventDefault();
    firstPage.classList.add("hidden");
    womenPage.classList.remove("hidden");
  });

  menLink.addEventListener("click", function (e) {
    e.preventDefault();
    firstPage.classList.add("hidden");
    menPage.classList.remove("hidden");
  });

  backToFirstWomen.addEventListener("click", function () {
    womenPage.classList.add("hidden");
    firstPage.classList.remove("hidden");
  });

  backToFirstMen.addEventListener("click", function () {
    menPage.classList.add("hidden");
    firstPage.classList.remove("hidden");
  });
});


const pages = document.querySelectorAll('.page');
const progress = document.getElementById('progress');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentPage = 0;

function updateProgress() {
  progress.style.width = ((currentPage + 1) / pages.length) * 100 + '%';
}

function updatePage() {
  pages.forEach((page, index) => {
    page.classList.toggle('active', index === currentPage);
  });
  prevButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === pages.length - 1;
}

nextButton.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updateProgress();
    updatePage();
  }
});

prevButton.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updateProgress();
    updatePage();
  }
});

function selectOption(selectedElement) {
  const options = document.querySelectorAll('.option');
  options.forEach(option => option.classList.remove('selected'));
  selectedElement.classList.add('selected');
}