import styled from 'styled-components';

export const Box = styled.div`
  padding: 80px 60px;
  margin: 10px 10px;
  background: black;
  margin-Top: 10%;
   border-radius: 20px;
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
  @media (max-width: 500px) {
    font-size: 11px;
    text-align: center;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(300px, 1fr));
  grid-gap: 100px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: grey;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: white;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: lightgrey;
  margin-bottom: 40px;
  font-weight: bold;  
  &:hover {
    color: white;
    transition: 200ms ease-in;
}
`;