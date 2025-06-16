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
        <div>
            <h1>Top Animes</h1>
            {animeList.map((anime) => 
                 (
                    <AnimeCard key={anime.mal_id} anime={anime}/>
                )
            )}
        </div>
    )
}

export default AnimeList;