const decodeTheRing = function (s, p) {
  const helper = (msgIndex, keyIndex) => {
      // If both s (message) and p (decoderKey) are exhausted, return true
      if (msgIndex === s.length && keyIndex === p.length) {
          return true;
      }

      // If only decoderKey (p) is exhausted but message (s) isn't, return false
      if (keyIndex === p.length) {
          return false;
      }

      // Handle '*' wildcard (can match 0 or more characters)
      if (p[keyIndex] === '*') {
          // Try skipping '*' or consuming a character
          return helper(msgIndex, keyIndex + 1) || (msgIndex < s.length && helper(msgIndex + 1, keyIndex));
      }

      
      if (p[keyIndex] === '?') {
          return msgIndex < s.length && helper(msgIndex + 1, keyIndex + 1);
      }

      // If characters in s and p match, move both pointers forward
      if (msgIndex < s.length && s[msgIndex] === p[keyIndex]) {
          return helper(msgIndex + 1, keyIndex + 1);
      }

      // None of the above cases match, return false
      return false;
  };

  return helper(0, 0);
};

module.exports = decodeTheRing;
