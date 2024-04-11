import './render.css';
import { animate } from 'framer-motion/dom';

export function render() {
    const el = document.createElement('div');
    el.classList.add('text');
    document.getElementsByTagName('body')[0].appendChild(el);
    el.innerHTML = 'hello, world';

    animate(el, { color: ['#00f', '#f00'] }, { duration: 10 });
}
