import {newE2EPage, newSpecPage} from '@stencil/core/testing';
import {SuiHeadline2} from "./sui-headline2";

describe('sui-headline2', () => {
  it('should render a sui-headline2', async () => {
    const page = await newE2EPage();
    await page.setContent(`<sui-headline2></sui-headline2>`);
    const el = await page.find('sui-headline2');
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  })

  it('should render h2 with slot', async () => {
    const page = await newSpecPage({
      html: `<sui-headline2></sui-headline2>`,
      components: [SuiHeadline2]
    });
    expect(page.root).toEqualHtml(`
            <sui-headline2>
                <mock:shadow-root>
                  <h2>
                      <slot></slot>
                  </h2>
                </mock:shadow-root>
            </sui-headline2>
        `);
  })


  /*
    same test as before with another method

    it('should render h2 with slot', async () => {
      const page = await newE2EPage({
        html: `<sui-headline2></sui-headline2>`
      });
      const el = await page.find('sui-headline2 >>> h2');
      expect(el).not.toBeNull();
    })

   */
})
