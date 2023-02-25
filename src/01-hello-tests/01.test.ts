import {splitInWords, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {

    //action
    const result =sum(a, b)

    //expect result
    expect(result).toBe(3);
})

test('splitting into words should be correct', ()=> {
    //data
    const sentence1 = "Hello my friend!";
    const sentence2 = "JS - the best programming language"

    //action
    const result1 = splitInWords(sentence1)
    const result2 = splitInWords(sentence2)

    //expect result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')

    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe("the")
    expect(result2[2]).toBe("best")
})