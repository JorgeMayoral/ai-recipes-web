export const normalizeText = (text: string): string => {
  let normalizedText = text.replaceAll('_', ' ');
  return normalizedText;
};
