import {newSpecPage} from '@stencil/core/testing';
import {SuiButton} from './sui-button';

describe('sui-button', () => {
  it('should render component as expected', async () => {
    // GIVEN
    const {root} = await newSpecPage({
      components: [SuiButton],
      html: `
      <sui-button>
        My <strong>button</strong> title
      </sui-button>
       `,
    });

    // THEN
    expect(root).toEqualHtml(`
      <sui-button>
        <mock:shadow-root>
          <slot />
        </mock:shadow-root>
        My <strong>button</strong> title
      </sui-button>
    `);
  });
});
