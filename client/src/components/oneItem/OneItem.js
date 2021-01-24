import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import './OneItem.css';

function OneItem({ item, loggedIn, editItem, deleteItem }) {
  return (
    <div className="home-page-one-item">
      {loggedIn && (
        <div className="loggedin-btn" onClick={() => editItem(item)}>
          <EditIcon style={{ color: '#fff' }} /> 
        </div>
      )}
      {loggedIn && (
        <div className="delete-btn" onClick={() => deleteItem(item)}>
          <DeleteIcon style={{ color: '#fff' }} />
        </div>
      )}
      <div className="home-page-one-item-img">
        <img alt="item-img" src={item.itemImage} />
      </div>
      <div className="home-page-one-item-desc">
        <h4>{item.itemName}</h4>
        {/* <p>{item.itemDescription.slice()}</p> */}
        <p>Rs. {item.itemPrice} /-</p>
        <p>Offer - {item.offer || 'NA'}</p>
        <button>
          <a href={item.buyLink} target="_blank">View / Buy Product</a>
        </button>
      </div>
    </div>
  );
}

export default OneItem;
