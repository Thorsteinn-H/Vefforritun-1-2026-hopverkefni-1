document.querySelectorAll(".mobile-menu-toggle").forEach((button) => {
  const menu = document.getElementById(button.getAttribute("aria-controls"));

  if (!menu) {
    return;
  }

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";

    menu.hidden = isOpen;
    button.setAttribute("aria-expanded", String(!isOpen));
    button.setAttribute("aria-label", isOpen ? "Opna valmynd" : "Loka valmynd");
    button.classList.toggle("is-open", !isOpen);
  });
});
