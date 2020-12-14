import { Event, Component, Prop, h, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sui-foo',
})
export class FooComponent {

  @Prop() name: string;
  @Event() clicked: EventEmitter<string>;

  handleClick = () => {
    this.clicked.emit('foo');
  }

  render() {
    return (
      <p onClick={this.handleClick}>
        My name is {this.name}
      </p>
    );
  }
}
