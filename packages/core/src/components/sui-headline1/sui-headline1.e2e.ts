import {newE2EPage, newSpecPage} from '@stencil/core/testing';
import {SuiHeadline1} from "./sui-headline1";

describe('sui-headline1', () => {
  it('should render a sui-headline1', async () => {
    const page = await newE2EPage();
    await page.setContent(`<sui-headline1></sui-headline1>`);
    const el = await page.find('sui-headline1');
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  })

  it('should render h1 with slot', async () => {
    const page = await newSpecPage({
      html: `<sui-headline1></sui-headline1>`,
      components: [SuiHeadline1]
    });
    expect(page.root).toEqualHtml(`
            <sui-headline1 >
                <mock:shadow-root>
                  <h1>
                      <slot></slot>
                  </h1>
                </mock:shadow-root>
            </sui-headline1>
        `);
  })


  /*
    same test as before with another method

    it('should render h1 with slot', async () => {
      const page = await newE2EPage({
        html: `<sui-headline1></sui-headline1>`
      });
      const el = await page.find('sui-headline1 >>> h1');
      expect(el).not.toBeNull();
    })

   */
})
