//한 명의 유저 상세 페이지 ->https://stackoverflow.com/users/15590153/kjh
// import { Link } from 'react-router-dom';
// import { styled } from 'styled-components';

import styled from 'styled-components';

export default function UserDetail() {
  const imgUrl = 'stackoverflowSampleProfile.png';
  const Breifprofile = styled.div`
    display: flex;
    flex-direction: row;
  `;
  const CrossMenu = styled.div`
    > ul {
      display: flex;
      flex-direction: row;
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
      cursor: pointer;
    }
    .menu:hover {
      background-color: #e4883e;
      color: white;
    }
  `;
  const VerticalMenu = styled.div``;
  return (
    <>
      <div>
        <Breifprofile>
          <img src={imgUrl} alt="profile"></img>
          <span>
            <div>KJH</div>
            <div>
              <span>memberfor 1 year,10 months</span>
              <span>Last seem this week</span>
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
            <li>Summary</li>
            <li>Answers</li>
            <li>Questions</li>
            <li>Tags</li>
          </ul>
        </VerticalMenu>
      </div>
      <div></div>
    </>
  );
}
