import React from "react";
import "./style/App.css";
import EchoTunes from "./Pages/EchoTunesPage/EchoTunes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlaylistPage from "./Pages/PlayListPage/Playlist";
import PlaylistMusic from "./Pages/PlaylistMusic/PlaylistMusic";
import MusicBar from "./Components/MusicBar/MusicBar";
import MusicProvider from "./Contents/MusicsContents/MusicsContents"; // Импортируйте ваш провайдер
import PageNotFound from "./Pages/PageNotFound/PageNotFoun";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EchoTunes/>
  },
  {
    path: "/EchoTunesPages/playlists",
    element: <PlaylistPage/>
  },
  {
    path: "/EchoTunesPages/playlists/music/:number", // Убедитесь, что этот путь правильный
    element: <PlaylistMusic/>
  },
  {
    path: "*", // Этот маршрут должен быть последним
    element: <PageNotFound/> 
  }
], { basename: "/EchoTunesPages" });

function App() {
  return (
    <MusicProvider>
      <div className="App">
        <RouterProvider router={router}/>
        <MusicBar/>
      </div>
    </MusicProvider>
  );
}

export default App;
