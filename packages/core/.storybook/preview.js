import { defineCustomElements, applyPolyfills } from '../loader'

applyPolyfills().then(() => {
  defineCustomElements();
});


const customViewports = {
  phone: {
    name: 'Phone - iPhone X',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  tablet: {
    name: 'Tablet - Ipad',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  desktop: {
    name: 'Desktop - Ipad Pro',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: customViewports
  }
}

