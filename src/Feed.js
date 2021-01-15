import React from 'react';

import PostPreview from './PostPreview.js';
import Loader from './Loader.js';

class Feed extends React.Component{
    constructor(props){
        super(props);
        this.blog = window.blog;

        this.loadMoreContent = this.loadMoreContent.bind(this);
    }

    state = {
        loading : true,
        content: null,
    }

    async loadContent(){
        const label = this.props.label;
        const feed = await this.blog.requestFeed(label);

        const content = this.state.content ? JSON.parse(JSON.stringify(this.state.content)) : {}
        content[label] = feed;

        this.setState({
            loading: false,
            content: content,
        });
    }

    async loadMoreContent(){
        const label = this.props.label;
        const nextPageToken = this.state.content[label].nextPageToken;
        const feed = await this.blog.requestNextFeed(label, nextPageToken);

        const content = this.state.content ? JSON.parse(JSON.stringify(this.state.content)) : {}
        content[label].nextPageToken = feed.nextPageToken;
        content[label].items = content[label].items.concat(feed.items);

        this.setState({
            loading: false,
            content: content,
        });
    }

    async componentDidMount(){
        await this.loadContent();   
    }

    async componentDidUpdate(prevProps){
        const label = this.props.label;

        if (prevProps.label === label) return;

        if (!this.state.content) return;

        if (this.state.content[label]){
            //re-render
        }
        else{
            await this.loadContent();
        }
    }

    render(){
        const content = this.state.content;
        const label = this.props.label;

        if(this.state.loading || !content[label]){
            return <Loader />
        }
        
        const items = content[label].items;
        if (!items) 
            return <div></div>

        const posts = items.map(item =>(
            <PostPreview key={ item.id } item= {item} onlyDescription={this.props.onlyDescription} />
        ));
    
        return (
            <div className="container my-3">
                { posts }
                { content[label].nextPageToken ? 
                <button className="btn" onClick={ this.loadMoreContent }>Load more</button>
                :
                ''
                }
            </div>
        )
    }
}

export default Feed;