import './render.css';

import { defaultValue } from "./default-value";
class SomeClass {
    constructor(value = defaultValue) {
        this.value = value;
    }

    run() {
        console.log(this.value);
    }
}

export function render() {
    const el = document.createElement('div');
    el.classList.add('text');
    document.getElementsByTagName('body')[0].appendChild(el);
    el.innerHTML = 'hello, world';

    new SomeClass().run();
}
