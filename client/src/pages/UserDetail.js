//한 명의 유저 상세 페이지 ->https://stackoverflow.com/users/15590153/kjh

/* eslint-disable */

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';

import { useState } from 'react';

const Page = styled.div`
  padding: 24px;
`;

const Breifprofile = styled.div`
  display: flex;
  flex-direction: row;

  > img {
    width: 128px;
    height: 128px;
    border-radius: 5px;
  }
  > span {
    /* margin-top: 50px;
       */
    justify-content: center;
    margin: auto;
    margin-left: 20px;
    .displayName {
      font-size: 37px;
      margin: 4px 4px 12px;
    }
  }
  /* > span:nth-child(1) {
      font-size: 30px;
    } */
`;
const CrossMenu = styled.div`
  > ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding-left: 0px;
  }
  .menu {
    display: flex;
    position: relative;
    font-size: 13px;
    font-weight: bold;
    text-decoration: none;
    color: hsl(210, 8%, 35%);
    padding: 7px 12px;
    border: none;
    border-radius: 1000px;
    margin-right: 5px;
    cursor: pointer;
  }
  .menu:hover {
    background-color: hsl(210, 8%, 90%);
    color: hsl(210, 8%, 25%);
  }
`;
const Sidebar = styled.span`
  /* position: fixed; */
  /* margin-top: 0; */
  /* position: sticky;
    top: 10px; */
  > ul {
    display: flex;
    list-style: none;
    padding-left: 0px;
    flex-direction: column;
    margin: 0px 0px 48px 0px;
  }
  .menu2 {
    margin: 5px;
    display: flex;
    /* position: relative; */
    font-size: 0.9em;
    text-decoration: none;
    color: black;
    padding: 6px 48px 6px 12px;
    border: none;
    border-radius: 1000px;
    cursor: pointer;
  }
  .menu2:hover {
    background-color: hsl(210, 8%, 90%);
    color: black;
  }
  .focus {
    background-color: #e5e5e5;
  }
`;
const MainContent = styled.div`
  display: flex, bl;
  flex-direction: row;
  max-width: 1100px;
  > div {
    padding-left: 30px;
    margin: 12px 0px;
    flex-grow: 1;
  }
  .miniTitle {
    font-size: 20px;
    font-weight: bold;
  }
`;

export default function UserDetail() {
  const imgUrl = 'stackoverflowSampleProfile.png';
  const displayName = 'kjh';
  const dummyData = [
    { id: 0, title: 'Answers', description: ['Answers List'] },
    { id: 1, title: 'Questions', description: ['Questions List'] },
    { id: 2, title: 'Tags', description: ['Tags List'] },
  ];
  const [focusIndex, setFocusIndex] = useState(0);

  return (
    <>
      <Page>
        <Breifprofile>
          <img src={imgUrl} alt="profile"></img>
          <span>
            <div className="displayName">{displayName}</div>
            <div>
              <span>
                <FontAwesomeIcon icon={faCakeCandles} /> member for 1 year,10
                months{' '}
              </span>
              <span>
                <FontAwesomeIcon icon={faClock} />
                Last seem this week{' '}
              </span>
              <span>
                <FontAwesomeIcon icon={faCalendarDays} /> Visited 9days, 1
                consecutive
              </span>
            </div>
          </span>
        </Breifprofile>
        <CrossMenu>
          <ul>
            <li className="menu">Profile</li>
            <li className="menu">Activity</li>
            {/* <li className="menu">Saves</li>
            <li className="menu">Setting</li> */}
          </ul>
        </CrossMenu>
        <MainContent>
          {' '}
          <Sidebar>
            <ul>
              {/* <li className="menu2">Summary</li> */}
              {dummyData.map((item) => (
                <li
                  key={item.id}
                  className={item.id === focusIndex ? 'menu2 focus' : 'menu2'}
                  // className="menu2"
                  // style={item.id===focusIndex?{ background-color: 'blue'}:{background-color: 'red'}}
                  onClick={() => setFocusIndex(item.id)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </Sidebar>
          <div>
            {dummyData
              .filter((item) => focusIndex === item.id)
              .map((item) => (
                <div>
                  <span className="miniTitle">
                    {item.description.length} {item.title}
                  </span>
                  <div>{item.description}</div>
                </div>
              ))}
          </div>
        </MainContent>
      </Page>
      <div></div>
    </>
  );
}
