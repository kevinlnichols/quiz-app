import React from 'react';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';

import LandingPage from './landing-page';
import QuizPage from './quiz-page';

export class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/quiz-page" component={QuizPage} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;