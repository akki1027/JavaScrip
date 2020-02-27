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


// [6-3]

// 関数
function addString(strA){
	var addStr = "Hello " + strA;
	return addStr;
}

// メイン部分
var alertString;
alertString = addString("WebCamp");

// 作成した関数を呼び出す
alert(alertString);

// 複数の関数で表示できるようにする
// 入力ダイアログで値を入力する
var promptStr = prompt('何か好きな文字を入力してください。');

alert(promptStr);


// 複数の関数を定義する
// じゃんけんの手を入力する
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while((user_hand != "グー")&&(user_hand != "チョキ")&&(user_hand != "パー")&&(user_hand != null)){
	alert('グー・チョキ・パーのいずれかを入力して下さい');
	user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}

// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);

// 結果を表示する
if(user_hand!=null){
	alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
	alert('またチャレンジしてね');
}


// ランダムでじゃんけんの手を作成する関数
function getJShand(){
	var js_hand_num = Math.floor( Math.random() * 3 );
	var hand_name;

	if(js_hand_num == 0){
		hand_name = "グー";
	} else if(js_hand_num == 1){
		hand_name = "チョキ";
	} else if(js_hand_num == 2){
		hand_name = "パー";
	}

	return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
	var winLoseStr;

	if(user == "グー"){
		if(js == "グー"){
			winLoseStr = "あいこ";
		}else if(js == "チョキ"){
			winLoseStr = "勝ち";
		}else if (js == "パー"){
			winLoseStr = "負け";
		}
	}else if (user == "チョキ"){
		if(js == "グー"){
			winLoseStr = "負け";
		}else if(js == "チョキ"){
			winLoseStr = "あいこ";
		}else if(js == "パー"){
			winLoseStr = "勝ち";
		}
	}else if (user == "パー"){
		if(js == "グー"){
			winLoseStr = "勝ち";
		}else if(js == "チョキ"){
			winLoseStr = "負け";
		}else if(js == "パー"){
			winLoseStr = "あいこ";
		}
	}

	return winLoseStr;
}


