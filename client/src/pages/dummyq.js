import styled from 'styled-components';

const Qdiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;

  .vav {
    display: flex;
    flex-direction: raw;
    display: flex;

    font-size: 25px;

    .count {
      margin-right: 10px;
    }
    span {
      margin: 3px;
      font-size: 25px;
    }
  }
  .tag {
    margin-right: 6px;
    font-size: 19px;
  }
  .bottominfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .rightrecord {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
  }
`;
const Quser = styled.a`
  color: hsl(0deg 100% 39%);
`;

function Dummyq() {
  return (
    <Qdiv>
      <div className="vav">
        <div className="count">
          344<span>votes</span>
        </div>
        <div className="count">
          0<span>answers</span>
        </div>
        <div className="count">
          9<span>views</span>
        </div>
      </div>
      <div>
        <h2>Dont be that account buying and selling reputation and bounties</h2>
        <div className="bottominfo">
          <span className="lefttag">
            <button className="tag">discussion</button>
            <button className="tag">reputation</button>
            <button className="tag">voting-fraud</button>
            <button className="tag">psa</button>
          </span>
          <span className="rightrecord">
            <Quser />
            <div className="userrepu">4831</div>
            <div className="writetime">asked 8 mins ago</div>
          </span>
        </div>
      </div>
    </Qdiv>
  );
}

export default Dummyq;
