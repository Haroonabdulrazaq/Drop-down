import React from 'react';
import Card from './Card';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Home = ({property}) => {

    return(
        <div className="page">
            <section>
                <h1>React Transition Group classes breakdown.</h1>
            </section>
            
            <TransitionGroup className="card-container">
              <CSSTransition
              timeout={1500}
              key={property._id}
              classNames="fade"
              >
                <Card property={property} />
              </CSSTransition>
            </TransitionGroup>

        </div>   
    )
}

export default Home;