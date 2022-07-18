"use strict";

const incrementFraction = 250;

const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.textContent = 0;

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const counterValue = +counter.textContent;

    const increment = target / incrementFraction;

    if (counterValue < target) {
      counter.textContent = `${Math.ceil(counterValue + increment)}`;
      window.setTimeout(updateCounter, 1);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
});
