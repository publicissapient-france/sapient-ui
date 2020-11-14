import { defineCustomElements, applyPolyfills } from '../loader'

applyPolyfills().then(() => {
  defineCustomElements();
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
