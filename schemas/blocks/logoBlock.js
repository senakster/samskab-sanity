export default {
    name: 'logoBlock',
    title: 'Logo-blok',
    type: 'object',
    fields: [
        { 
            name: 'logos',
            title: 'Logoer',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        { type: 'participant' }
                    ]
                }
            ]
        }
    ]
}