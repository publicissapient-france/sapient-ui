import {Component, h} from '@stencil/core';

@Component({
  tag: 'sui-headline2',
  styleUrl: 'sui-headline2.scss',
  shadow: true,
})
export class SuiHeadline2 {
  render() {
    return <h2><slot/></h2>;
  }
}
