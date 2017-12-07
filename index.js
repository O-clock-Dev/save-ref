module.exports = function(instance) {
  return function(ref) {
     return function(node) {
       instance[ref] = node;
     };
  };
};
