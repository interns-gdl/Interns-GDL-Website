import React from 'react';

import Loader from './Loader.js';
import NotFound from './NotFound.js';

class Post extends React.Component{
  constructor(props){
    super(props);
    this.blog = window.blog;
  }

  state = {
    loading: true,
    post: null,
  }

  async componentDidMount(){
    const id = this.props.id;
    const post = await this.blog.requestPost(id);

    if (post.error)
      this.setState({ error:true });

    this.setState({
      loading: false,
      post: post,
    });
  }

  render(){
    if (this.state.error)
      return <NotFound/>
      
    if (this.state.loading)
      return <Loader/>;

    const post = this.state.post;

    return (
      <div className="container my-3">
        <h1>{post.title}</h1>
        <hr/>
        <div dangerouslySetInnerHTML={{__html:post.content}}></div>
      </div>
      
    )
  }
}

export default Post;