// [6-2]

// 変数の書き方
var hello ="Hello, World";
alert(hello);

var init = 1;
var init = -10;
var init = 3.14;
var init = 'JavaScriptを覚えよう';

// 四則演算の書き方
alert(4 + 3);

alert(8 - 5);

alert(2 * 6);

alert(10 / 2);

// 文字列を結合する
alert("Hello" + "World");

var str1 = 'Hello';
var str2 = 'World!!';
alert(str1 + str2);

// if文(条件分岐)
var orange = 100;
var apple = 120;
 if (orange < apple){
 	alert('みかんの値段がりんごより安い');
 } else if (orange == apple){
 	alert('みかんとりんごの値段が同じ');
 } else {
 	alert('みかんの値段がりんごより高い');
 }

 // while文
 var max = 100;
 var num = 1;
 var count = 0;
while(num < max){
	num = num * 2;
	count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// do...while文]
// while文にはもう1つ、「do...while文」があります。
// while文では、条件式がtrueの間は、制限なく繰り返し処理が行われました。
// 一方、do...while文では、条件式のtrue／falseに関わらず、最初の1回だけは必ず処理が行われます。
// その後、条件式を評価して、繰り返し処理を続けるか／抜けるかを決めていきます。

// 【do...while文の記述】

// do{
//     最低1回は行われる処理
// }while(条件式);


// for文
var i;
var num = 0;
for(i=1; i < 11; i++){
	num = num + 1;
}


alert('1から10まで足し算した結果は' + num + 'です');


