import {Component, h} from '@stencil/core';

@Component({
  tag: 'sui-button',
  styleUrl: 'sui-button.scss',
  shadow: true,
})
export class SuiButton {
  render() {
    return <slot />;
  }
}
