function printWithDelay(text, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(text);
      resolve();
    }, delay);
  });
}

printWithDelay('Привіт через 2 секунди!', 2000);