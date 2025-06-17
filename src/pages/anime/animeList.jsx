import { useState, useEffect } from "react";
import AnimeCard from "./animeCard";

const AnimeList = () => {
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        const fetchAnime = async () => {
            try {
                const response = await fetch("https://api.jikan.moe/v4/top/anime");
                const data = await response.json();
                setAnimeList(data.data);
                console.log(data.data);
            } catch(error) {
                console.error("Error fetching anime", error);
            }
        }
        fetchAnime();
    }, []);

    return(
        <div className="p-6 min-h-screen rounded-2xl">
            <h1 className="text-6xl font-bold mb-6 text-center text-[#f9a825] lobster animate-pulse">Top Animes🎭</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {animeList.map((anime) => 
                    (
                        <AnimeCard key={anime.mal_id} anime={anime}/>
                    )
                )}
            </div>
        </div>
    )
}

export default AnimeList;