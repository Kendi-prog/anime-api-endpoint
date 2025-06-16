const AnimeCard = ({ anime }) => {
    return (
       <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300 p-4 text-center">
            <img
                src={anime.images.jpg.image_url}
                alt={anime.title} 
                className="w-full h-56 object-cover rounded-lg"
            />
            <h3 className="mt-3 text-lg font-semibold text-gray-800">{anime.title}</h3>
        </div>
    )
}

export default AnimeCard;