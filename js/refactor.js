// Задачи на работу с чужим кодом.
// Посмотрите на код:
// Что можно улучшить? Как бы вы его переписали?

// function func(s, a, b) {

// 	if (s.match(/^$/)) {
// 		return -1;
// 	}
	
// 	var i = s.length -1;
// 	var aIndex =     -1;
// 	var bIndex =     -1;
	
// 	while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
// 	    if (s.substring(i, i +1) == a) {
// 	    	aIndex = i;
//     	}
// 	    if (s.substring(i, i +1) == b) {
// 	    	bIndex = i;
//     	}
// 	    i = i - 1;
// 	}
	
// 	if (aIndex != -1) {
// 	    if (bIndex == -1) {
// 	        return aIndex;
// 	    }
// 	    else {
// 	        return Math.max(aIndex, bIndex);
// 	    }
// 	}
	
// 	if (bIndex != -1) {
// 	    return bIndex;
// 	}
// 	else {
// 	    return -1;
// 	}
// }

function func(s, a, b) {
	if (s.match(/^$/)) {
		return -1;
	}
	let aIndex = s.lastIndexOf(a);
	let bIndex = s.lastIndexOf(b);
	
	return Math.max(aIndex, bIndex);
}

try {
    test(func, ['ab___ab__', 'a', 'b']);
    test(func, ['___cd____', 'c', 'd']);
    test(func, ['de_______', 'd', 'e']);
    test(func, ['12_12__12', '1', '2']);
    test(func, ['_ba______', 'a', 'b']);
    test(func, ['_a__b____', 'a', 'b']);
    test(func, ['-ab-аb-ab', 'a', 'b']);
    test(func, ['aAa', 'a', 'a']);
    test(func, ['sdgjhgfkjhfg', 'a', 'a']);

    console.info("Congratulations! All tests passed.");
} catch(e) {
    console.error(e);
}

// Простая функция тестирования
function test(call, args, n) {
    let r = (call.apply(n, args));
    console.log(`Found items count: ${r}`);
    if (!r) throw "Test failed!";
}