const regexList = {
  mobile: "^(\\+98|0)?9\\d{9}$",
  usernameCharacterType: "^[a-zA-Z0-9]{4,10}$",   //[!@#$%^&*()_+]/,
  usernameCharacterLength:"^\w{5,10}$",
  password:/[!@#$%^&*()_+]/,
};

export default regexList;
