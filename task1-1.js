module.exports = {
    duplicateEncode: function (word) {
    word = word.toLowerCase();
    var word = word.split('');
    var result = "";
    for (let i = 0; i < word.length; i++) {
        if (word.indexOf(word[i])==word.lastIndexOf(word[i])) {
           result+=word[i];
        }
        else
        {
            result+=")";
        }
    }
    word = result.split('');
    result = "";
    for (let i = 0; i < word.length; i++) {
            if (word[i]!=")") {
                result+="(";
            }
            else
            {
                result+=word[i];
            }

    }
    return result;
}
}