import Ember from 'ember';
import layout from '../templates/components/cow-say';

export default Ember.Component.extend({
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
