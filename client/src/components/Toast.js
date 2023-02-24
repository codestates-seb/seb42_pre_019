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

function Toast() {
  const [phrase, setPhrase] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhrase((phrase) => phrase - 1);
    }, 1000);
    if (phrase === 0) {
      clearInterval(timer);
    }
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (event) => {
    setPhrase(event.target.value);
  };

  //   const innerText = `${count}초 뒤에 메인 화면으로 이동`;

  return (
    <Toastcss>
      <div className="toast">
        <i className="fa-solid fa-circle-check"></i>
        <h1>Welcome to stackoverflow!</h1>
        <input
          style={{ display: 'none' }}
          type="text"
          value={phrase}
          onChange={handleInputChange}
        />
        {`${phrase}초 뒤 로그인 화면으로 이동합니다`}
      </div>
    </Toastcss>
  );
}
export default Toast;
