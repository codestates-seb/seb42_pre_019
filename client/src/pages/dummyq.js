import styled from 'styled-components';

const Qdiv = styled.div`
  display: flex;
  flex-direction: column;
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
        <button className="tag">discussion</button>
        <button className="tag">reputation</button>
        <button className="tag">voting-fraud</button>
        <button className="tag">psa</button>
        <Quser />
        <div className="userrepu">4831</div>
        <div className="writetime"></div>
      </div>
    </Qdiv>
  );
}

export default Dummyq;
