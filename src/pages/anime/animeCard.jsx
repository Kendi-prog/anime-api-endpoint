import './animeCard';

const AnimeCard = ({ anime }) => {
    return (
       <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img
                        src={anime.images.jpg.image_url}
                        alt={anime.title} 
                        className="w-full h-56 object-cover rounded-lg"
                    />
                    <h3 className="mt-3 text-lg font-semibold text-gray-800">{anime.title}</h3>
                </div>
                <div className='flip-card-back'>
                    <h3>Kendi</h3>
                </div>
                {/* <div className="flip-card-back">
                    <h3 className="text-md font-bold text-indigo-800 mb-2">Synopsis</h3>
                    <p className="text-sm text-gray-700 overflow-auto h-[70%]">
                        {anime.synopsis ? anime.synopsis.slice(0, 200) + "..."  : "No Description Available"}
                    </p>
                </div>     */}
            </div>
        </div>
    )
}

export default AnimeCard;