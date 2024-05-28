const createFormData = (data) => {
  let formData = new FormData();
  data?.username && formData.append("username", data.username);
  data?.password && formData.append("password", data.password);
  data?.file && formData.append("file", data.file);
  data?.link && formData.append("link", data.link);
  data?.label && formData.append("label", data.label);

  return formData;
};

export default createFormData;
