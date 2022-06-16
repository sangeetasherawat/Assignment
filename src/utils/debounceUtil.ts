export const debounceSearch = (func, delay) => {
    console.log('gif list calling after delay',delay);
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };