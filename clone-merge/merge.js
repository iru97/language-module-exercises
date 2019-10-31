const source = {
    name: 'Iru',
    age: '21',
    language: 'Javascript'
};

const target = {
    surname: 'Hernández',
    age: '35',
    language: 'none'
};


const merge = (a, b) => ({ ...a, ...b });

const result = merge(target, source);
Object.entries(result).forEach(element => {
    console.log(`${element[0]} - ${element[1]}`)
});