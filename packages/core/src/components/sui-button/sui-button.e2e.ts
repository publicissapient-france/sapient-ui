import {newE2EPage} from '@stencil/core/testing';

describe('sui-button', () => {
  it('should apply customized background color', async () => {
    // GIVEN
    const page = await newE2EPage();

    await page.setContent(`
        <sui-button style="--sui-button-background: blue"></sui-button>
    `);
    const element = await page.find('sui-button');

    // THEN
    const style = await element.getComputedStyle();
    expect(style.backgroundColor).toEqualColor('blue')
  });

  it('should apply customized background color on hover', async () => {
    // GIVEN
    const page = await newE2EPage();

    await page.setContent(`
        <sui-button
        style="--sui-button-hover-background: #FF0000">
        </sui-button>
    `);
    const element = await page.find('sui-button');

    // WHEN
    const animationDuration = 300

    await element.hover()
    await page.waitForTimeout(animationDuration)

    // THEN
    const style = await element.getComputedStyle();
    expect(style.backgroundColor).toEqualColor('#FF0000')
  });
});
