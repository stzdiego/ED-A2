const Person = require('./Person');
const Node = require('./Node');

function main() {
    
    //Creare persons
    const son = new Person('Juan Santacruz', new Date('2013-06-07'));
    const daughter = new Person('Sara Santacruz', new Date('2019-12-12'));
    const my = new Person('Diego Santacruz', new Date('1995-06-07'));
    const sister1 = new Person('Dahyana Santacruz', new Date('1990-12-12'));
    const sister2 = new Person('Johanna Santacruz', new Date('1988-05-05'));
    const sister3 = new Person('Vanessa Santacruz', new Date('2000-07-07'));
    const dad = new Person('Armando Santacruz', new Date('1969-10-04'));
    const uncle1 = new Person('Milton Santacruz', new Date('1967-09-09'));
    const uncle2 = new Person('Yamileth Santacruz', new Date('1970-01-01'));
    const grandpa = new Person('Luis Santacruz', new Date('1945-11-15'));

    //Create nodes
    const sonNode = new Node(son);
    const daughterNode = new Node(daughter);
    const myNode = new Node(my);
    const sister1Node = new Node(sister1);
    const sister2Node = new Node(sister2);
    const sister3Node = new Node(sister3);
    const dadNode = new Node(dad);
    const uncle1Node = new Node(uncle1);
    const uncle2Node = new Node(uncle2);
    const grandpaNode = new Node(grandpa);

    //Create tree
    grandpaNode.addChild(dadNode);
    grandpaNode.addChild(uncle1Node);
    grandpaNode.addChild(uncle2Node);
    dadNode.addChild(myNode);
    dadNode.addChild(sister1Node);
    dadNode.addChild(sister2Node);
    dadNode.addChild(sister3Node);
    myNode.addChild(sonNode);
    myNode.addChild(daughterNode);

    //Print tree
    printFamilyTree(grandpaNode);
}

function printFamilyTree(node, indent = 0) {
    console.log(' '.repeat(indent) + node.person.fullName + ' (' + node.person.brithDate + ')');
    node.children.forEach(child => printFamilyTree(child, indent + 2));
}

main();