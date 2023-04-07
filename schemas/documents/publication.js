export default {
    name: 'publication',
    title: 'Publikation',
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
        // {
        //     name: 'language',
        //     title: 'Sprog',
        //     type: 'string',
        // },
        {
            name: 'coverImg',
            title: 'Cover',
            type: 'image',
            fields: [
                {
                    name: 'altText',
                    title: 'Alt-tekst',
                    type: 'text'
                }
            ]
        },
        {
            name: 'file',
            title: 'Fil',
            type: 'file',
            // fields: [
            //     {
            //         name: 'title',
            //         title: 'Filnavn',
            //         type: 'string',
            //     },
            // ]
        },
        {
            name: 'abstract',
            title: 'Forord',
            type: 'portableText',
        },
        {
            name: 'publicationDate',
            title: 'Udgivelsesdato',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM'
            }
        }
    ]
}