import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Session() {
  return (
    <Consta>
      <Link to={`/assentos/1`}>
        <div>a</div>
      </Link>
    </Consta>
  );
};

export const Consta = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;