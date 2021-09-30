

const subsitutionCipher = (input, oldAlphabet, newAlphabet) =>
{
    var output = "";
    const inputLen = input.length;
    if (oldAlphabet.length != newAlphabet.length)
        return false;

    for (let i = 0; i < inputLen; i++)
    {
        var oldCharIndex = oldAlphabet.indexOf(input[i].toLowerCase());

        if (oldCharIndex !== -1) 
            output += input[i] === input[i].toUpperCase ? newAlphabet[oldCharIndex].toUpperCase : newAlphabet[oldCharIndex];
        else
            output += input[i];
    }
    return output;
}

export const encryptSubsitution = (input, cipherAlphabet) =>
{
    const plainAlphabet = "abcdefghijklmnopqrstuvwxyz";
    return subsitutionCipher(input, plainAlphabet, cipherAlphabet);
}

export const decryptSubsitution = (input, cipherAlphabet) =>
{
    const plainAlphabet = "abcdefghijklmnopqrstuvwxyz";
    return subsitutionCipher(input, cipherAlphabet, plainAlphabet);
}