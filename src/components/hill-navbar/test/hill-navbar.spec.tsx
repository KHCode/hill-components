import { newSpecPage } from '@stencil/core/testing';
import { HillNavbar } from '../hill-navbar';

describe('hill-navbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HillNavbar],
      html: `<hill-navbar></hill-navbar>`,
    });
    expect(page.root).toEqualHtml(`
      <hill-navbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hill-navbar>
    `);
  });
});
