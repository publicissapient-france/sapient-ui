import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from 'stencil-node-sass';

export const config: Config = {
  namespace: 'core',
  globalStyle: 'src/global/styles/variables.css',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/styles/mixins.scss'
      ]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'sapient-ui-core',
      proxiesFile: '../react/src/components.ts',
    }),
  ]
};
