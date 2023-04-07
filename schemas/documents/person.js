export default {
    name: 'person',
    title: 'Person',
    type: 'document',
    i18n: true,
    initialValue: {
        __i18n_lang: 'da',
    },
    fields: [
        {
            name: 'title',
            title: 'Navn',
            type: 'string',
        },
        {
            name: 'portrait',
            title: 'Portræt',
            type: 'image',
            fields: [
                {
                    name: 'altText',
                    title: 'Alt-tekst',
                    type: 'text'
                }
            ],
            options: {
                hotspot: true
            }
        },
        {
            name: 'position',
            title: 'Stilling',
            type: 'string',
        },
        {
            name: 'associations',
            title: 'Tilknyttet',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'participant'
                        }
                    ]
                },
                {
                    name: 'customAssociation',
                    title: 'Fritekst',
                    type: 'object',
                    fields: [
                        {
                            name: 'text',
                            title: 'Tekst',
                            type: 'string'
                        }
                    ]
                }
            ]
        },
    ]
}