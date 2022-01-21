import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: black;
  margin-Top: 50%;
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
  margin-left: 70px;
  @media (max-width: 500px) {
    margin-left: 0px;
    
  }
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(220px, 1fr));
  grid-gap: 100px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;