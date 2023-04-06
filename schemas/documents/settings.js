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
                        },
                        
                    ],
                    options: {
                        filter: ({ document }) => {
                            const lang = document?.__i18n_lang || 'da'
                            return { 
                                filter: '(__i18n_lang == $lang)',
                                params: {
                                    lang
                                }
                            }
                        }
                    }
                }
            ]
        }
    ]
}