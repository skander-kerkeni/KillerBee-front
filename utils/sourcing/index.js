import { encryptSubsitution, decryptSubsitution } from "./subSourcing";
import { encryptTransposition, decryptTransposition } from "./transSourcing";

const alpha = process.env.VUE_APP_OPTION;
const beta = process.env.VUE_APP_LYKIL;

export const delta = (data) => {
    // for (let key in data) {
    data = encryptTransposition(encryptSubsitution(data, alpha), beta, ' ');
    //   }
    console.log("result encrypt", data);
    //   return data;
}

export const gamma = (data) => {
    for (let key in data) {
        console.log("dataKay", data[key]);
        data[key] = decryptTransposition(decryptSubsitution(data[key], alpha), beta, ' ');
      }
      console.log("result decrypt", data);
      return data;
}