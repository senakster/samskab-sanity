
// ./src/defaultDocumentNode.ts
import { ReferencedBy } from 'sanity-plugin-document-reference-by'


import Iframe from 'sanity-plugin-iframe-pane'

// Customise this function to show the correct URL based on the current document
export function getPreviewUrl(doc) {
    console.log({ doc }, window.location.host)
    const baseUrl = window.location.host.match(/localhost:3/g) ? 'http://localhost:3000/' : 'https://hjernetegn.vercel.app/'
    const previewUrl = 'api/preview/'
    const url = `${baseUrl}${previewUrl}`
    return doc?.slug?.current
        ? `${url}?slug=${doc.slug.current}`
        : `${url}`
}

// Import this into the deskTool() plugin
export const defaultDocumentNode = (S, { schemaType }) => {
    // Only show preview pane on `movie` schema type documents
    switch (schemaType) {
        case `frontpage`:
            return S.document()
                .views([
                    S.view.form(),
                    S.view
                        .component(Iframe)
                        .options({
                            url: (doc) => getPreviewUrl(doc),
                        })
                        .title('Preview'),
                    S.view.component(ReferencedBy)
                        .title('Referenter')
                ])
        case `page`:
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                        url: (doc) => getPreviewUrl(doc),
                    })
                    .title('Preview'),
                S.view.component(ReferencedBy)
                    .title('Referenter')
            ])
        case `symptom`:
            return S.document()
                .views([
                    S.view.form(),
                    S.view
                        .component(Iframe)
                        .options({
                            url: (doc) => getPreviewUrl(doc),
                        })
                        .title('Preview'),
                    S.view.component(ReferencedBy)
                        .title('Referenter')
                ])
        default:
            return S.document().views([S.view.form(), S.view.component(ReferencedBy).title('Referenter')])
    }
}