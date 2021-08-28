import React from 'react';
import './App.css';
import youtube from '../apis/youtube';
import Searchbar from './Searchbar';
import Videolist from './Videolist';
import VideoDetail from './VideoDetail';


class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount(){
        this.onmyInputSubmit('Programming')
    }

    onmyInputSubmit = async myInput => {
        const response = await youtube.get('/search', {
            params: {
                q: myInput
            }
        });


        this.setState({
             videos: response.data.items,
            selectedVideo: response.data.items[0]
            
             });
        
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    };
    render() {
        return (
            <div className='ui container design'>
                <Searchbar onFormSubmit={this.onmyInputSubmit} />
                <div className='ui grid design1 ' >
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <Videolist onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App