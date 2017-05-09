import React from 'react';
import styled  from 'styled-components';
import bgi from './home-bg-01.png';
export const Section = styled.section`
  width: 100%;
  min-width: 1024px;
  padding-bottom: 50%;
  position: relative;
  left: 0;
  top: 0;

  @media screen and (max-width: 1024px) {
    padding-bottom: 500px;
`;
export const Div_container = styled.div`
  min-width: 1024px;
  min-height: 500px;
  background-image:url(${bgi});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding-top: 17%;
  padding-left: 10%;

  `;
  export const Div_content = styled.div`
    `;
export const H1 = styled.div`
  color: white;
  font-size: 56px;
  font-weight: bold;
  line-height: 60px;
  letter-spacing: 2px;
`;
