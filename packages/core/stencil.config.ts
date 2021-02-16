import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from 'stencil-node-sass';

export const config: Config = {
  namespace: 'core',
  globalStyle: 'src/styles/variables.css',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/mixins.scss'
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
   /* {
      type: 'www',
      serviceWorker: null, // disable service workers
    },*/
    {
      type: 'www',
      dir: 'dist',
      copy: [
        { src: 'assets/fonts', dest: 'assets/fonts' }
      ]
    },
    reactOutputTarget({
      componentCorePackage: 'sapient-ui-core',
      proxiesFile: '../react/src/components.ts',
    }),
  ]
};
