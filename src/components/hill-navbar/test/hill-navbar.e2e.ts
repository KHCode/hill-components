import { newE2EPage } from '@stencil/core/testing';

describe('hill-navbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hill-navbar></hill-navbar>');

    const element = await page.find('hill-navbar');
    expect(element).toHaveClass('hydrated');
  });
});
