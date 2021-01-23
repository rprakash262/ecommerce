import { combineReducers } from 'redux';

import HomePageReducer from './HomePageReducer';
import AdminReducer from './AdminReducer';
import LayoutReducer from './LayoutReducer';
import OneCategoryReducer from './OneCategoryReducer';
import OneSubCategoryReducer from './OneSubCategoryReducer';

const rootReducer = combineReducers({
  homePage: HomePageReducer,
  admin: AdminReducer,
  layout: LayoutReducer,
  oneCategory: OneCategoryReducer,
  oneSubCategory: OneSubCategoryReducer,
});

export default rootReducer;