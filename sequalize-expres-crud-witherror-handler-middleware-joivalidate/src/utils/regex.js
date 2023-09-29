

 const uuidChecker = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

 const phoneNumberChecker  =  new RegExp(/^\+998\d{9}$/);

/*

Uzbekiston telifon raqamlari uchun regex

var regex = /^\+998\d{9}$/;

Raqamni tekshirish

var raqam = "+998901234567"; // Raqamni o'zgartirib sinab ko'ring
if (regex.test(raqam)) {
    console.log("Raqam to'g'ri formatda");
} else {
    console.log("Raqam noto'g'ri formatda");
}

*/




 export { 
  uuidChecker,

 }