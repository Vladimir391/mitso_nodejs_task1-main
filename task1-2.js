module.exports = {
    multiplicationTable: function (N) {
    var arr = [];
    var tempArr = [];
    for (let j = 1; j <= N; j++) {
        for (let i = 1; i <= N; i++) {
            tempArr.push(i*j);
        }
        arr.push(tempArr);
        tempArr = [];
    }
    return arr;
}
}