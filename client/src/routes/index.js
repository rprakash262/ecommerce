import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
  
import { ACTIONS } from '../reducers/LayoutReducer';
import HomePage from './homePage';
import OneProduct from './oneProduct';
import OneCategory from './oneCategory';
import OneSubcategory from './oneSubcategory';
import Admin from './admin';
import Banner from '../components/banner';
import Navbar from '../components/navbar';
// import Footer from '../components/footer';
import AlertBar from '../components/alertBar';
import EditItemModal from '../components/editItemModal';

const SearchResult = '';

class App extends Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    const {
      showAlert,
      alertType,
      alertMsg,
      hideAlert,
      editItemModal,
      hideEditItemModal,
    } = this.props;

    return (
      <div>
        <Banner />
        <Navbar />
        <div className="container" style={{ width: '90%', margin: 'auto', padding: '10px' }}>
          <BrowserRouter>
            <Route
                exact
                path="/"
                component={HomePage}
            />
              <Route
                  exact
                  path="/category"  
                  component={OneCategory}
              />
              <Route
                  exact
                  path="/category/subCategory"  
                  component={OneSubcategory}
              />
              <Route
                  exact
                  path="/category/subCategory/product"  
                  component={OneProduct}
              />
              <Route
                  exact
                  path="/search"  
                  component={SearchResult}
              />
              <Route
                  exact
                  path="/admin"  
                  component={Admin}
              />
          </BrowserRouter>
        </div>
        {/* <Footer /> */}
        {editItemModal && (
          <EditItemModal hideEditItemModal={hideEditItemModal} />
        )}
        <AlertBar
          showAlert={showAlert}
          alertType={alertType}
          alertMsg={alertMsg}
          hideAlert={hideAlert}
        />
      </div>
    );
  }
}

const mapState = state => {
  const {
    showAlert,
    alertType,
    alertMsg,
    editItemModal,
  } = state.layout;

  return {
    showAlert,
    alertType,
    alertMsg,
    editItemModal,
  }
}

const mapDispatch = {
  hideAlert: ACTIONS.hideAlert,
  init: ACTIONS.init,
  hideEditItemModal: ACTIONS.hideEditItemModal
};

export default connect(mapState, mapDispatch)(App);