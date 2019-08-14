import React from 'react';

import AddButton from '../add-button';
import FilterBox from '../filter-box';
import NoteFeed from '../note-feed';
import PopUp from '../pop-up';

const App = () => {
    return (
        <>
            <AddButton/>
            <FilterBox/>
            <NoteFeed/>
            <PopUp/>
        </>
    );
};

export default App;
