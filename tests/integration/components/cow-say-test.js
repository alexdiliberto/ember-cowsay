import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | cow say', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a default cow-say block component', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{#cow-say}}
        Ember Cowsay!!!
      {{/cow-say}}
    `);

    assert.dom('.cow-say-speech-bubble').hasText('Ember Cowsay!!!');
    assert.dom('.cow-say-cow').exists({ count: 1 });
  });
});
