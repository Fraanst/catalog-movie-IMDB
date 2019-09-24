import styled from "styled-components";

export const Search = styled.input`
  background: gray;
  display: flex;
  padding: 30px;
  color: white;
`;
export const Header = styled.header`
  background: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
  }
  li {
    margin-left: 10px;
  }
  a {
    display: block;
    color: white;
    padding: 25px;
    font-size: 1.5rem;
    text-decoration: none;
  }
`;
export const Card = styled.body`
  margin: 20px;
  padding: 30px;

  span {
    font-size: 1.5rem;
    font-family: Arial;
    color: black;
  }
`;
export const Imagem = styled.image`
  img {
    grid-column: 1;
    grid-row: 1/3;
    max-width: 100%;
    align-self: flex-end;
  }
  p {
    background: rgba(0, 0, 0, 0.6);
    padding: 10px;
    color: white;
    grid-column: 1;
    grid-row: 2;
    align-self: flex-end;
  }
`;

export const Block = styled.div`
  display: grid;
`;
export const Section = styled.body`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  max-width: 630px;

  ul {
    background: black;
    color: white;
    padding: 15px;
    list-style: none;
    text-decoration: none;
  }
`;
