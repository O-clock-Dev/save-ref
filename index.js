module.exports = instance => ref => (node) => {
  instance[ref] = node;
};
