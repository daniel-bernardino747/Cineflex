import { Movie } from "./style";
import { Link } from 'react-router-dom';

export default function Film({ movie, setMovieSelected, movieSelected }) {
    return (
        <>
            <Link to={`sessoes/1`}>
                <Movie onClick={() => setMovieSelected(!movieSelected)}>
                    <img src={movie.imagem} />
                </Movie>
            </Link>
        </>
    );
}