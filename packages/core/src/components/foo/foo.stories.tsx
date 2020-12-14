import { html } from 'lit-html';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { logEvent } from 'storybook-events-logger';

export default {
  title: 'Playground/Foo',
  component: 'sui-foo',
};

export const VanillaWithSimpleActionWay = () => {
  const buttonElement = document.createElement('sui-foo');
  buttonElement.name = text('name', 'hello world');
  buttonElement.addEventListener('clicked', action('clicked'));

  return buttonElement;
};

export const VanillaWithActionDetailsWay = () => {
  const buttonElement = document.createElement('sui-foo');
  buttonElement.name = text('name', 'hello world');
  buttonElement.addEventListener('clicked', event => logEvent(event));

  return buttonElement;
};

export const LitWithSimpleActionWay = () => html`
  <sui-foo name="${text('name', 'hello world')}" @clicked="${action('clicked')}"></sui-foo>
`;

// See results in Events Logger panel
// @see https://github.com/storybookjs/storybook/issues/8375
export const LitWithActionDetailsWay = () => html`
  <sui-foo name="${text('name', 'hello world')}" @clicked="${(event) => logEvent(event)}"></sui-foo>
`;
