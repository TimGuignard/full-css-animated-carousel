import './style.scss';
import { Pane } from 'tweakpane';

const PARAMS = {
  animationEase: 'linear',
  debug: false,
  snap: true,
};

const pane = new Pane();

pane.addBinding(PARAMS, 'animationEase', {
  label: 'Card Ease',
  options: {
    linear: 'linear',
    ease: 'cubic-bezier(.36,0,.69,1)',
    bounce: 'cubic-bezier(.60,-0.60,.34,1.43)',
  },
})
.on('change', (ev) => {
  document.documentElement.style.setProperty('--animation-ease', ev.value);
});

pane.addBinding(PARAMS, 'debug', {
  label: 'Debug Mode'
})
.on('change', (ev) => {
  document.body.classList.toggle('debug', ev.value);
});


pane.addBinding(PARAMS, 'snap', {
  label: 'Snap'
})
.on('change', (ev) => {
  document.documentElement.style.setProperty('--snap', ev.value ? 'x mandatory' : 'none');
});


document.documentElement.style.setProperty('--animation-ease', PARAMS.animationEase);
document.body.classList.toggle('debug', PARAMS.debug);

