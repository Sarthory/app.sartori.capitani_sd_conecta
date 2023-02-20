import styled from 'styled-components';

export const UsersListContainer = styled.div`
  padding: 15px 0;
  overflow-x: auto;
  text-align: center;
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  justify-content: center;

  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NoResults = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;

  > img {
    width: 180px;

    @media screen and (max-width: 768px) {
      width: 120px;
    }
  }

  .texts {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-flow: column;
    width: 220px;
    margin-left: 20px;
    color: #666;

    > h2 {
      margin-bottom: 15px;
    }
  }
`;
