import MainPage from '../../pages/main/main-page';
// import RoomPage from '../../pages/room/room-page';
// import LoginPage from '../../pages/login/login-page';

type AppPageProps = {
  placesCount: number;
}

function App({placesCount}:AppPageProps): JSX.Element {
  return (
    <MainPage placesCount={placesCount}/>
    // <RoomPage />
    // <LoginPage />
  );
}

export default App;
