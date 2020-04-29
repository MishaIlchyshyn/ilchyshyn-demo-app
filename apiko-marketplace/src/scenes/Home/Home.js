import React from 'react';

import s from './Home.module.scss';
import { Header } from '../../components';

const Home = () => {
    return (
        <div className={s.container}>
            <Header />
        </div>
    )
}

export default Home;
