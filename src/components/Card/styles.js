import styled, { css } from "styled-components";

export const Container = styled.div`
  cursor: grab;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.components_background};
  opacity:  ${({ hideCard }) => hideCard ? 0.2 : 1};
  width: 18.75rem;
  height: 6.87rem;
  margin: 0.7rem 0.7rem;
  padding: 1.2rem 1rem 0.7rem 1rem;

  border-radius: 0.5rem;
  border: 1px solid ${({theme}) => theme.colors.border};
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: rgba(230,236,245,0.4);

  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.125rem;
    margin-top: 0.3125rem;
  }

  ${({ isDragging }) => isDragging && css`
    border: 2px solid #fff;
    box-shadow: 0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 2rem ${({color}) => color},
            0 0 0.8rem ${({color}) => color},
            0 0 2.8rem ${({color}) => color},
            inset 0 0 1.3rem ${({color}) => color}; 
    cursor: grabbing;
  `}; 
`;

export const CardBorder = styled.div`
  position: absolute;
  width: calc(100% + 0.22px);
  top: 0px;
  left: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 11px;
  background-color: ${({color}) => color};

  &:before{
    content: '';
    width: 80px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const Label = styled.h3`
  font-weight: 500;
  line-height: 20px;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const DeleteButton = styled.div`
  display: flex;
  svg {
    transition: filter 0.2s;
    transition: transform 0.2s;
    border-bottom: transparent;
    color: ${({theme}) => theme.colors.bug};
    
    &:hover {
      filter: brightness(0.9);
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`;

export const CategoryCard = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3125rem 0.625rem;

  p {
    text-transform: uppercase;
    color: #fff;
    font-weight: 500;
    font-size: 0.75rem;
    cursor: grab;
  }
`;