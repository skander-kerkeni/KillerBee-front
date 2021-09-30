var chars = "abcdefghijklmnopqrstuvwxyz";

export const encryptTransposition = (plaintext, key, pc) => {
    key = key.toLowerCase();
    var klen = key.length;
    if (pc == "") pc = "x";
    while (plaintext.length % klen != 0) {
        plaintext += pc.charAt(0);
    }
    var colLength = plaintext.length / klen;
    var ciphertext = "";
    var k = 0;
    for (let i = 0; i < klen; i++) {
        while (k < 26) {
            var t = key.indexOf(chars.charAt(k));
            var arrkw = key.split("");
            arrkw[t] = "_";
            key = arrkw.join("");
            if (t >= 0) break;
            else k++;
        }
        for (let j = 0; j < colLength; j++) {
            ciphertext += plaintext.charAt(j * klen + t);
        }
    }
    return ciphertext;
}

export const decryptTransposition = (ciphertext, key) => {
    key = key.toLowerCase();
    var klen = key.length;
    if (klen <= 1) {
        alert("keyword should be at least 2 characters long");
        return;
    }
    if (ciphertext.length % klen != 0) {
        alert("ciphertext has not been padded, the result may be incorrect (incorrect keyword?).");
    }
    // first we put the text into columns based on keyword length
    var cols = new Array(klen);
    var colLength = ciphertext.length / klen;
    for (let i = 0; i < klen; i++) cols[i] = ciphertext.substr(i * colLength, colLength);
    // now we rearrange the columns so that they are in their unscrambled state
    var newcols = new Array(klen);
    let j = 0;
    let i = 0;
    while (j < klen) {
        var t = key.indexOf(chars.charAt(i));
        if (t >= 0) {
            newcols[t] = cols[j++];
            var arrkw = key.split("");
            arrkw[t] = "_";
            key = arrkw.join("");
        } else i++;
    }
    // now read off the columns row-wise
    var plaintext = "";
    for (i = 0; i < colLength; i++) {
        for (j = 0; j < klen; j++) {
            plaintext += newcols[j].charAt(i);
        }
    }
    return plaintext;
}