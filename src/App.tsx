import { useState } from "react";
import { GenreResponseProps } from "./interfaces";
import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import "./styles/global.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
      />

      <div className="container">
        <Header selectedGenre={selectedGenre} />
        <Content
          selectedGenreId={selectedGenreId}
          setSelectedGenre={setSelectedGenre}
        />
      </div>
    </div>
  );
}
