import { useEffect, useState } from 'react';
import styled from 'styled-components';

/* eslint-disable */
const Toastcss = styled.div`
  .toast {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 200px;
    transform: translateX(-50%);
    background-color: hsl(140, 40%, 90%);
    color: #333;
    padding: 30px;
    border: 1px solid hsl(140, 40%, 75%);
    border-radius: 5px;
    z-index: 999;
    font-size: 1rem;
    opacity: 0.95;
    font-weight: bolder;
  }
  .fa-circle-check {
    font-size: 2rem;
    color: #47cf73;
    margin-bottom: 20px;
  }
  h1 {
    font-size: 1.6rem;
    margin: 0 0 0.5em;
    font-weight: bolder;
  }
`;

export default function Toast2(props) {
  const [count, setcount] = useState(props.phrase);
  useEffect(() => {
    const timer = setInterval(() => {
      setcount((count) => count - 1);
    }, 1000);
    if (count === 0) {
      clearInterval(timer);
    }
    return () => clearTimeout(timer);
  }, []);

  //   const innerText = `${count}초 뒤에 메인 화면으로 이동`;

  return (
    <Toastcss>
      <div className="toast" style={props.style}>
        <h1>{props.title}</h1>
        {props.inputE}
        <div>
          {count}
          {props.secText}
        </div>
      </div>
    </Toastcss>
  );
}
