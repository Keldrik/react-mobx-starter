import React from 'react';
import { observer } from 'mobx-react';

const Home = observer(
  class Home extends React.Component {
    componentDidMount() {
      this.props.store.getData();
    }

    render() {
      const { store } = this.props;
      return (
        <div className="row">
          <div className="col-12">
            <p>Example Data loaded from mockapi.io:</p>
          </div>
          {store.data.map(item => (
            <div className="col-4" key={item.id}>
              <div>
                <img className="img-fluid" src={item.image} alt="aaa" />
              </div>
              <div>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
);

export default Home;
