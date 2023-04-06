import blocks from "../blocks" 
export default {
    name: 'contentBlocks',
    title: 'Indholdsblokke',
    type: 'array',
    of: blocks?.map(b => ({ type: b.name }))
}