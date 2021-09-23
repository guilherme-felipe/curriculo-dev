import styled from 'styled-components';

export const PageContent = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  max-width: 1024px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const PageCard = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  text-align: center;
  color: white;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);

  background-image: url('https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ');

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.009) 11.7%,
      rgba(0, 0, 0, 0.034) 22.1%,
      rgba(0, 0, 0, 0.072) 31.2%,
      rgba(0, 0, 0, 0.123) 39.4%,
      rgba(0, 0, 0, 0.182) 46.6%,
      rgba(0, 0, 0, 0.249) 53.1%,
      rgba(0, 0, 0, 0.32) 58.9%,
      rgba(0, 0, 0, 0.394) 64.3%,
      rgba(0, 0, 0, 0.468) 69.3%,
      rgba(0, 0, 0, 0.54) 74.1%,
      rgba(0, 0, 0, 0.607) 78.8%,
      rgba(0, 0, 0, 0.668) 83.6%,
      rgba(0, 0, 0, 0.721) 88.7%,
      rgba(0, 0, 0, 0.762) 94.1%,
      rgba(0, 0, 0, 0.79) 100%
    );
    transform: translateY(-50%);
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  z-index: 1;
  margin-top: 1rem;
`;

export const RepoTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.2;
`;
export const RepoDesc = styled.p`
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.35;
`;

export const RepoBtn = styled.a`
  cursor: pointer;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.65rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: none;

  &:hover {
    background-color: #0d0d0d;
  }

  &:focus {
    outline: 1px dashed yellow;
    outline-offset: 3px;
  }
`;
