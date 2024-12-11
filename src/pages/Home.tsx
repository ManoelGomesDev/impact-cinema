import axios from "axios"
import { useEffect, useState } from "react"
import { MovieCard } from "../components/MovieCard";


interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
}


export function Home () {

    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(true)

    const API_KEY = "ce8d556085f2710d02950d69cd63c467"

    useEffect(() => {
        const fecthMovies = async () => {
            try{
              const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
                console.log(response.data.results)
                setMovies(response.data.results)
                setLoading(false)

            }catch(error){
                console.log("Erro ao buscar filmes: ", error)
            }
        }

        fecthMovies()
    }, [])

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb6">Filmes Populares</h1>
                {
                    loading ? (
                        <p className="text-center">Carregando...</p>
                    ) : (
                       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {
                            movies.map((movie) => (

                                <MovieCard key={movie.id} title={movie.title} image={movie.poster_path} overview={movie.overview} />
                            ) )
                        }
                       </div>

                    )
                }
            
        </div>
    )
}