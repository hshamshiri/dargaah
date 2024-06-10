export function generateCaptchaToken() {
  return ("" + Math.random()).substring(3);
}
