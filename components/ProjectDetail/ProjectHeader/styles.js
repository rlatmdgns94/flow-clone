import styled, { css } from 'styled-components';

export const DetailHeader = styled.div`
  background: #fff;
`;
export const DetailHeaderTop = styled.div`
padding:25px 30px;
`;
export const DetailProjectColor = styled.i`
  display: inline-block;
  min-width: 50px;
  min-height: 50px;
  background: #fd7900;
  border-radius: 10px;
  margin-right: 20px;
  vertical-align: middle;
`;
export const DetailHeaderInner = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
export const DetailTitle = styled.h3`
  display: inline-block;
  margin: 0;
  font-weight: bold;
  font-size: 20px;
  color: #333;
  vertical-align: middle;
`;
export const FavoriteButton = styled.button``;
export const SetButton = styled.button``;

export const DetailTitleArea = styled.div`
  display: inline-block;
`;

export const DetailDescription = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 14px;
  color: #999;
`;

export const DetailMenu = styled.ul`
  margin:0;
  padding: 0 30px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background: #fff;
  &::after {
    display: block;
    content: '';
    clear: both;
  }
`;

export const DetailMenuItem = styled.li`
  float: left;
  position:relative;
  padding:10px;
  font-weight: bold;
  font-size: 16px;
  color:#999;
  list-style: none;
  & + & {
    margin-left:20px;
  }
  ${(props) => props.active && css`
    color:#333;
    &::after{
      display: block;
      position:absolute;
      left:0;
      bottom:0;
      right:0;
      content:"";
      height: 4px;
      border-radius:50px;
      background: #333;
    }
  `}
`;
