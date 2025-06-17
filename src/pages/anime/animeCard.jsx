 import './animeCard.css';

const AnimeCard = ({ anime }) => {
    return (
       <div className="flip-card m-4 w-full max-w-sm">
            <div className="flip-card-inner">
                <div className="flip-card-front bg-white flex flex-col rounded-lg overflow-hidden">
                    <img
                        src={anime.images.jpg.image_url}
                        alt={anime.title} 
                        className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <h3 className="mt-3 text-lg font-semibold rounded-b-lg">{anime.title}</h3>
                </div>
            
                <div className="flip-card-back rounded-lg overflow-hidden bg-pink-300">
                    <h3 className="text-xl font-bold text-black mb-2 lobster">Synopsis</h3>
                    <p className="text-base text-black overflow-auto h-[70%]">
                        {anime.synopsis ? anime.synopsis.slice(0, 200) + "..."  : "No Description Available"}
                    </p>
                </div>    
            </div>
        </div>
    )
}

export default AnimeCard;