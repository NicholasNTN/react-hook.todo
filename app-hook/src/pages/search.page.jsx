
import React from 'react'
import { useState } from 'react';
import Filter from '../views/filter';
import NavSearch from '../views/nav.search';
import SideBar from '../views/side.bar';
import Video from '../views/video';
import axios from 'axios'

const SearchPage = () => {

    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('');

    const handleSearchYt = async () => {

        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '10',
                'key': 'AIzaSyAiz-msz393GJzumcQaiSX3Y6W86YIXNMQ',
                'type': 'video',
                'q': query,
            }
        })

        console.log(">>>Respone youtube", res);

        if (res.data && res.data.items) {
            let raw = res.data.items;
            let result = [];
            if (raw && raw.length > 0) {
                // eslint-disable-next-line array-callback-return
                raw.map(item => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.createAt = item.snippet.publishedAt;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;

                    result.push(object);

                });
            }

            setVideos(result);
        }
    }


    return (
        <div className='search-container'>
            <NavSearch
                query={query}
                setQuery={setQuery}
                handleSearchYt={handleSearchYt}
            />
            <SideBar />
            <Filter />
            <Video
                videos={videos}
                setVideos={setVideos}
            />
        </div>
    )
}

export default SearchPage;