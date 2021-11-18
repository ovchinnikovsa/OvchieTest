// Что можно улучшить? Как бы вы переписали функцию drawRating при условии 
// что на вход функции drawRating должна приходить переменная vote, содержащая значение от 0 до 100.
// Интересует именно логика реализации функции, не визуальное отображение звезд.

// function drawRating(vote) {
// 	if (vote >= 0 && vote <= 20) {
//     	return '★☆☆☆☆';
// 	}
// 	else if (vote > 20 && vote <= 40) {
// 		return '★★☆☆☆';
// 	}
// 	else if (vote > 40 && vote <= 60) {
// 		return '★★★☆☆';
// 	}
// 	else if (vote > 60 && vote <= 80) {
// 		return '★★★★☆';
// 	}
// 	else if (vote > 80 && vote <= 100) {
// 		return '★★★★★';
// 	}
// }

function drawRating(vote) {
	let ratio_of_votes = Math.floor(vote / 20) + 1;
    let filled_star = '★';
    let empty_star = '☆';
    let result = '';
    
    result += filled_star.repeat(ratio_of_votes);
    result += empty_star.repeat(5 - ratio_of_votes);

    return result;
}

// Проверка работы результата
console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★