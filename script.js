function att(str) {
    let result = str.split(' ');
    let result1 = [];

    for (let i = 0; i < result.length; i++) {
        if (result[i].includes('s')) {
            result1 += result[i].split('').reverse().join('') + ' ';
        } else {
            result1 += result[i] + ' '
        }
    }
    return result1
}

console.log(att("word salom are repus fun")); 

