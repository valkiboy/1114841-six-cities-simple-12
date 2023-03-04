import MainPage from '../../pages/main-page/main-page';
// import RoomPage from '../../pages/room-page/room-page';
// import LoginPage from '../../pages/login-page/login-page';

type AppPageProps = {
  placesCount: number;
}

function App({ placesCount }: AppPageProps): JSX.Element {
  return (
    <MainPage placesCount={placesCount} />
    // <RoomPage />
    // <LoginPage />
  );
}

export default App;
