import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 95%;
  cursor: pointer;
  position: relative;

  &:hover {
    border-color: #aaa;
    background-color: #fafafa;
  }

  .image {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    margin: 10px 2px 10px 10px;
    box-shadow: 2px 2px 5px #bbb;

    > img {
      width: 60px;
      height: 60px;
      border-radius: 100%;
    }
  }

  .userInfo {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-flow: column;

    > div {
      font-size: 16px;
      font-weight: 500;
      color: #666;
      margin: 5px 8px;
    }

    > span {
      font-size: 12px;
      font-weight: 500;
      color: #0099ff;
      margin: 5px 8px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: 160px;

      @media screen and (max-width: 400px) {
        max-width: 250px;
      }
    }
  }
`;
