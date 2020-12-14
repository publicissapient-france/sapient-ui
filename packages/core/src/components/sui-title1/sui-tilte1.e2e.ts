import { newE2EPage } from '@stencil/core/testing';

describe('sui-title1', () => {
  it('should render a sui-title1', async () => {
    const page = await newE2EPage();
    await page.setContent(`<sui-title1></sui-title1>`);
    const el = await page.find('sui-title1');
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  })

})
