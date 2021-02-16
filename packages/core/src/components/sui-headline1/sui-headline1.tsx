import {Component, h} from '@stencil/core';

@Component({
  tag: 'sui-headline1',
  styleUrl: 'sui-headline1.scss',
  shadow: true,
})
export class SuiHeadline1 {
  render() {
    return <h1><slot/></h1>;
  }
}
