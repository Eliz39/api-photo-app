import React, { useState } from 'react'

const BASE_URL_WEATHER = 'http://api.weatherapi.com/v1';
const SEARCH_ENDPOINT_WEATHER = '/current.json';

const BASE_URL_PHOTO = 'https://api.unsplash.com/';
const SEARCH_ENDPOINT_PHOTO = 'search/photos/';

function Form({setPhotos, setText}) {
    const [searchValue, setSearchValue] = useState('')

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    const fetchWeather = () => {
        fetch(BASE_URL_WEATHER + SEARCH_ENDPOINT_WEATHER + '?' + new URLSearchParams({
            key: 'fb716e70c15c4f608e7151923221707',
            q: searchValue,
        }))
            .then(res => {
                if(res.ok) {
                    return res.json()
                } else {
                    setPhotos([])
                    setText('City is not found :(')
                    throw Error(res.statusText);
                }
            })
            .then(res => {
                if(res !== undefined) {
                    fetchPhotos(res.current?.condition?.text)
                }
            })
            .catch((err) => { console.log(err)});
    }

    const fetchPhotos = (weather) => {
            fetch(BASE_URL_PHOTO + SEARCH_ENDPOINT_PHOTO + '?' + new URLSearchParams({
                client_id: 'iyuVdLOAUgdEhLU1IQjBIwkk1pcYwGLikF5Ij9g6SZQ',
                query: `${weather} weather ${searchValue}`,
            }))
                .then(res => res.json())
                .then(data => setPhotos(data.results))
                .catch(err => console.error(err));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchWeather()
        setSearchValue('')
    }

    return (
        <form className='search-form'  onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter city to see weather' value={searchValue} onChange={handleChange} />
            <input type="submit" value="Get photo" />
        </form>
    )
}

export default Form