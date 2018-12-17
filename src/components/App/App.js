import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ErrorPageContainer from '../../containers/ErrorPageContainer';
import LandingPageContainer from '../../containers/LandingPageContainer';
import styles from './App.less';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className={styles.page}>
          <Grid fluid>
            <Row>
              <Col>
                <Header />
                <Switch>
                  <Route path="/" component={LandingPageContainer} exact />
                  <Route path="/error" component={ErrorPageContainer} />
                </Switch>
                <Footer />
              </Col>
            </Row>
          </Grid>
        </div>
      </HashRouter>
    );
  }
}

export default App;
