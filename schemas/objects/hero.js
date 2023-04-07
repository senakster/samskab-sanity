export default {
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Overskrift',
            type: 'string',
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