export default {
    name: 'participant',
    title: 'Samarbejdspartner',
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
            name: 'logo',
            title: 'Logo',
            type: 'image',
        },
        {
            name: 'organisationColor',
            title: 'Organisationsfarve',
            type: 'color'
        },
        {
            name: 'description',
            title: 'Beskrivelse',
            type: 'portableText',
        }
    ]
}