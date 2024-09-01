// Faqs
const questions = document.querySelectorAll(".questions");

questions.forEach((question) => {
  const btn = question;
  btn.addEventListener("click", function () {
    const ans = question.querySelector(".answer");
    ans.classList.toggle("active");

    // Close all other answers
    questions.forEach((otherItem) => {
      if (otherItem !== question) {
        otherItem.querySelector(".answer").classList.remove("active");
      }
    });
  });
});

//----------------------------------------------------------

let goUpBtn = document.getElementById("goUpBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goUpBtn.style.display = "block";
  } else {
    goUpBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//----------------------------------------------------------
