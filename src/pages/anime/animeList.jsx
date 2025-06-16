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
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">Top Animes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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