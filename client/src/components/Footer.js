import styled from 'styled-components';

export default function Footer() {
  const Footercss = styled.div`
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: solid 1px red;
      height: 100px;
    }
  `;
  return (
    <Footercss>
      <div>Footer</div>
    </Footercss>
  );
}
