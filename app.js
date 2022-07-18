const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.textContent = 0;

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.textContent;

    const increment = target / 250;

    if (c < target) {
      counter.textContent = `${Math.ceil(c + increment)}`;
      window.setTimeout(updateCounter, 1);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
});
