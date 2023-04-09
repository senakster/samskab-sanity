export default {
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Redaktionel overskrift (vises ikke)',
            type: 'string',
            hidden: true,
        },
        {
            name: 'objectPosition',
            title: 'Position',
            type: 'string',
            options: {
                list: ['contain','cover'],
                layout: 'radio',
                direction: 'horizontal',

            },
            initialValue: 'contain'
        },
        {
            name: 'lightMode',
            title: 'Baggrundsfarve',
            type: 'string',
            options: {
                list: ['light', 'dark', 'none'],
                layout: 'radio',
                direction: 'horizontal',

            },
            initialValue: 'none'
        },
        {
            name: 'heroText',
            title: 'Hero-tekst',
            type: 'portableText'
        },
        {
            name: 'image',
            title: 'Billede',
            type: 'image',
            fields: [
                {
                    name: 'altText',
                    title: 'Alt-text',
                    type: 'text'
                }
            ],
            options: {
                hotspot: true
            }
        }
    ]
}