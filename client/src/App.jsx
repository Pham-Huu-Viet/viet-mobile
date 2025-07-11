import AppRouter from "./router";
import StoreProvider from "./store";

function App() {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  );
}

export default App;
