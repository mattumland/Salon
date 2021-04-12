import React from 'react';
import GalleryContext from './gallery-context';

const GalleryState = (props) => {
    return (
        <GalleryContext.Provider value={{ [state, dispatch]}}>
            {props.children}
        </GalleryContext.Provider>
    );
}

export default GalleryState;