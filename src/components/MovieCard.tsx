
interface MovieCardProps {
    image: string;
    title: string;
    overview: string;
}



export function MovieCard({image, overview, title} : MovieCardProps) {
    return (
        <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg bg-gray-800">
            <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="avatar" className="object-cover object-center w-full h-56" />

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-white">{title}</h1>

                <p className="py-2 text-white">{overview}</p>
        

            </div>

        </div>

    )
}