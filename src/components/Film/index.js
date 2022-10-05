import { Movie } from "./style";
import { useNavigate } from 'react-router-dom';

export default function Film(props) {
    const { id, posterURL, title } = props.movie;
    let navigate = useNavigate();

    return (
        <Movie onClick={() => navigate(`/sessoes/${id}`)}>
            <img src={posterURL} alt={title} />
        </Movie>
    );
};