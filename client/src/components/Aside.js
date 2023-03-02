/* eslint-disable */
import styled from 'styled-components';

const Asidecss = styled.aside`
  width: 300px;
  margin: 0 0 15px;
  margin-left: 24px;
  font-family: 'Segoe UI';
  .content {
    box-sizing: inherit;
    width: 100%;
    padding-right: 32px;
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
      0 2px 8px hsla(0, 0%, 0%, 0.05);
    margin-bottom: 16px;
  }
  .title {
    background-color: #fbf3d5;
    font-size: 12px;
    font-weight: bolder;
    list-style: none;
    width: 100%;
    padding: 12px 15px;
    border: 1px solid hsl(47, 65%, 84%);
  }
  ul {
    background-color: #fffae8;
    width: 100%;
    margin: 0;
    padding: 0;
    padding: 12px 15px;
    border: 1px solid hsl(47, 65%, 84%);
    border-top: 0;
    border-bottom: 0;
    color: #3b4045;
  }
  .memo {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    gap: 10px;
    border: none;
  }
  i {
    font-size: 10px;
    margin: 0;
    padding-top: 8px 0;
    color: #484848;
  }
  .lastmemo {
    border-bottom: 1px solid hsl(47, 65%, 84%);
  }
  p {
    margin: 0;
    margin-bottom: 10px;
  }
`;

export default function Aside() {
  return (
    <Asidecss>
      <div className="content">
        <li className="title">The Overflow Blog</li>
        <ul>
          <li className="memo">
            <div>
              <i className="fa-solid fa-pen"></i>
            </div>
            <p>Why governments need open source more than ever</p>
          </li>
          <li className="memo">
            <div>
              <i className="fa-solid fa-pen"></i>
            </div>
            <p>Stop saying “technical debt”</p>
          </li>
        </ul>
        <li className="title">Featured on Meta</li>
        <ul>
          <li className="memo">
            <div>
              <i className="fa-solid fa-pen"></i>
            </div>
            <p>Ticket smash for [status-review] tag: Part Deux</p>
          </li>
          <li className="memo">
            <div>
              <i className="fa-solid fa-pen"></i>
            </div>
            <p>
              We've added a "Necessary cookies only" option to the cookie
              consent popup
            </p>
          </li>
        </ul>
        <li className="title">The Overflow Blog</li>
        <ul className="lastmemo">
          <li className="memo">
            <div>
              <i className="fa-solid fa-pen"></i>
            </div>
            <p>Why governments need open source more than ever</p>
          </li>
          <li className="memo">
            <div>
              <i className="fa-solid fa-pen"></i>
            </div>
            <p>Should my edit be a separate answer?</p>
          </li>
        </ul>
      </div>
      <div className="content">
        <li
          className="title"
          style={{
            backgroundColor: '#f8f9f9f9',
            border: '1px solid hsl(210, 8%, 90%)',
            fontSize: '14px',
            fontWeight: '100',
          }}
        >
          Custom Filters
        </li>
        <ul
          style={{
            backgroundColor: 'white',
            border: '1px solid hsl(210, 8%, 90%)',
            borderTop: '0',
          }}
        >
          <li className="memo">
            <p>Create a custom filter</p>
          </li>
        </ul>
      </div>
    </Asidecss>
  );
}
