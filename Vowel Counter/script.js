var vowelCount = document.getElementById('vowelCount');
function getVowelCount(str) {
    str = str.toLowerCase();
    let vowArr = ['a', 'e', 'i', 'o', 'u'],
        count = 0;
    for(let letter of str){
        if(vowArr.includes(letter)){
            count++;
        }
    }
    vowelCount.innerHTML = count;
}