import React, {useState, useEffect} from 'react';
import Search from '../components/Search.jsx';
import {connect} from 'react-redux';
import Carousel from '../components/Carousel.jsx';
import CarouselItem from '../components/CarouselItem.jsx';
import Categories from '../components/Categories.jsx';
import useInitialState from '../hooks/useInitialState.js';
import '../assets/styles/App.scss';


//const API = 'http://localhost:3000/initialState/'

const Home = ({ myList, trends, originals}) => {
  //const initialState = useInitialState(API);
  return ( //initialState.length === 0 ? <h1>Loading...</h1> :(
  <>
  <Search />
  {/*initialState*/.myList.length > 0 &&
    <Categories title="mi lista">
    <Carousel>
     <CarouselItem/>
    </Carousel>
    </Categories>
  }


  <Categories title="Tendencias">
   <Carousel>
     {/*initialState*/.trends.map(item =>
       <CarouselItem key={item.id} {...item}/>
     )}
  </Carousel>
  </Categories>


  <Categories title="originals">
   <Carousel>
     {/*initialState*/.originals.map(item =>
       <CarouselItem key={item.id} {...item}/>
     )}
  </Carousel>
  </Categories>

  </>
 );
}

const mapStateToProps = state =>{
  return{
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

//export default Home;
export default connect(mapStateToProps, null)(Home);
