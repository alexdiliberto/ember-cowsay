import Ember from 'ember';
import layout from '../templates/components/cow-say';

const {
  Component
} = Ember;

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
