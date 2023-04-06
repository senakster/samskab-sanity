import { AiOutlineHome, AiOutlineSisternode } from 'react-icons/ai'
import { GiSettingsKnobs } from 'react-icons/gi'

import { ReferencedBy } from 'sanity-plugin-document-reference-by'
// import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { getPreviewUrl } from './defaultDocumentNode';
import Iframe from 'sanity-plugin-iframe-pane'
// const filterAllType => (types) => {
//     types = typeof types === 'string' ? [types] : types;
//     types.includes()
// }
const settings = listItem => {
    return [
        'settings'
    ]
        .includes(listItem.getId())
}
const footer = listItem => {
    return [
        'footer'
    ]
        .includes(listItem.getId())
}
const pages = listItem => {
    return [
        'page'
    ]
    .includes(listItem.getId())
}
const notPages = listItem => {
    return ![
        'page'
    ]
    .includes(listItem.getId())
}
export const deskStructure = (S, context) =>
    S.list()
        .title('Indhold')
        .items([
            // ...S.documentTypeListItems(),
            S.listItem()
                .title(`Forside`)
                .icon(AiOutlineHome)
                .id('frontpage')
                .child(
                    S.document()
                        .id('frontpage')
                        .schemaType("frontpage")
                        .documentId("frontpage")
                        .views([
                            S.view.form(),
                            S.view.component(Iframe)
                                .title('Preview')
                                .options({
                                    url: (doc) => getPreviewUrl(doc),
                                }),
                            S.view.component(ReferencedBy)
                                .title('Referenter')
                        ])
                ),
            S.listItem()
                .title('Indholdssider')
                .child(
                    S.documentList()
                        .title(`Indholdssider`)
                        .schemaType('page')
                        .filter('_type == "page" && __i18n_lang == "da"')
                        .defaultOrdering([{ field: 'slug.current' }])
                ),
            ...S.documentTypeListItems()
            .filter(footer),
            ...S.documentTypeListItems()
            .filter(settings),

            // S.listItem()
            //     .title(`Footer`)
            //     .id('footer')
            //     .child(
            //         S.document()
            //             .id('footer')
            //             .schemaType("footer")
            //             .documentId("footer")
            //             .views([
            //                 S.view.form(),
            //             ])
            //     ),
            // S.listItem()
            //     .title(`Indstillinger`)
            //     .id('settings')
            //     .child(
            //         S.document()
            //             .id('settings')
            //             .schemaType("settings")
            //             .documentId("settings")
            //             .views([
            //                 S.view.form(),
            //             ])
            //     ),
        ])