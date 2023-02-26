/* eslint-disable */
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Qdiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;

  .vav {
    display: flex;
    flex-direction: raw;
    display: flex;
    margin-top: 20px;
    margin-left: 20px;
    font-size: 25px;
  }
  .middlecontent {
    margin-left: 20px;
  }
  .middletitle {
    font-size: 17px;
    margin-top: 10px;
  }
  .middledetail {
    font-size: 13px;
    margin-top: 10px;
  }
  .count {
    margin-right: 10px;
    font-size: 13px;
  }
  span {
    margin: 3px;
    font-size: 13px;
  }

  .tag {
    margin: 0px 5px 2px 0px;
    padding: 4.8px 6px;
    font-size: 12px;
    border-radius: 4px;
    background: #dde9f2;
    color: #326892;
  }
  .bottominfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 25px;
    margin-top: 10px;
  }
  .bottomright {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-right: 20px;
  }
  .avatar {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
`;
const Quser = styled.a`
  color: hsl(0deg 100% 39%);
`;

function Dummyq() {
  const [data, setData] = useState({
    answers: 0,
    votes: 0,
    views: 0,
    result: [],
  });

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const res = await axios.get('http://localhost:5000/questions', {
          'Content-Type': 'application/json',
        });
        setData((prevData) => ({ ...prevData, result: res.data }));
        // console.log(res.data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSearch();
  }, []);

  return (
    <Qdiv>
      <div className="vav">
        <div className="count">
          344{data.votes}
          console.log(data.votes)
          <span>votes</span>
          {/* score로  */}
        </div>
        <div className="count">
          0{data.answers}
          <span>answers</span>
        </div>
        <div className="count">
          9{data.views}
          <span>views</span>
        </div>
      </div>
      <div className="middlecontent">
        <div className="middletitle">
          Dont be that account buying and selling reputation and bounties
          {data.title}
        </div>
        <div className="middledetail">
          In recent months we have found several accounts that offered bounties
          and / or upvotes for hire. You pay them some money, they promise to
          upvote your content or apply bounties to your questions or for you to
          earn directly:
        </div>
        <div className="bottominfo">
          <span className="bottomleft">
            <button className="tag">discussion</button>
            <button className="tag">reputation</button>
            <button className="tag">voting-fraud</button>
            <button className="tag">psa</button>
          </span>
          <span className="bottomright">
            <Quser />
            <img className="avatar" src="avatar.png" alt="filter.png" />
            <div className="userrepu">4831</div>
            <div className="writetime">asked 8 mins ago</div>
          </span>
        </div>
      </div>
    </Qdiv>
  );
}

export default Dummyq;
