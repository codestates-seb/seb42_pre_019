import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import '../App.css';
import { logoutAction } from '../reducers/actions';

const Logoutcss = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 12px;
  top: 48px;
  width: 300px;
  height: 100px;
  background-color: white;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  background-color: hsl(210, 8%, 95%);
  button {
    position: relative;
    align-items: center;
    border: 1px solid hsl(205, 47%, 42%);
    border-color: hsl(205, 41%, 63%);
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.7);
    color: hsl(205, 47%, 42%);
    padding: 0.8em;
    line-height: 13px;
    font-size: 13px;
    margin-top: 1px;
    text-decoration: none;
    cursor: pointer;
  }
  .logOut {
    background-color: hsl(206, 100%, 52%);
    color: white;
    text-align: center;
    margin: 0px;
    font-weight: 400;
    padding-top: 7px;
    padding-bottom: 7px;
    width: 100px;
  }
  .logOut:hover {
    background-color: hsl(206, 100%, 40%);
  }
`;

export default function Logout() {
  const dispatch = useDispatch();
  const handleOut = () => {
    dispatch(logoutAction());
    window.location.href = '/';
  };
  return (
    <Logoutcss>
      <button className="logOut" onClick={handleOut}>
        Log out
      </button>
    </Logoutcss>
  );
}
