const { fromJS } = require('immutable');

/**
 * Converts a regular JavaScript object into an Immutable Map.
 * @param {Object} object - The object to convert.
 * @returns {Immutable.Map} - The Immutable Map representation of the object.
 */
function getImmutableObject(object) {
  return fromJS(object);
}

module.exports = getImmutableObject;
