import { axiosClient } from "../apiClient";
import handlingResponseError from "./handlingError";

export async function getRequest(url, isCaptcha = false) {
  const result = {
    data: null,
    error: { status: null, msg: null },
  };

  let ACCESS_TOKEN = localStorage.getItem("jwt");
  console.log("***", ACCESS_TOKEN);

  if (isCaptcha) {
    delete axiosClient.defaults.headers.common["Authorization"];
  } else {
    axiosClient.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${ACCESS_TOKEN}`;
  }

  try {
    await axiosClient
      .get(url)
      .then((response) => {
        if (response.data) {
          result.data = response.data;
        }
      })
      .catch(function (error) {
        if (error.response && error.response.status) {
          result.error.status = error.response.status;
          result.error.msg = handlingResponseError(error.response.status);
        }
      });
  } catch (error) {
    result.error.msg = error;
  }

  return result;
}
