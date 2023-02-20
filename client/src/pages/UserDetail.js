//한 명의 유저 상세 페이지 ->https://stackoverflow.com/users/15590153/kjh
// import { Link } from 'react-router-dom';
// import { styled } from 'styled-components';

import styled from 'styled-components';

export default function UserDetail() {
  const imgUrl = 'stackoverflowSampleProfile.png';
  const displayName = 'kjh';
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
        font-size: 30px;
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
      font-size: 0.9em;
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
  const VerticalMenu = styled.div`
    > ul {
      display: flex;
      list-style: none;
      padding-left: 0px;
      flex-direction: column;
    }
    .manu2 {
      width: 50px;
      height: 30px;
      margin: 5px;
      display: flex;
      position: relative;
      font-size: 0.9em;
      text-decoration: none;
      color: hsl(210, 8%, 35%);
      padding: 7px 12px;
      border: none;
      border-radius: 1000px;
      cursor: pointer;
    }
  `;
  return (
    <>
      <Page>
        <Breifprofile>
          <img src={imgUrl} alt="profile"></img>
          <span>
            <div className="displayName">{displayName}</div>
            <div>
              <span>member for 1 year,10 months </span>
              <span>Last seem this week </span>
              <span>Visited 9days, 1 consecutive</span>
            </div>
          </span>
        </Breifprofile>
        <CrossMenu>
          <ul>
            <li className="menu">Profile</li>
            <li className="menu">Activity</li>
            <li className="menu">Saves</li>
            <li className="menu">Setting</li>
          </ul>
        </CrossMenu>
        <VerticalMenu>
          <ul>
            <li className="menu2">Summary</li>
            <li className="menu2">Answers</li>
            <li className="menu2">Questions</li>
            <li className="menu2">Tags</li>
          </ul>
        </VerticalMenu>
      </Page>
      <div></div>
    </>
  );
}
