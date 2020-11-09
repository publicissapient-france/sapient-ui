import { Component, getAssetPath, h, Prop } from '@stencil/core';

@Component({
  tag: 'sui-jumbotron',
  styleUrl: 'sui-jumbotron.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class SuiJumbotron {

  @Prop() direction: string
  @Prop() image: string
  @Prop() alt: string
  @Prop() text: string
  @Prop() heading: string

  render() {
    return (
    <div class="item">
      <div class={`inner direction-${this.direction}`}>
        <div class="pane">
          <h2 class="title">{this.heading}</h2>
          <p class="text">{this.text}</p>
        </div>
        <div class="pane">
          <img class="image" src={getAssetPath(`./assets/${this.image}`)} alt={this.alt}/>
        </div>
      </div>
    </div>
    )
  }
}
