const handlingResponseError = (status) => {
  if (status === 404) {
    return "صفحه مورد نظر وجود ندارد";
  }
  if (status === 422) {
    return "آدرس مورد نظر یافت نشد";
  }
  if (status === 401) {
    return "نام کاربری یا رمز عبور اشتباه است";
  }
};

export default handlingResponseError;
