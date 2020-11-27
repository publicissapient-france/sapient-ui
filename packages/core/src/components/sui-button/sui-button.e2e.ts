import {newE2EPage} from '@stencil/core/testing';

describe('sui-button', () => {
  it('should apply customized background color', async () => {
    // GIVEN
    const page = await newE2EPage();

    await page.setContent(`
        <sui-button style="--background-default: rgb(200, 0, 0)"></sui-button>
    `);
    const element = await page.find('sui-button');

    // THEN
    const style = await element.getComputedStyle();
    expect(style.backgroundColor).toEqualColor('rgb(200, 0, 0)')
  });

  it('should apply customized background color on hover', async () => {
    // GIVEN
    const page = await newE2EPage();

    await page.setContent(`
        <sui-button
        style="--background-hover: #FF0000">
        </sui-button>
    `);
    const element = await page.find('sui-button');

    // WHEN
    const animation_duration = 300

    await element.hover()
    await page.waitForTimeout(animation_duration)

    // THEN
    const style = await element.getComputedStyle();
    expect(style.backgroundColor).toEqualColor('#FF0000')
  });
});
