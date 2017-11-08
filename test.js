/**
 * http://usejsdoc.org/
 */


console.log('안녕하세요.');

console.log('숫자입니다. %d', 10);

var p = {
    name:'소녀시대',
    age:20
};

console.log('JSON객첵입니다. %j', p);

console.dir(p);

console.time('duration_time');

var result = 0;
for( var i=0; i<10000;i++){
    result += i;
}

console.dir(result);

console.timeEnd('duration_time');

console.log('파일이름 : %s', __filename);
console.log('패스 : %s', __dirname);
