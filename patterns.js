var module;

(function() {
  var str = '[object Array]',
      toString = Object.prototype.toString;
  
  function isArray(a) {
    return toString.call(a) === str;
  }

  function indexOf(haystack, needle) {
    var i =0,
        max = haystack.length;
    
    for (i; i < max; i += 1) {
      if (haystack[i] === needle) {
        return i;
      }
    }
    return -1;
  }

  module = {
    isArray: isArray,
    indexOf: indexOf
  }

}());

console.log(module.isArray( { a: 2} ));
console.log(module.indexOf(['a', 'b', 'c'], 'z'));
