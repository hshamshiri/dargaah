import { APIs, BASE_URL } from "../../network/apiClient";

export default function GenerateNewCaptchaUrl(captchaToken) {
  return BASE_URL + APIs.captcha.getCaptcha + captchaToken;
}
