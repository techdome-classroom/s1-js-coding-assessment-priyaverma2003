const decodeTheRing = function (s, p) {
  const helper = (msgIndex, keyIndex) => {
     
      if (msgIndex === s.length && keyIndex === p.length) {
          return true;
      }

     
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

     
      if (msgIndex < s.length && s[msgIndex] === p[keyIndex]) {
          return helper(msgIndex + 1, keyIndex + 1);
      }

     
      return false;
  };

  return helper(0, 0);
};

module.exports = decodeTheRing;
