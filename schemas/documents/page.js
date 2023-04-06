export default {
    name: 'page',
    title: 'Indholdsside',
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
            type: 'hero'
        },
        {
            name: 'slug',
            title: 'slug',
            type: "slug",
            options: {
                //Change to schema title to automatically populate
                source: "title",
                slugify: (input) =>
                    `${input
                        .toLowerCase()
                        //Remove spaces
                        .replace(/\s+/g, "-")
                        //Remove special characters
                        .replace(/[æ]/g, 'ae')
                        .replace(/[ø]/g, 'oe')

                        .replace(/[å]/g, 'aa')

                        .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '')}`,
            },
            validation: (Rule) => Rule.required(),
        }, 
        {
            name: 'content',
            title: 'Indholdsblokke',
            type: 'contentBlocks'
        }
    ]
}