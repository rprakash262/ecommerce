import React, { Component } from 'react';

import SelectDropdown from '../../components/selectDropdown';

class AddNewCategory extends Component {
  constructor() {
    super();
    this.state = {
      showDropdown: false,
    }
  }

  onFocus = () => {
    this.setState({
      showDropdown: true,
    });
  }

  onBlur = () => {
    this.setState({
      showDropdown: false,
    });
  }

  render() {
    const { showDropdown } = this.state;
    
    const {
      allCategories,
      changeNewSubCategory,
      newSubCategory,
      selectedCategoryId,
      selectCategory,
      submitNewSubCategory,
      filteredSubCategories,
    } = this.props;

    return (
      <div className="admin-add-new-sub-category">
        {/* <div className="admin-one-form-item">
          <select
            defaultValue=""
            className="admin-select"
            onChange={e => selectCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {allCategories.map(category => (
              <option
                key={category.id}
                selected={selectedCategoryId === category.id}
                value={category.id}
              >
                {category.categoryName}
              </option>
            ))}
          </select>
        </div> */}
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
        <div style={{ position: 'relative', width: '100%' }}>
          <div className="admin-one-form-item">
            <input
              type="text"
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              placeholder="Enter sub-category name"
              onChange={e => changeNewSubCategory(e.target.value)}
              value={newSubCategory}
            />
          </div>
          {showDropdown && (
            <div className="filtered-category-dropdown">
              {filteredSubCategories.map(d => (
                <div>{d.subCategoryName}</div>
              ))}
            </div>
          )}
        </div>
        <div className="admin-one-form-item">
          <button
            onClick={submitNewSubCategory}
            className="admin-button"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default AddNewCategory;
