import {AssetSource, defineConfig, isDev} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';
import Logo from './components/Logo';
import { getDefaultDocumentNode } from './structure';

// import {structure} from './sanity-blog/desk'

// import {colorInput} from '@sanity/color-input'
// import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'
// import {media, mediaAssetSource} from 'sanity-plugin-media'
// import {customDocumentActions} from './sanity-blog/plugins/customDocumentActions'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

// const devOnlyPlugins = [visionTool()]

export default defineConfig({
  basePath: "/studio",
  name: 'PAPAFAM_Content_Studio',
  title: 'PAPAFAM Content Studio',

  projectId,
  dataset,

  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
    // colorInput(),
    // imageHotspotArrayPlugin(),
    // customDocumentActions(),
    // media(),
    // ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  
  theme: myTheme,
  // form: {
  //   file: {
  //     assetSources: (previousAssetSources: AssetSource[]) => {
  //       return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
  //     },
  //   },
  //   image: {
  //     assetSources: (previousAssetSources: AssetSource[]) => {
  //       return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource)
  //     },
  //   },
  // },
});