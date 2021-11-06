import dog from './dog.jpeg';
export const data = {
  boards: [
    {
      id: 1,
      columnsOrder: ['cl-1', 'cl-2', 'cl-3'],
      columns: [
        {
          id: 'cl-1',
          boardId: 1,
          title: 'TODO',
          cardOrder: ['ca-1', 'ca-2', 'ca-3', 'ca-4'],
          cards: [
            {
              id: 'ca-1',
              boardId: 1,
              columnId: 'cl-1',
              title: 'Title of card 1',
              cover: null,
            },
            {
              id: 'ca-2',
              boardId: 1,
              columnId: 'cl-1',
              title: 'Title of card 2',
              cover: null,
            },
            {
              id: 'ca-3',
              boardId: 1,
              columnId: 'cl-1',
              title: 'Title of card 3',
              cover: null,
            },
            {
              id: 'ca-4',
              boardId: 1,
              columnId: 'cl-1',
              title: 'Title of card 4',
              cover: null,
            },
          ],
        },
        {
          id: 'cl-2',
          boardId: 1,
          title: 'DOING',
          cardOrder: ['ca-1', 'ca-2', 'ca-3', 'ca-4'],
          cards: [
            {
              id: 'ca-1',
              boardId: 1,
              columnId: 'cl-2',
              title: 'Title of card 1',
              cover: null,
            },
            {
              id: 'ca-2',
              boardId: 1,
              columnId: 'cl-2',
              title: 'Title of card 2',
              cover: null,
            },
            {
              id: 'ca-3',
              boardId: 1,
              columnId: 'cl-2',
              title: 'Title of card 3',
              cover: null,
            },
            {
              id: 'ca-4',
              boardId: 1,
              columnId: 'cl-2',
              title: 'Title of card 4',
              cover: null,
            },
          ],
        },
        {
          id: 'cl-3',
          boardId: 1,
          title: 'DONE',
          cardOrder: ['ca-1', 'ca-2', 'ca-3', 'ca-4', 'ca-5'],
          cards: [
            {
              id: 'ca-1',
              boardId: 1,
              columnId: 'cl-3',
              title: 'Title of card 1',
              cover: dog,
            },
            {
              id: 'ca-2',
              boardId: 1,
              columnId: 'cl-3',
              title: 'Title of card 2',
              cover: null,
            },
            {
              id: 'ca-3',
              boardId: 1,
              columnId: 'cl-3',
              title: 'Title of card 3',
              cover: null,
            },
            {
              id: 'ca-4',
              boardId: 1,
              columnId: 'cl-3',
              title: 'Title of card 4',
              cover: null,
            },
            {
              id: 'ca-5',
              boardId: 1,
              columnId: 'cl-3',
              title: 'Title of card 5',
              cover: null,
            },
          ],
        },
      ],
    },
  ],
};
