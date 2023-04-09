export default {
    name: 'frontpage',
    title: 'Forside',
    type: 'document',
    i18n: true,
    initialValue: {
        __i18n_lang: 'da',
    },
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string',
        },
        {
            name: 'hero',
            title: 'Hero',
            type: 'hero',
        },
        {
            name: 'content',
            title: 'Indholdsblokke',
            type: 'contentBlocks'
        }
    ]
}