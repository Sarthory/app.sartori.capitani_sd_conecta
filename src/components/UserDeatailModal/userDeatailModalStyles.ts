import styled from 'styled-components';

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: #ffffff98;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  max-width: 500px;
  min-width: 350px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 8px #ccc;
  padding: 20px;
  color: #444;
  margin: auto 10px;

  > hr {
    width: 100%;
    margin: 15px auto;
    border: 1px solid #f1f1f1;
  }

  .modalHeader {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    .image {
      width: 72px;
      height: 72px;
      border-radius: 100%;
      margin: 10px 2px 10px 10px;
      box-shadow: 2px 2px 5px #bbb;

      > img {
        width: 72px;
        height: 72px;
        border-radius: 100%;
      }
    }

    > h2 {
      flex: 1;
      text-align: left;
      margin-left: 20px;
    }
  }

  .modalBody {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-flow: column;
    width: 100%;

    .bodyField {
      font-size: 18px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 8px auto;
      width: 100%;

      > div {
        color: #ccc;
        margin-right: 15px;
      }

      > span {
        color: #444;

        &.isLink {
          cursor: pointer;
          color: #0099ff;

          &:hover {
            color: #0077ff;
            text-decoration: underline;
          }
        }
      }
    }
  }

  .modalFooter {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 40px;
    margin-top: 10px;

    .closeBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      background-color: #fff;
      border: 1px solid #ccc;
      height: 35px;
      border-radius: 50px;
      cursor: pointer;

      &:hover {
        border-color: #aaa;
        background-color: #fafafa;
      }
    }
  }
`;
