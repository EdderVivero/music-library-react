import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";

const App = () => {
  const [searchResults, setSearchResults] = useState([
    { id: 1, image: "https://imgs.search.brave.com/-oi5-x41OjZkvYe6jMaRnWyYOcX4ZMnHEpxnLSqaoHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/NC80ZC9RdWVlbl9B/X05pZ2h0X0F0X1Ro/ZV9PcGVyYS5wbmcv/MjUwcHgtUXVlZW5f/QV9OaWdodF9BdF9U/aGVfT3BlcmEucG5n", title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55" },
    { id: 2, image: "https://www.artofdesignonline.com/uploads/1/1/7/1/117189571/thriller_orig.jpg", title: "Billie Jean", artist: "Michael Jackson", duration: "3:03" },
    { id: 3, image: "https://imgs.search.brave.com/JopP-UhIJ6JqGDvt70qpcMaUBMpLUmyybd22SkLybVE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFGVTNaS1RkNEwu/anBn", title: "Stairway to Heaven", artist: "Led Zeppelin", duration: "8:02" }
  ]);

  const [library, setLibrary] = useState([]);

  // Función para agregar una canción a la biblioteca
  const handleAddToLibrary = (song) => {
    // Verificamos si la canción ya existe en la biblioteca
    const exists = library.some(item => item.id === song.id);
    
    if (!exists) {
      // Si no existe, la agregamos
      setLibrary([...library, song]);
      console.log(`✅ "${song.title}" agregada a la biblioteca`);
    } else {
      console.log(`⚠️ "${song.title}" ya está en la biblioteca`);
    }
  };

  useEffect(() => {
    console.log("Music Library App loaded successfully");
  }, []);

  useEffect(() => {
    console.log("🎵 Biblioteca actualizada:", library);
  }, [library]);

  return (
    <div className="App">
      <Header />
      <SearchResults songs={searchResults} onAddToLib={handleAddToLibrary} />
      <Library songs={library} />
    </div>
  );
};

export default App;