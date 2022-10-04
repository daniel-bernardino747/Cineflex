import { Movie } from "./style";

export default function Film({ movie }) {
    return (
        <>
            <Movie>
                <img src={movie.imagem} />
            </Movie>
        </>
    );
}