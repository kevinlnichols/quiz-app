import React from 'react';
import {Link} from 'react-router-dom';

import Header from './header';

export function LandingPage(props) {
    return (
        <main>
            <Header />
            <section className="start-page">
                <h4>Are you ready? Press start!</h4>
                {/* <Link className="start-quiz" to="./quiz-page" >Start Quiz</Link> */}
            </section>
        </main>
    )
}

export default LandingPage;