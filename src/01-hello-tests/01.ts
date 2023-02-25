export function splitInWords(sentence: string) {
    // return ['hello', 'my',' friend!']
    const words = sentence.toLowerCase().split(" ")
    return words.filter(w => w !== " " && w !== "-")
        .filter(w => w!== "")
        .map(w => w
            .replace('!','')
            .replace(".","")
            .replace("-",""))
}

export function sum (a:number, b: number){
    return a + b
}

export function mult (a:number, b: number){
    return a * b
}