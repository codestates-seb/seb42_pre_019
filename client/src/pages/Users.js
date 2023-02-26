//여러 유저 나오는 페이지 ->https://stackoverflow.com/users
/* eslint-disable */

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

{
  /* <i class="fa-solid fa-magnifying-glass"></i>; */
}

const Userspage = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  width: 1100px;

  .title {
    font-size: 27px;
    margin: 0px 0px 24px;
  }
  .top {
    max-height: 39.5px;
    flex-grow: 1;
  }
  .searchBar {
    background-color: white;
    padding: 3px 10px 3px 15px;
    border: solid 1px darkgrey;
    border-radius: 3px;
  }
  .filterInput {
    /* padding: 7.3px 9.2px 7.8px 32px; */
    border: none;
  }
  .searchIcon {
    color: grey;
  }
  > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    .sortTab {
      border: solid 1px darkgrey;

      border-radius: 3px;
      margin-left: auto;
      background-color: white;
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: center;

      .link {
        padding: 10.4px;
        cursor: pointer;
        border-left: solid 0.5px darkgrey;
        text-decoration-line: none;
        color: #575f65;
      }
      > a:hover {
        background-color: #e3e6e8;
      }
    }

    /* flex-direction: row; */
  }
`;

const UserCardList = styled.div`
  flex-grow: 1;
  padding-top: 50px;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  /* height: 300px; */

  .userCard {
    width: 23%;
    margin-bottom: 12px;
    height: 70px;
    background: ivory;
    padding: 5px;
    display: flex;
    flex-direction: row;
  }
  .profile {
    height: 48px;
    width: auto;
  }
  .detail {
    margin-left: 7px;

    .displayName {
      font-size: 16px;
      text-decoration-line: none;
      color: #125584;
    }
    .link2 {
      cursor: pointer;
      text-decoration-line: none;
      color: #0775c4;
    }
  }
`;
export default function Users() {
  //!Redux test
  const state = useSelector((state) => state); //! state 꺼내오기 hook
  console.log(state);
  const dispatch = useDispatch(); //! dispatch 쉽게하는 hook
  const payloadSample = {
    userId: 'Redux',
    displayName: '테스트 성공?',
    profileImg: 'stackoverflowSampleProfile.png',
  };
  //여기까지 Redux test

  //! 만약 페이지네이션을 할거면 api 요청 메세지 달라져야 하나요?
  const [usersData, setUsersData] = useState('1');
  console.log(usersData);

  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate(`/users/${el.userid}`);
  // };

  function usersAxios() {
    return axios
      .get(`${process.env.REACT_APP_API_KEY}/users`, {
        'Content-Type': 'application/json',
      })

      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
        setUsersData(res.data);
      })
      .catch((err) => {
        console.log('Users GET error');
      });
  }

  useEffect(() => {
    usersAxios();
    // console.log(`data1: ${data1}`);
  }, []);
  console.log(usersData);

  return (
    <Userspage>
      <div className="title">Users</div>
      <div className="top">
        <form className="searchBar">
          <FontAwesomeIcon className="searchicon" icon={faMagnifyingGlass} />
          <input
            className="filterInput"
            type="text"
            placeholder="Filter by user"
            // onChange={handleChange}
          ></input>
        </form>

        <div className="sortTab">
          <Link className="link">Reputation</Link>
          <Link className="link">New user</Link>
          <Link className="link">Voters</Link>
          <Link className="link">Editors</Link>
          <Link className="link">Moderators</Link>
        </div>
      </div>
      <UserCardList>
        {Array.isArray(usersData) &&
          usersData.map((el) => (
            <div className="userCard" key={el.userId}>
              <img className="profile" src={el.imageurl} alt="profile"></img>
              <div className="detail">
                <Link to={`/users/${el.userId}`} className="displayName">
                  {el.displayName}
                </Link>
                <div> score</div>
                <span>
                  {' '}
                  <Link className="link2">javascript, react , frontend</Link>
                </span>
                {/* <div>평판</div>
              {el.tags.map((el) => (
                <span>
                  <Link className="link2">{el},</Link>{' '}
                </span>
              ))} */}
              </div>
            </div>
          ))}
      </UserCardList>
      <div>
        <button
          onClick={() =>
            dispatch({ type: 'SET_USER_ID', payload: payloadSample })
          }
        >
          리덕스 테스트
        </button>
        <div>{state.user.userId}</div>
        <div>{state.user.displayName}</div>
        <div>{state.user.profileImg}</div>
      </div>
    </Userspage>
  );
}
