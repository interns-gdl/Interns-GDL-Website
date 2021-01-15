import React from 'react';

import FacebookLogo from './img/facebook.png';
import MicrosoftLogo from './img/microsoft.png';
import AmazonLogo from './img/amazon.png';
import GoogleLogo from './img/google.png';
import { Link } from 'react-router-dom';

class Apply extends React.Component{
  state = {
    info: [
      {
        image: FacebookLogo,
        link: '/post/5051119384538675397',
      },
      {
        image: MicrosoftLogo,
        link: '/post/6944446968936035839',
      },
      {
        image: AmazonLogo,
        link: '/post/4108568350675162925',
      },
      {
        image: GoogleLogo,
        link: '/post/7805977255147481594',
      },
    ],
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          {
            this.state.info.map(company => (
              <div key={company.link} className="col-12 col-sm-6 col-md-4 col-lg-3 text-center">
                <Link to={company.link} >
                  <img src={company.image}  alt="" className="img-fluid btn-brand"/>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Apply;