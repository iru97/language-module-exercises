const objExample = {
    name: 'Iru',
    'age': '21',
    language: 'Javascript'
};

const clone = (source) => ({ ...source });
const objectCloned = clone(objExample);
console.log(`Original object - name: ${objExample.name} age: ${objExample.age} language: ${objExample.language}`);
console.log(`Cloned object - name: ${objectCloned.name} age: ${objectCloned.age} language: ${objectCloned.language}`);
objectCloned.language = 'Typescript';
console.log(`Original after change - name: ${objExample.name} age: ${objExample.age} language: ${objExample.language}`);
console.log(`Cloned after change - name: ${objectCloned.name} age: ${objectCloned.age} language: ${objectCloned.language}`);