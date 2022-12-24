import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { myTheme } from './theme';
import { LogoDev } from '@mui/icons-material';
import StudioNavBar from './components/StudioNavBar';
import Logo from './components/Logo';
import StudioNavbar from './components/StudioNavBar';
import { getDefaultDocumentNode } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
// const dataset = process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET as string;

export default defineConfig({
   basePath: '/studio',
   name: 'WITTY_Content_Studio',
   title: 'Witty Content Studio',

   projectId,
   dataset,

   plugins: [deskTool({
      defaultDocumentNode:getDefaultDocumentNode
   }), visionTool()],

   schema: {
      types: schemaTypes,
   },
   studio: {
      components: {
         logo: Logo,
         navbar: StudioNavbar,
        



      }

   },
   theme: myTheme,
 
});
