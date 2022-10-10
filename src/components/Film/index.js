import { Movie } from "./style";
import { useNavigate } from 'react-router-dom';

export default function Film(props) {
    const { id, posterURL, title } = props.movie;
    let navigate = useNavigate();

    return (
        <Movie data-identifier="movie-outdoor" onClick={() => navigate(`/sessoes/${id}`)}>
            <div>
                <img src={posterURL} alt={title} />
            </div>
        </Movie>
    );
};