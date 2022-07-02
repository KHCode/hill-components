import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hill-navbar',
  styleUrl: 'hill-navbar.css',
  shadow: true,
})
export class HillNavbar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
