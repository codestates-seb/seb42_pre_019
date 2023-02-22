import styled from 'styled-components';
const Homecss = styled.div`
  /* display: flex;
flex-direction: column;
align-items: center;
border: solid 1px red;
height: 85vh;
width: 96vw; */
`;

export default function Home() {
  return (
    <Homecss>
      <div className="homeheader">Top Questions</div>
    </Homecss>
  );
}
