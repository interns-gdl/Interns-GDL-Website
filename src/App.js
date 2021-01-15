import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar.js';
import Footer from './Footer.js';
import NotFound from './NotFound.js';
import Page from './Page.js';
import Feed from './Feed.js';
import Loader from './Loader.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.blog = window.blog;
  }

  state = {
    loading: true,
    pages:{
      wellcome: {
        id: '7828841653756224765',
        object: null,
      },
      apply: {
        id: '2328598739056066741',
        object: null,
      },
      workshops: {
        id: '2199017357197818931',
        object: null,
      },
      events: {
        id: '3211716656855425183',
        object: null,
      },
      resources: {
        id: '3698218358457609822',
        object: null,
      },
      fun: {
        id: '163070253310031958',
        object: null,
      },
      about: {
        id: '5970652687288488125',
        object: null,
      },
    },
  }

  async componentDidMount(){
    const pages = {}
    for (const label in this.state.pages) {
      const element = this.state.pages[label];
      pages[label] = {
        id: element.id,
        object: await this.blog.requestPage(element.id),
      }
    }
    this.setState({ loading:false, pages: pages });
  }

  render(){
    return (
      <div className="bg-light">
        <Router>
        <header>
          <Navbar />
        </header>
        <main>
          {
            this.state.loading ? 
            <Loader /> :
            (
            <div>
              <Switch>
                <Route exact path="/" render={()=>(
                  <Page object={this.state.pages.wellcome.object}/>
                )} />

                <Route exact path="/apply" render={()=>(
                  <div>
                    <Page object={this.state.pages.apply.object}/>
                    <h1>Apply APP</h1>
                  </div>
                  
                )} />

                <Route path="/:pageId" render={({ match })=>{
                  if(this.state.pages[match.params.pageId]){
                    const onlyDescription = ['workshops', 'events'].includes(match.params.pageId);
                    return(
                      <div>
                        <Page object={this.state.pages[match.params.pageId].object}/>
                        <Feed label={match.params.pageId} onlyDescription={onlyDescription} />
                      </div>
                    ) 
                  }
                  else
                    return <NotFound/>
                }} />
                
                <Route component={NotFound}/>
              </Switch>

            </div>
            )

          }
          

        </main>

        <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
