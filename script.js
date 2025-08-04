const readMoreBtn = document.querySelector(".read-more-btn");
      const textContent = document.querySelector(".text-content");

      readMoreBtn.addEventListener("click", function () {
        textContent.classList.toggle("expanded");

        if (textContent.classList.contains("expanded")) {
          readMoreBtn.textContent = "Read Less";
        } else {
          readMoreBtn.textContent = "Read More";
        }
      });

