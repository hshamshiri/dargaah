const regexList = {
  mobile: "^(\\+98|0)?9\\d{9}$",
  usernameCharacterType: "^[a-zA-Z0-9]{4,20}$", //[!@#$%^&*()_+]/,
  usernameCharacterLength: "^w{5,10}$",
  //password: /[!@#$%^&*()_+]/,
  password: "^[a-zA-Z0-9._]$",
  mail: "^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
};

export default regexList;
