import {Component, h} from '@stencil/core';

@Component({
  tag: 'sui-title1',
  styleUrl: 'sui-title1.scss',
  shadow: true,
})
export class SuiTitle1 {
  render() {
    return <h1><slot/></h1>;
  }
}
