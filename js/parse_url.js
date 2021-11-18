// Реализуйте функцию parseUrl(string), которая будет парсить URL строку и возвращать объект с распарсенными данными. Пример:

let a = parseUrl('http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')

// Вернет объект, в котором будут следующие свойства:
console.log( a.href == "http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" )
console.log( a.hash == "#foo" )
console.log( a.port == "8080" )
console.log( a.host == "tutu.ru:8080" )
console.log( a.protocol == "http:" )
console.log( a.hostname == "tutu.ru" )
console.log( a.pathname == "/do/any.php" )
console.log( a.origin == "http://tutu.ru:8080" )
// Желательно задачу решить как можно меньшим числом строк кода и затратив на реализацию минимум времени.

function parseUrl(url) {
    let result = new Object();
    let colon_with_two_slashes = url.indexOf('://');
    let colon = url.indexOf(':', colon_with_two_slashes + 1);
    let first_slash =  url.indexOf('/', colon_with_two_slashes + 3);
    let is_url_have_port = colon !== -1;
    let question_mark = url.indexOf('?');
    let hash_symbol = url.indexOf('#');

    result.href = url;
    result.hash = url.substring(hash_symbol);
    result.port = is_url_have_port ? url.substring(colon+1, first_slash) : 'port not founded';
    result.host = url.substring(colon_with_two_slashes + 3, first_slash);
    result.protocol = url.substring(0, colon_with_two_slashes+1);
    result.hostname = url.substring(colon_with_two_slashes + 3, is_url_have_port ? colon : first_slash);
    result.pathname = url.substring(first_slash, question_mark);
    result.origin = url.substring(0, first_slash);

    return result;
}