import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemaTypes from './schemas/schema'
import { defaultDocumentNode } from './defaultDocumentNode'
import { withDocumentI18nPlugin } from '@sanity/document-internationalization'
// import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import { deskStructure } from './deskStructure'
// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])
// Define the singleton document types
const singletonTypes = new Set(['frontpage', 'footer', 'settings'])

export default defineConfig({
    name: 'default',
    title: 'Samskab studio',

    projectId: 'abi5mok8',
    dataset: 'production',
    document: {
        // prev is the result from previous plugins and thus can be composed
        productionUrl: async (prev, context) => {
            // context includes the client and other details
            const { dataset, document } = context

            if (['frontpage', 'page'].find(type => document._type === type)) {
                const { slug } = document
                const s = slug?.current
                // await client.fetch(
                //   `*[_type == 'frontpage' && _id == $postId][0].slug.current`,
                //   {postId: document._id}
                // )

                const params = new URLSearchParams()
                params.set('preview', 'true')
                params.set('dataset', dataset)

                return `http://localhost:3000/api/preview?slug=${s || ''}&${params}`
            }

            return prev
        },
        actions: (input, context) =>
            singletonTypes.has(context.schemaType)
                ? input.filter(({ action }) => action && singletonActions.has(action))
                : input,
    },

    plugins: withDocumentI18nPlugin(
            [
                deskTool({
                    structure: deskStructure,
                    // defaultDocumentNode,
                    defaultDocumentNode: defaultDocumentNode
                }),
                visionTool(),
            ],
            {
                includeDeskTool: false, // Removes default deskTool provided by plugin
                referenceBehavior: 'weak', // non-base-lang can live without ref to base-lang-page
                withTranslationsMaintenance: true,
                languages: ['da','en'],
            }
        ),
    schema: {
        types: schemaTypes,
        templates: (templates) =>
            templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
    },
})