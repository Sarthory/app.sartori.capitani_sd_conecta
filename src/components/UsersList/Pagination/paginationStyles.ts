import styled from 'styled-components';

export const PaginationContainer = styled.div`
  margin: 5px auto;
  padding: 0 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    font-size: 12px;
    font-weight: light;
    color: #999;
  }

  > button {
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    background-color: #fff;
    cursor: pointer;

    > svg {
      fill: #666;
      width: 30px;
      height: 30px;

      &:hover {
        fill: #444;
      }
    }

    &:disabled {
      cursor: not-allowed;
      > svg {
        fill: #ccc;
        width: 30px;
        height: 30px;

        &:hover {
          fill: #ccc;
        }
      }
    }
  }
`;
