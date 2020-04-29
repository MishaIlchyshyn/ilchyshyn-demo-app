import React from 'react';

import s from './RedirectBetweenForms.module.scss';

const RedirectBetweenForms = ( props ) => {
    return (
        <div className={s.RedirectBetweenForms}>
            <span className={s.text} >
                {props.text}
            </span>
            {props.redirect}
        </div>
    );
};

export default RedirectBetweenForms;