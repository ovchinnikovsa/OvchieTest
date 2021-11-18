"use strict";

// Есть 2 сковороды для оладьев, каждая из которых вмещает ровно по 1 блинчику за 1 раз.
// Есть 3 панкейка (блинчика), которые надо пожарить.
// За 1 минуту жарится 1 сторона блинчика.
// Блинчики надо обжарить с 2х сторон.
// Итерацией считать процесс жарки 1й стороны 2х блинчиков на 2х сковородах. Сколько нужно времени (итераций) при оптимальном распределении чтобы пожарить 3 панкейка?
// Релизуйте ваш алгоритм в виде кода. Это может быть как ООП код, так и функциональный и даже процедурный. Выбор подхода обоснуйте.
// Обязательно опишите алгоритм, как бы вы решали эту задачу в физическом мире (в какой момент и как жарили бы эти блинчики).

let number_of_pans = 2;
let number_of_pancakes = 300;
const sides = 2;
let time_to_fry = 1;
let capacity_of_pans = 1;

function fry(){
    return (number_of_pancakes * sides * time_to_fry) / (number_of_pans * capacity_of_pans);
}

console.log(fry() + " minutes");

// P.S. idk ¯\_(ツ)_/¯