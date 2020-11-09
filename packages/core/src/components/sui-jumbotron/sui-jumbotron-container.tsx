import { Component, h } from '@stencil/core';
import jumboData from '../../fixtures/jumbo.json'

console.log(jumboData);

@Component({
  tag: 'sui-jumbo-container',
  styleUrl: 'sui-jumbotron.css',
  shadow: true,
})

export class SuiJumboContainer {

  render() {
    return (
      <div class="container">
        <h2 class="container-title">Jumbotron Component</h2>
        {jumboData.map((item) => (
          <sui-jumbotron key={item.gid} {...item}/>
        ))}
      </div>
    )
  }
}
