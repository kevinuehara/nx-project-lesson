import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5%;
  color: #fff;
  padding: 20px;
  height: 200px;
  background-color: #312e81;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
  }
`;

export const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
`;
