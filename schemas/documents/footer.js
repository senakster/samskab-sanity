export default {
    name: 'footer',
    title: 'Footer',
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
            name: 'content',
            title: 'Indholdsblokke',
            type: 'contentBlocks'
        }
    ]
}