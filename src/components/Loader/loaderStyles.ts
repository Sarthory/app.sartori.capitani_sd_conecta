import styled from 'styled-components';

export const LoaderContainer = styled.div`
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

  .loader {
    border: 8px solid #d1d5db;
    border-radius: 50%;
    border-top: 8px solid #0099ff;
    width: 65px;
    height: 65px;
    -webkit-animation: spin 800ms linear infinite;
    animation: spin 800ms linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
