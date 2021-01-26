import BackupIcon from '@material-ui/icons/Backup';
import DoneIcon from '@material-ui/icons/Done';
// import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import TimerIcon from '@material-ui/icons/Timer';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import SelectDropdown from '../../components/selectDropdown';

const AddNewItem = ({
  selectCategory,
  allCategories = [],
  selectedCategoryId,
  selectSubCategory,
  allSubCategories = [],
  subcategoriesForCategory = [],
  selectedSubCategoryId,
  changeNewItemFormData,
  newItemFormData,
  changeItemImage,
  uploadItemImage,
  submitNewItem,
  imageUrl,
  uploadingImage,
}) => (
  <div className="admin-add-new-item">
    <div className="admin-one-form-item">
      <SelectDropdown
        selectedItem={allCategories.find(d => d.id === selectedCategoryId) ?
          allCategories.find(d => d.id === selectedCategoryId).categoryName :
          'Select Category'
        }
        selectItem={id => selectCategory(id)}
        dropdownList={allCategories.map(d => ({
          id: d.id,
          value:d.categoryName,
        }))}
      />
    </div>
    <div className="admin-one-form-item">
      <SelectDropdown
        selectedItem={subcategoriesForCategory.find(d => d.id === selectedSubCategoryId) ?
          subcategoriesForCategory.find(d => d.id === selectedSubCategoryId).subCategoryName :
           'Select Sub-Category'
        }
        selectItem={id => selectSubCategory(id)}
        dropdownList={subcategoriesForCategory.map(d => ({
          id: d.id,
          value:d.subCategoryName,
        }))}
      />
    </div>
    <div className="admin-one-form-item">
      <input
        type="text"
        placeholder="Enter item name"
        onChange={e => changeNewItemFormData('itemName', e.target.value)}
        value={newItemFormData.itemName}
      />
    </div>
    <div className="admin-one-form-item">
      <textarea
        type="text"
        placeholder="Enter item description"
        onChange={e => changeNewItemFormData('itemDescription', e.target.value)}
        value={newItemFormData.itemDescription}
      />
    </div>
    <div className="admin-one-form-item file">
      <input
        type="file"
        onChange={e => changeItemImage(e)}
      />
      {uploadingImage && <TimerOutlinedIcon style={{ color: "#ed143d", marginLeft: '10px' }} />}
      {imageUrl && !uploadingImage && <DoneIcon style={{ color: 'green', marginLeft: '10px' }} /> }
      {!imageUrl && !uploadingImage && (
        <button onClick={() => uploadItemImage()}>
          <BackupIcon />
        </button>
      )}
    </div>
    <div className="admin-one-form-item">
      <input
        type="text"
        placeholder="Enter item price"
        onChange={e => changeNewItemFormData('itemPrice', e.target.value)}
        value={newItemFormData.itemPrice}
      />
    </div>
    <div className="admin-one-form-item">
      <input
        type="text"
        placeholder="Enter item offer"
        onChange={e => changeNewItemFormData('offer', e.target.value)}
        value={newItemFormData.offer}
      />
    </div>
    <div className="admin-one-form-item">
      <input
        type="text"
        placeholder="Enter item buying link"
        onChange={e => changeNewItemFormData('buyLink', e.target.value)}
        value={newItemFormData.buyLink}
      />
    </div>
    <div className="admin-one-form-item">
      <label htmlFor="check-box" className="checkbox">
        <input
          id="check-box"
          type="checkbox"
          checked={newItemFormData.isFeatured}
          value={newItemFormData.isFeatured}
          onChange={e => changeNewItemFormData('isFeatured', !newItemFormData.isFeatured)}
        /> Check if featured item
      </label>
    </div>
    <div className="admin-one-form-item">
      <button onClick={submitNewItem}>Submit</button>
    </div>
  </div>
)

export default AddNewItem;
