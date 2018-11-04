import Component from '@ember/component';
import layout from '../templates/components/cow-say';

export default Component.extend({
  layout,

  classNames: ['cow-say'],

  altText: 'Cow Say Image',

  cow: `
^__^
(oo)\\_______
(__)\\       )\\/\\
    ||----w |
    ||     ||
  `
});
