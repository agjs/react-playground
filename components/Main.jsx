const Main = props => {
  return (
    <ReactRedux.Provider store={store}>
      <Message />
    </ReactRedux.Provider>
  );
};
