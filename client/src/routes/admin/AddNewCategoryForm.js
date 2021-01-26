import React, { Component } from 'react';

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
      newCategory,
      changeNewCategory,
      submitNewCategory,
      filteredCategories,
      submitttingFlag,
    } = this.props;

    return (
      <div className="admin-add-new-category">
        <div style={{ position: 'relative', width: '100%' }}>
          <div className="admin-one-form-item">
            <input
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              type="text"
              placeholder="Enter category name"
              onChange={e => changeNewCategory(e.target.value)}
              value={newCategory}
            />
          </div>
          {showDropdown && (
            <div className="filtered-category-dropdown">
              {filteredCategories.map(d => (
                <div>{d.categoryName}</div>
              ))}
            </div>
          )}
        </div>
        <div className="admin-one-form-item">
          <button
            onClick={submitttingFlag ? () => {} : submitNewCategory}
            className="admin-button"
          >
            {submitttingFlag ? 'Wait...' : 'Submit'}
          </button>
        </div>
      </div>
    );
  }
}

export default AddNewCategory;
