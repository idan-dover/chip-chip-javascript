export const fromCamelCaseToSentence = (camelCase) => {
  const words = camelCase.replace(/([a-z])([A-Z])/g, "$1 $2").split(/[\s_-]+/);

  words[0] = words[0][0].toUpperCase() + words[0].slice(1);

  const sentence = words.join(" ");

  return sentence;
};
