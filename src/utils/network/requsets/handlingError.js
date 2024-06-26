const handlingResponseError = (status) => {
  if (status === 404) {
    return "صفحه مورد نظر وجود ندارد";
  }
  if (status === 422) {
    return "آدرس مورد نظر یافت نشد";
  }
  if (status === 401) {
    return "لطفا دوباره وارد شوید";
  }
};

export default handlingResponseError;
