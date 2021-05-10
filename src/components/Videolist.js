import React from 'react'
import VideoItem from './VideoItem'

const Videolist = ({videos , onVideoSelect }) => {
    const renderList = videos.map(video =>{
         return <VideoItem onVideoSelect={onVideoSelect} video ={video} />
    })
    
    return(
        <div className='ui relaxed divided list'>
           {renderList}
        </div>
    )

}

export default Videolist