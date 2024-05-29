import toPersianDigits from "./toPersianDigit";

export function addCustomFuncToBuiltInFunc() {
  String.prototype.toPersianDigits = toPersianDigits;
}
