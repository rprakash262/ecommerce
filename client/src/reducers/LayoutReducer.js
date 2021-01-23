import { mainActions } from '../actions';

const { fetchNavbar } = mainActions;

const SET_ALERT = 'LayoutReducer/SET_ALERT';
const HIDE_ALERT = 'LayoutReducer/HIDE_ALERT';
const SET_NAVBAR = 'LayoutReducer/SET_NAVBAR';
const TOGGLE_EDIT_ITEM_MODAL = 'LayoutReducer/TOGGLE_EDIT_ITEM_MODAL';

const setNavbar = navbar => ({ type: SET_NAVBAR, navbar });
const toggleEditItemModal = bool => ({ type: TOGGLE_EDIT_ITEM_MODAL, bool });

const defaultState = {
  editItemModal: false,
  showAlert: false,
  alertType: '',
  alertMsg: '',
  navbar: {},
};

const init = () => async dispatch => {
  try {
    const response = await fetchNavbar();

    const { result } = response;

    dispatch(setNavbar(result));
  } catch (err) {
    console.log(err);
  }
}

export const ACTIONS = {
  init,
  hideAlert: () => ({ type: HIDE_ALERT }),
  setAlert: (bool, alertType, alertMsg) => ({ type: SET_ALERT, bool, alertType, alertMsg }),
  showEditItemModal: () => toggleEditItemModal(true),
  hideEditItemModal: () => toggleEditItemModal(false),
};

function LayoutReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ALERT:
      return Object.assign({}, state, {
        showAlert: action.bool,
        alertType: action.alertType,
        alertMsg: action.alertMsg,
      });
    case HIDE_ALERT:
      return Object.assign({}, state, { showAlert: false });
    case SET_NAVBAR:
      return Object.assign({}, state, { navbar: action.navbar });
    case TOGGLE_EDIT_ITEM_MODAL:
      return Object.assign({}, state, {
        editItemModal: action.bool
    });
    default:
      return state;
  }
}

export default LayoutReducer;