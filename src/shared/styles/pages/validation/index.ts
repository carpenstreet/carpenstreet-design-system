import { Font } from '@shared/styles';
import React from 'react';
import styled from 'styled-components';

export const ValidationContainer = styled.main<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  gap: 30px;

  & > .form-control-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;

    & > .discription {
      ${Font.title15}
      font-size:12px;
      font-weight: 100;
      padding-left: 5px;
    }
    & > input {
      height: 30px;
      width: 100%;
      border: 1px solid #ddd;
      padding: 9px 12px;
    }
    & > .error {
      ${Font.title15}
      font-size:10px;
      font-weight: 100;
      color: red;
      padding-left: 5px;
    }
  }
`;
