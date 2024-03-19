let games = [
    {id: '1', title: 'Zohan', platform: ['switch', 'nintendo']},
    {id: '2', title: 'Zohan 2', platform: ['PS', 'nintendo']},
    {id: '3', title: 'Zohan 3', platform: ['Xbox']},
    {id: '4', title: 'Zohan 4', platform: ['nintendo']},
    {id: '5', title: 'Zohan 5', platform: ['switch']},
    {id: '6', title: 'Zohan 6', platform: ['switch', 'PC', 'Nintendo']}
]


let authors = [
    {id:'1', name:'mario', verified: true},
    {id:'2', name:'luigi', verified: false},
    {id:'3', name:'mario and luigi', verified: true}
]

let reviews = [
    {id:'1', rating: 9, content: 'lorem Ipsum', author_id: '1', game_id:'1'},
    {id:'2', rating: 11, content: 'lorem Ipsum', author_id: '2', game_id:'2'},
    {id:'3', rating: 12, content: 'lorem Ipsum', author_id: '3', game_id:'3'},
    {id:'4', rating: 14, content: 'lorem Ipsum', author_id: '4', game_id:'4'},
    {id:'5', rating: 10, content: 'lorem Ipsum', author_id: '5', game_id:'5'},
    {id:'6', rating: 19, content: 'lorem Ipsum', author_id: '6', game_id:'6'},
]

export default { games, authors, reviews}