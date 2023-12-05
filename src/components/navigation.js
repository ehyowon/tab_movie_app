import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Title = styled.div`
  position: sticky;
  font-size: 70px;
  font-weight: 600;
  color: white;
  text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white;
  margin-left: 180px;
`;
const Banner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  background: linear-gradient(45deg, darkslateblue, mediumorchid);
  padding: 20px;
  height: 95px;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 20px;
  margin-left: 170px;
`;
const Home = styled.span`
  font-size: 25px;
  font-weight: bolder !important;
  margin-right: 30px;
`;
const Movie = styled.span`
  font-size: 25px;
  font-weight: bolder !important;
  margin-right: 30px;
`;
const Drama = styled.span`
  font-size: 25px;
  font-weight: bolder !important;
  margin-right: 30px;
`;
const Program = styled.span`
  font-size: 25px;
  font-weight: bolder !important;
  margin-right: 30px;
`;
const Search = styled.div`
  font-size: 60px;
  font-weight: 600;
  margin-right: 190px;
`;

export function Nav() {
  const navigate = useNavigate();
  const onClick = (r) => {
    navigate(`/${r}`);
  };
  return (
    <Banner>
      <Title onClick={() => onClick("")}>🍄99Study</Title>
      <Menu>
        <Home onClick={() => onClick("home")}>홈</Home>
        <Movie onClick={() => onClick("movies")}>영화</Movie>
        <Drama>드라마</Drama>
        <Program onClick={() => onClick("tv")}>TV</Program>
      </Menu>
      <Search onClick={() => onClick("search")}>⌕</Search>
    </Banner>
  );
}
