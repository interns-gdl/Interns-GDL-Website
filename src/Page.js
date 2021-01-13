import React from 'react';

class Page extends React.Component{
  render(){
    return (
      <div className="container my-3">
        <h1>{this.props.object.title}</h1>
        <hr/>
        <div dangerouslySetInnerHTML={{__html:this.props.object.content}}></div>
      </div>
      
    )
  }
}

export default Page;