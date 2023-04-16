export default {
    name: 'textBlock',
    title: 'Tekstblok',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Redaktionel titel',
            type: 'string',
            description: 'Vises ikke',
        },
        {
            name: 'value',
            title: 'Tekstblok',
            type: 'portableText',
        }
    ]
}