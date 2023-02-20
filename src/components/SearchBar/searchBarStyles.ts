import styled from 'styled-components';

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 50px;
  margin: 0 15px;
  background-color: #fff;
  width: 220px;

  &:hover,
  &:active,
  &:focus,
  &:focus-within {
    border-color: #aaa;
  }

  > input {
    border: none;
    outline: none;
    margin: 4px 10px;
    height: 25px;
    border-radius: 5px;
  }

  .searchBtn {
    margin-right: 10px;
    cursor: pointer;
    background-color: #fff;
    border: none;
    outline: none;

    > svg {
      fill: #444;
      width: 25px;
      height: 25px;
    }

    &:hover {
      > svg {
        fill: #666;
      }
    }
  }
`;
