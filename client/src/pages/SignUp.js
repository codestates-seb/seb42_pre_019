import styled from 'styled-components';

export default function SignUp() {
  const SignUpcss = styled.div`
    /* background-color: red; */
    background-color: hsl(210, 8%, 95%);
    position: absolute;
    width: 100%;
    height: calc(100vh - 50px);
    display: flex;
    justify-content: center;
    z-index: 999;
  `;
  return (
    <SignUpcss>
      <div>SignUp</div>
    </SignUpcss>
  );
}
