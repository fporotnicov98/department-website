import React from 'react';
import style from './App.module.scss';
import './normalize.scss'
import Header from './component/Header/Header';
import { Route } from 'react-router-dom';
import NewsContainer from './component/News/NewsContainer';
import SurveyContainer from './component/Survey/SurveyContainer';
import ForumContainer from './component/Forum/ForumContainer';
import Information from './component/Imformation/Information';
import ForumItem from './component/Forum/ForumItem/ForumItem';

const App = () => {
  return (
    <div>
      <Header />
      <div className={style['container']}>
        <Route path='/news' render={() => <NewsContainer />} />
        <Route path='/survey' render={() => <SurveyContainer />} />
        <Route exact path='/forum' render={() => <ForumContainer />}/>
        <Route path='/info' render={() => <Information />} />
      </div>
    </div>
  )
}

export default App;
