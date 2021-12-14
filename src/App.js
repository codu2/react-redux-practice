import React from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header'; 
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <React.Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </React.Fragment>
  );
}

export default App;

//사용자 인증이 안된 경우 <Auth /> 컴포넌트를, 사용자 인증이 된 경우 <UserProfile /> 컴포넌트를 렌더링 함
