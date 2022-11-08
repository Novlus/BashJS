import test from 'ava';

// import {addScore, createFile, positonScore, getScore, reset_score, run} from './base.mjs'
import {reset_score, setDifficulty, ouiNon, addScore} from './base.mjs'


// test('test reset score', async t => {
//     let score = sessionStorage
// 	score.setItem("test", 1);
//     reset_score(score);
// 	t.is(score, [])
// });

// test('test add score', async t => {
//     let score = sessionStorage
// 	addScore(score, "Test", 1);
// 	t.is(scores["Test"], 1);
// });

test('test oui non', async t => {
    let test = ouiNon("o")
    t.is(test, true);
})

test('test set difficulty', async t => {
    let level1 = setDifficulty(1)
    let level2 = setDifficulty(2)
    let level3 = setDifficulty(3)
    t.is(level1, 15)
    t.is(level2, 10)
    t.is(level3, 5)
})