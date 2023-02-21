//여러 유저 나오는 페이지 ->https://stackoverflow.com/users
/* eslint-disable */

import styled from 'styled-components';
import useState from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
<i class="fa-solid fa-magnifying-glass"></i>;
export default function Users() {
  const data = [
    {
      id: 1,
      imageurl: 'stackoverflowSampleProfile.png',
      displayName: 'jihyunkim',
      tags: ['javascript', 'react', 'css'],
    },
    {
      id: 2,
      imageurl: 'stackoverflowSampleProfile.png',
      displayName: 'jihyunkim',
      tags: ['javascript', 'react', 'css'],
    },
    {
      id: 3,
      imageurl: 'stackoverflowSampleProfile.png',
      displayName: 'jihyunkim',
      tags: ['javascript', 'react', 'css'],
    },
    {
      id: 4,
      imageurl: 'stackoverflowSampleProfile.png',
      displayName: 'jihyunkim',
      tags: ['javascript', 'react', 'css'],
    },
    {
      id: 5,
      imageurl: 'stackoverflowSampleProfile.png',
      displayName: 'jihyunkim',
      tags: ['javascript', 'react', 'css'],
    },
    {
      id: 6,
      imageurl: 'stackoverflowSampleProfile.png',
      displayName: 'jihyunkim',
      tags: ['javascript', 'react', 'css'],
    },
    {
      id: 7,
      imageurl: 'stackoverflowSampleProfile.png',
      displayName: 'jihyunkim',
      tags: ['javascript', 'react', 'css'],
    },
    {
      id: 8,
      imageurl: 'stackoverflowSampleProfile.png',
      displayName: 'jihyunkim',
      tags: ['javascript', 'react', 'css'],
    },
    {
      id: 9,
      imageurl: 'stackoverflowSampleProfile.png',
      displayName: 'jihyunkim',
      tags: ['javascript', 'react', 'css'],
    },
    {
      id: 10,
      imageurl: 'stackoverflowSampleProfile.png',
      displayName: 'jihyunkim',
      tags: ['javascript', 'react', 'css'],
    },
    {
      id: 11,
      imageurl: 'stackoverflowSampleProfile.png',
      displayName: 'jihyunkim',
      tags: ['javascript', 'react', 'css'],
    },
    {
      id: 12,
      imageurl: 'stackoverflowSampleProfile.png',
      displayName: 'jihyunkim',
      tags: ['javascript', 'react', 'css'],
    },
  ];
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
        {data.map((el) => (
          <div className="userCard">
            <img className="profile" src={el.imageurl} alt="profile"></img>
            <div className="detail">
              <Link className="displayName">{el.displayName}</Link>
              <div>평판</div>
              {el.tags.map((el) => (
                <span>
                  <Link className="link2">{el},</Link>{' '}
                </span>
              ))}
            </div>
          </div>
        ))}
      </UserCardList>
    </Userspage>
  );
}
