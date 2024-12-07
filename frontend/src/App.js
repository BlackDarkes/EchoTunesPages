import React from "react";
import "./style/App.css";
import EchoTunes from "./Pages/EchoTunesPage/EchoTunes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlaylistPage from "./Pages/PlayListPage/Playlist";
import PlaylistMusic from "./Pages/PlaylistMusic/PlaylistMusic";
import MusicBar from "./Components/MusicBar/MusicBar";
import MusicProvider from "./Contents/MusicsContents/MusicsContents"; // Импортируйте ваш провайдер

const router = createBrowserRouter([
  {
    path: "/",
    element: <EchoTunes/>
  },
  {
    path: "/playlists",
    element: <PlaylistPage/>
  },
  {
    path: "/playlists/music/:number",
    element: <PlaylistMusic/>
  }
]);

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
