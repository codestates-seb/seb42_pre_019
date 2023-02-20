//여러 유저 나오는 페이지 ->https://stackoverflow.com/users
/* eslint-disable */

import styled from 'styled-components';
import useState from 'react';

export default function Users() {
  const data = [
    { id: 1, displayName: 'jihyunkim', tags: ['javascript', 'react', 'css'] },
  ];
  const UserCard = styled.div``;
  return (
    <div>
      <div>Users</div>
    </div>
  );
}
