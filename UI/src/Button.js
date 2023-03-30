import { useEffect } from "react";
import styled from '@emotion/styled'

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #01B798;
  border:none;
  font-size: 15px;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    opacity: 0.7;
    color: white;
  }
`

export default function PokeButton({ name }) {
    useEffect(() => {
        console.log(name);
    }, []);
    return (
        <Button>
            {name}
        </Button >
    );
}