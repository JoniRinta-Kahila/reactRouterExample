import React from 'react';
import { SidebarItems } from './sidebarItems';
import styles from './sidebar.module.scss';
import { Link } from 'react-router-dom';

type SidebarProps = {
  name: string
}

const Sidebar: React.FC<SidebarProps> = ({ name }) => {
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      {
        SidebarItems.map(x => {
          return (
            <div key={x.key}>
              <Link to={x.to}>{x.name}</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Sidebar
