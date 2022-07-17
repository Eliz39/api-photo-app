import React, { useState } from 'react'
import Form from './Form'
import Photos from './Photos'

const App = () => {
    const [photos, setPhotos] = useState([]);
    const [text, setText] = useState('');

    return (
        <div className='wrapper' >
            <Form setPhotos={setPhotos} setText={setText} />
            <Photos photos={photos} text={text} />
        </div>
    )

}

export default App