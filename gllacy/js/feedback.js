    var link = document.querySelector(".map-button");
    var popup = document.querySelector(".overlay");
    var close = popup.querySelector(".modal-close");
    var feedback = popup.querySelector(".modal-feedback");
    var form = popup.querySelector(".feedback-form");
    var userName = popup.querySelector("[name=name]");
    var userEmail = popup.querySelector("[name=email]");
    var userMessage = popup.querySelector("[name=message]");
    var isStorageSupport = true;
    var storageName = "";
    var storageEmail = "";

    try {
      storageName = localStorage.getItem("userName");
      storageEmail = localStorage.getItem("userEmail");
    } catch (err) {
      isStorageSupport = false;
    }

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");

      if (storageName && storageEmail) {
        userName.value = storageName;
        userEmail.value = storageEmail;
        userMessage.focus();
      } else {
        userName.focus();
      }
    });

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      feedback.classList.remove("modal-error");
    });

    form.addEventListener("submit", function (evt) {
      if (!userName.value || !userEmail.value) {
        evt.preventDefault();
        feedback.classList.remove("modal-error");
        feedback.offsetWidth = feedback.offsetWidth;
        feedback.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("userName", userName.value);
          localStorage.setItem("userEmail", userEmail.value);
        }
      }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
          feedback.classList.remove("modal-error");
        }
      }
    });
