const isObject = obj => typeof obj === 'object' && obj !== null;
export const MIN_MULTIPLIER = 0.0;
export const MAX_MULTIPLIER = 3.0;

const applyPadding = (value, constrainedMultiplier, validatedCharacter) => {
  const valueLength = value.length;
  const totalPadLength = Math.ceil(valueLength * constrainedMultiplier);
  const oneSidePadLength = Math.max(Math.ceil(totalPadLength / 2), 1);
  const leftPadChar = validatedCharacter || '⇚';
  const rightPadChar = validatedCharacter || '⇛';

  const leftPad = leftPadChar.repeat(oneSidePadLength);
  const rightPad = rightPadChar.repeat(oneSidePadLength);

  // https://github.com/eslint/eslint/issues/8581
  return `${leftPad}${value}${rightPad}`;
};

const traverseMessagesObj = (msgObj, constrainedMultiplier, validatedCharacter) => {
  if (typeof msgObj === 'string') {
    return applyPadding(msgObj, constrainedMultiplier, validatedCharacter);
  }
  if (Array.isArray(msgObj)) {
    return msgObj.map(item => traverseMessagesObj(item, constrainedMultiplier, validatedCharacter));
  }
  if (isObject(msgObj)) {
    return Object.keys(msgObj).reduce(
      (acc, key) => ({
        ...acc,
        [key]: traverseMessagesObj(msgObj[key], constrainedMultiplier, validatedCharacter)
      }),
      {}
    );
  }
  return msgObj;
};

export const validateCharacter = character => {
  let validatedChar = character;

  if (character && character.length > 1) {
    // eslint-disable-next-line no-console
    console.warn(
      `padMessages: The \`character\` option only supports a single character. Only first character of the provided string will be used.`
    );

    // This DOES NOT WORK for multibyte characters and will behave in unpredictable ways.
    // A good explaination of how hard mutlibyte support is can be found here:
    // https://coolaj86.com/articles/how-to-count-unicode-characters-in-javascript/
    validatedChar = character.charAt(0);
  }

  return validatedChar;
};

export const validateMultiplier = (multiplier = 0.4) => {
  const constrainedMultiplier = Math.min(Math.max(MIN_MULTIPLIER, multiplier), MAX_MULTIPLIER);

  const multiplierWarnMsg = (val, min, max) => {
    let minMaxStr;
    if (val > max) minMaxStr = 'Max';
    if (val < min) minMaxStr = 'Min';

    let minMaxVal;
    if (val > max) minMaxVal = max;
    if (val < min) minMaxVal = min;

    const minMaxPcnt = parseInt(minMaxVal * 100, 10);
    // eslint-disable-next-line no-console
    console.warn(
      `padMessages: ${minMaxStr} allowed multiplier is ${minMaxVal}, (or ${minMaxPcnt}%). ${minMaxStr} was used instead of requested value of ${multiplier}.`
    );
  };

  if (multiplier > MAX_MULTIPLIER || multiplier < MIN_MULTIPLIER) {
    multiplierWarnMsg(multiplier, MIN_MULTIPLIER, MAX_MULTIPLIER);
  }

  return constrainedMultiplier;
};

/**
 * Wraps the string values of a messages object in padding characters; arrows, by default.
 * @param {Object} msgObj - The data that should be wrapped with arrows. Can contain other objects and even arrays of strings.
 * @param {Object} [config] - Optional configuration object.
 * @param {number} [config.multiplier=0.4] - Min: 0.0; Max 3.0; Number of arrows to be added, as a multiplier of the character count of the source string. (e.g. 'characters' with growthRate of 0.4 would get two arrows on each side, for a total of 4 added arrow characters)
 * @param {string} [config.character] - Max length: 1; Custom character to use as padding. Defaults to traditional arrows characters.
 */
const padMessages = (msgObj = {}, config = {}) => {
  if (!isObject(msgObj)) {
    // eslint-disable-next-line no-console
    console.warn(
      'Could not generate arrows language. Source messages were either not provided, or were not in the form of an object.'
    );
    return msgObj;
  }

  const { multiplier, character } = config;

  return traverseMessagesObj(msgObj, validateMultiplier(multiplier), validateCharacter(character));
};

export default padMessages;
