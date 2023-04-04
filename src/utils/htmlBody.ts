export const cleanHtmlBody = (htmlBody: string): string => {
  return htmlBody.replace(/\\n/g, "<br />");
};
