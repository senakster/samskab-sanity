export default {
    name: 'factBox',
    title: 'Faktaboks',
    type: 'object',
    fields:[
        {
            name: 'title',
            title: 'Redaktionel titel',
            type: 'string',
            description: 'Vises ikke',
        },
        {
            name: 'content',
            title: 'Tekstindhold',
            type: 'portableText',
        }
    ],
}