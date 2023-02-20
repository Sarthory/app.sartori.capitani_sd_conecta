import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 100px;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 8px #ccc;
  background-color: #f6f6f6;

  @media screen and (max-width: 768px) {
    flex-flow: column;
    flex-wrap: wrap;
    height: auto;
    padding: 15px 0;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-right: -180px;

    @media screen and (max-width: 920px) {
      > svg {
        width: 45px;
        height: 45px;
        margin-left: 15px;
      }

      > h1 {
        margin: 0;
        font-size: 25px;
        text-align: center;
      }
    }

    @media screen and (max-width: 720px) {
      margin: 0 0 12px 0;

      > svg {
        width: 25px;
        height: 25px;
        margin-left: 15px;
      }

      > h1 {
        margin-left: -35px;
        font-size: 25px;
        text-align: center;
      }
    }

    @media screen and (max-width: 395px) {
      margin: 0 0 12px 0;

      > svg {
        width: 25px;
        height: 25px;
        margin-left: 15px;
      }

      > h1 {
        margin-left: -25px;
        font-size: 20px;
      }
    }

    > svg {
      fill: #444;
      width: 45px;
      height: 45px;
      margin-left: 15px;
      cursor: pointer;

      &:hover {
        fill: #666;
      }
    }

    > h1 {
      flex: 1;
      color: #444;
      text-align: center;
    }
  }
`;
