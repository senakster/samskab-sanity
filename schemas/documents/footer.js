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
            name: 'logo',
            title: 'Footer logo',
            type: 'image',
            description: 'Brug hvidt logo'
        },
        {
            name: 'content',
            title: 'Indholdsblokke',
            type: 'contentBlocks'
        }
    ]
}