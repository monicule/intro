// https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript

function reverseWords(strii) {
    let sakinys = '';
    if (typeof strii === 'string' && strii.length > 0) {
        const zodis = strii.split(' ');
        for (let i = zodis.length - 1; i >= 0; i--) {
            sakinys += zodis[i] + ' '
        }
    }
    return sakinys.trim();
}

console.log(reverseWords("hello world!"                 ),  "world! hello");
console.log(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda");
console.log(reverseWords("foobar"                       ),  "foobar");
console.log(reverseWords("kata editor"                  ),  "editor kata");
console.log(reverseWords("row row row your boat"        ),  "boat your row row row");
console.log(reverseWords(""                             ),  "");


function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }

console.log(reverseWords("hello world!"                 ),  "world! hello");
console.log(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda");
console.log(reverseWords("foobar"                       ),  "foobar");


