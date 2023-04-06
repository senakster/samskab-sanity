export default {
    name: 'settings',
    title: 'Indstillinger',
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
            name: 'menu',
            title: 'Menu',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'frontpage'
                        },
                        {
                            type: 'page',
                        }
                    ]
                }
            ]
        }
    ]
}