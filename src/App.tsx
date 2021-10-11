import React from 'react';
import styles from './app.module.scss';
import MainRouter from './components/router/mainRouter';
import Sidebar from './components/sidebar/sidebar';

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  const myName = 'ASD';
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <MainRouter />
        </div>
      </div>
      <div className={styles.sidebar}>
        <Sidebar name={myName} />
      </div>
    </div>
  )
}

export default App

