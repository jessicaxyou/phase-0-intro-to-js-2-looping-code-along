
function writeCards(names, event) {
    let list = []
    for(let i=0; i < names.length; i++) {
        list.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return list
}

writeCards(names)


function countDown(integer) {
    let i = integer;
    while (i > -1) {
        console.log(i);
        i--;
    }
}