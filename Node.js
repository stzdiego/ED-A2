const Person = require('./Person');

class Node {
    constructor(person) {
        this.person = person;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }

    isDad() {
        return this.children.length > 0;
    }
}

module.exports = Node;