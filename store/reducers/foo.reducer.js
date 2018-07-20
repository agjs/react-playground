const BAZ_ACTION = 'BAZ_ACTION';

const fooReducer = (state = { foo: 'bar' }, action) => {
  switch (action.type) {
    case BAZ_ACTION:
      return Object.assign({}, { foo: action.payload });
  }
  return state;
};
