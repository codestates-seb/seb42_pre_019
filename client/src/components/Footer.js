import styled from 'styled-components';

const Footercss = styled.footer`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  background-color: hsl(210, 8%, 15%);
  color: hsl(210, 8%, 75%);
  > div {
    display: flex;
    justify-content: center;
    width: 1264px;
    box-sizing: border-box;
    border: solid 1px red;
    padding: 32px 12px 12px 12px;
    height: 150px;
  }
`;

export default function Footer() {
  return (
    <Footercss>
      <div>Footer</div>
    </Footercss>
  );
}
