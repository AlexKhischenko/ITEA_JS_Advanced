// Debounce function
const debounce = function(fn, ms) {
    let timeout;
    return function () {
      const fnCall = function() {
        fn.apply(this, arguments);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms);
    };
  };