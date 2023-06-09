import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import styled from "styled-components";
import Lupa from "../IMG/Icon ionic-ios-search.png";

const SliderBox = styled.section`
  height: 70vh;
  padding: 1rem;
  border: 2px white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: #f2f2f2;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 87vw;
  }
  li {
    list-style: none;
    color: white;
  }
`;

export default function Carousel() {
  const [filmes, setFilmes] = useState([]);

  const getApi = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=1"
      )
      .then((response) => {
        setFilmes(response.data.results);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };
  return (
    <>
      <Nav>
        <ul>
          <li>Popular</li>
          <li>Drama</li>
          <li>Ação</li>
          <li>Aventura</li>
          <li>Comedia</li>
          <li>Crime</li>
          <li>Fantasia</li>
          <li>Familia</li>
          <img src={Lupa} alt="" />
        </ul>
      </Nav>
      <SliderBox>
        <Slider {...settings} style={{ width: "95%" }}>
          {filmes.map((item) => (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
                style={{ width: "80%" }}
              />
              <h2>{item.title} </h2>
            </div>
          ))}
        </Slider>
      </SliderBox>
      <section></section>
    </>
  );
}
