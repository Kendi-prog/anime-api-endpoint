const AnimeCard = ({ anime }) => {
    return (
        <div>
            <img
                src={anime.images.jpg.image_url}
                alt={anime.title} 
            />
            <h3>{anime.title}</h3>
        </div>
    )
}

export default AnimeCard;