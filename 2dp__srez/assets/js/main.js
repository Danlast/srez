const modal = document.getElementById("make_request");
const form = document.getElementById("make_request_form");
const openModalBtns = document.querySelectorAll("button");
const closeModalBtn = modal.querySelector(".close");

// Модалка
openModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.showModal();
  });
});

closeModalBtn.addEventListener("click", () => {
  modal.close();
});

// Аккордион
document.querySelectorAll(".accordion").forEach((accordion) => {
  const trigger = accordion.querySelector(".accordion__trigger");
  trigger.addEventListener("click", () => {
    accordion.classList.toggle("open");
  });
});

// Форма e-mail
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInput = form.querySelector('input[name="email"]');
  const email = emailInput.value.trim();

  try {
    const response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    modal.close();

    if (response.ok) {
      alert("Заявка успешно отправлена!");
    } else {
      alert("Ошибка при отправке заявки. Попробуйте позже.");
    }
  } catch (error) {
    alert("Сетевая ошибка. Попробуйте позже.");
  }
});
