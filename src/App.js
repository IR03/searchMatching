import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useEffect, useState } from 'react';

function App() {
  const [likeColor, setLikeColor] = useState(' ');
  const [search, setSearch] =useState('');
  const [meals, setMeals] = useState([]);

  const handleLike = () => {
    const color = likeColor ? '': 'primary';
    setLikeColor(color);
  }
  const handleChange = event =>{
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  useEffect(()=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setMeals(data.meals) )
  } , [search])

  return (
    <div className="App">
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpAltIcon onClick={handleLike} color={likeColor}></ThumbUpAltIcon>
       <h1>Delicious Foods</h1>
       <input type="text" onChange={handleChange} placeholder="search food"/>
       <p>Searching : {search}</p>
       <p>Meals : {meals?.length || 0}</p>
       {
         meals?.map(meal => <li>{meal.strMeal}</li>)
       }
    </div>
  );
}

export default App;
