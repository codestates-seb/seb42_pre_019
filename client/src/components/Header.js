import styled from 'styled-components';

export default function Header() {
  const Headercss = styled.div`
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: solid 1px red;
      height: 100px;
    }
  `;

  return (
    <Headercss>
      <div>Header</div>
    </Headercss>
  );
}
