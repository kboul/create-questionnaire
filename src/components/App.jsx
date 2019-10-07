import React from 'react';
import Questions from './Questions';
import AddNewQuestionBtn from './AddNewQuestionBtn';

const App = () => {
    return (
        <div className="container-fluid mt-4">
            <div className="col-md-8 offset-md-2">
                <AddNewQuestionBtn />
                <Questions />
            </div>
        </div>
    );
};

export default App;
