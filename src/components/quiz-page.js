import React from 'react';
import QuizKey from '../mock-data/quiz-key';

import Header from './header';
import Question from './question';

export class QuizPage extends React.Component {

    render() {
       
        console.log('hi', QuizKey)
        return (
            <main>
                <Header />
                <Question content="What is this plant?" />
            </main>
        )
    }
}

export default QuizPage;