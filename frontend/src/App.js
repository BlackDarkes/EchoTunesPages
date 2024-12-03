import React from "react";
import "./style/App.css";
import EchoTunes from "./Pages/EchoTunesPage/EchoTunes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlaylistPage from "./Pages/PlayListPage/Playlist";
import PlaylistMusic from "./Pages/PlaylistMusic/PlaylistMusic";

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
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
