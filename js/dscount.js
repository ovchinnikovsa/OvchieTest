"use strict";

// Написать функцию dscount, которая подсчитывает количество идущих подряд символов s1 и s2 в строке, 
// без учёта регистра. Функция должна пройти следующие тесты, как минимум:

// let str1 = 'aaa';
// console.log(str1[search_pos_for_s1+1].indexOf());


// Yor code here ...
function dscount(str, s1, s2) {
    str = str.toLowerCase();
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    let pos = 0;
    let count = 0;

    while (true) {
        let search_pos_for_s1 = str.indexOf(s1, pos);
        let search_pos_for_s2 = str.lastIndexOf(s2, search_pos_for_s1+1);

        if (search_pos_for_s1 == -1) break;

        if (search_pos_for_s2 !== -1 && search_pos_for_s2 > search_pos_for_s1) count++;

        pos = search_pos_for_s1 + 1;
    }

    return count
}
// ... //

// Для удобства можно использовать эти тесты:
try {
    test(dscount, ['ab___ab__', 'a', 'b'], 2);
    test(dscount, ['___cd____', 'c', 'd'], 1);
    test(dscount, ['de_______', 'd', 'e'], 1);
    test(dscount, ['12_12__12', '1', '2'], 3);
    test(dscount, ['_ba______', 'a', 'b'], 0);
    test(dscount, ['_a__b____', 'a', 'b'], 0);
    test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
    test(dscount, ['aAa', 'a', 'a'], 2);

    console.info("Congratulations! All tests passed.");
} catch(e) {
    console.error(e);
}

// Простая функция тестирования
function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Found items count: ${count}`);
    if (!r) throw "Test failed!";
}