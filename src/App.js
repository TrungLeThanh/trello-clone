import './App.css';
import { data } from './mock-data';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from './utils/dragDrop';
import { useState, useEffect } from 'react';

function App() {
  const [mock_data, set_mock_data] = useState([]);

  useEffect(() => {
    window.localStorage.setItem('data', JSON.stringify(data.boards?.[0]));
    const mock = JSON.parse(localStorage.getItem('data'));
    set_mock_data(mock);
  }, []);

  const onColumnDrop = (dropResult) => {
    let newColumns = [...mock_data?.columns];
    newColumns = applyDrag(newColumns, dropResult);
    let newData = { ...mock_data };
    newData.columnsOrder = newColumns?.map((column) => column.id);
    newData.columns = newColumns;
    set_mock_data(newData);
    window.localStorage.setItem('data', JSON.stringify(mock_data));
  };

  const onCardDrop = (id, result) => {
    if (result.addedIndex !== null || result.removedIndex !== null) {
      console.log(id);
      // Vị trí column

      let newColumn = [...mock_data?.columns];

      let currentColumn = newColumn?.find((cl) => cl.id === id);
      currentColumn.cards = applyDrag(currentColumn.cards, result);
      currentColumn.cardOrder = currentColumn.cards.map((c) => c.id);

      const new_mock_data = { ...mock_data };
      const test = new_mock_data?.columns?.map((item) =>
        item?.id === currentColumn?.id ? currentColumn : item
      );

      set_mock_data({ columnsOrder: mock_data.columnsOrder, columns: test });
    }
  };

  return (
    <div className="App">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={(index) => data.boards?.[0].columns?.[index]}
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'cards-drop-preview',
        }}
      >
        {mock_data?.columns?.map((item, index) => (
          <Draggable key={item.id}>
            <div className="task">
              <div className="title-task">{item?.title}</div>
              <Container
                groupName="col"
                onDrop={(e) => onCardDrop(item?.id, e)}
                getChildPayload={(index) => item?.cards?.[index]}
                dropPlaceholder={{
                  animationDuration: 150,
                  showOnTop: true,
                  className: 'drop-preview',
                }}
                dropPlaceholderAnimationDuration={200}
              >
                {item?.cards?.map((card) => (
                  <Draggable key={card.id}>
                    <div className="card">
                      {card?.cover !== null && (
                        <img
                          src={card.cover}
                          alt=""
                          style={{ maxWidth: '230px' }}
                        />
                      )}
                      {card?.title}
                    </div>
                  </Draggable>
                ))}
              </Container>
            </div>
          </Draggable>
        ))}
      </Container>
    </div>
  );
}

export default App;
