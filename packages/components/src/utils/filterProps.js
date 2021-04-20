const filterProps = (props, excludeList) => {
  if (typeof props !== 'object') {
    console.error('filterProps expects props to be an object. Returned what was passed.');
    return props;
  }

  if (typeof excludeList === 'undefined') return props;

  const excludeListNotAllStrings = excludeList.some(value => typeof value !== 'string');
  if (excludeListNotAllStrings) {
    console.error('filterProps expects excludeList to be an array of strings. Returned unfiltered props');
    return props;
  }

  return Object.keys(props).reduce((acc, key) => {
    if (!excludeList.includes(key)) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
};

export default filterProps;
