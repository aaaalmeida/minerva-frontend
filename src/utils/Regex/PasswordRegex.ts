export const minLength = 12
export const specialCharsRegex = RegExp("!@#$%¨&*=+-_()'\"\\/|?");
const PasswordRegex = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%¨&*=+\-_()'"\\/|?])[A-Za-z\d!@#$%¨&*=+\-_()'"\\/|?]{12,}$/);
export default PasswordRegex
