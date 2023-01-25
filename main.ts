export const securePhoneNumbers = (text:string) => {
  let regex = /09[0-9]{9}/g;
  let number = text.match(regex);
  if (number != null) {
    for (let item of number) {
      let text_f = text.replace(item.slice(4, 7), "***");
      return text_f;
    }
  } else {
    return text;
  }
}