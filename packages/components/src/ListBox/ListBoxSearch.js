import React from 'react';
import PropTypes from 'prop-types';
import { Search } from '@alteryx/icons';
import { FormControl, FilledInput, InputAdornment, useTheme } from '../';

const propTypes = {
  onChange: PropTypes.func,
  searchPlaceholderText: PropTypes.string.isRequired,
  title: PropTypes.node
};

const defaultProps = {
  onChange: () => {},
  title: undefined
};

function ListBoxSearch({ classes, searchPlaceholderText, onChange, title }) {
  const { palette } = useTheme();

  return (
    <FormControl
      classes={{
        root: classes.searchFormControl
      }}
    >
      <FilledInput
        classes={{
          root: classes.searchInput
        }}
        inputProps={{ 'aria-labelledby': title }}
        onChange={({ target: { value: keyword } }) => onChange(keyword)}
        placeholder={searchPlaceholderText}
        role="search"
        startAdornment={
          <InputAdornment position="start">
            <Search color={palette.type === 'dark' ? palette.text.secondary : palette.blueGrey[500]} size="small" />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

ListBoxSearch.propTypes = propTypes;
ListBoxSearch.defaultProps = defaultProps;

export default ListBoxSearch;
