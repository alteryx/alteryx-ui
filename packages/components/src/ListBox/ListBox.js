import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { gte, invoke } from 'lodash';
import { Grid, ListItemText, Typography, Box, withStyles } from '../';

import ListBoxSearch from './ListBoxSearch';
import ListBoxActionBar from './ListBoxActionBar';
import ListBoxContainer from './ListBoxContainer';
import ListBoxFooter from './ListBoxFooter';
import theme from './theme';

const ROW_HEIGHT = 37;
const GUTTER = 4;
const ROW_WITH_DIVIDER_HEIGHT = ROW_HEIGHT + 1;

const gridHandleScrollPath = 'current.Grid.handleScrollEvent';

export const propTypes = {
  actions: PropTypes.node,
  'aria-describedby': PropTypes.string,
  'aria-label': PropTypes.string,
  'aria-labelledby': PropTypes.string,
  checkAllText: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.any),
  'data-uic': PropTypes.string.isRequired,
  dividers: PropTypes.bool,
  footerText: PropTypes.string,
  hideFooter: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      tooltip: PropTypes.string,
      value: PropTypes.string.isRequired,
      selected: PropTypes.bool,
      disabled: PropTypes.bool
    })
  ),
  ListItemTextComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.func]),
  maxVisibleItems: PropTypes.number,
  noOptions: PropTypes.node,
  noResultsText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  searchLimit: PropTypes.number,
  searchPlaceholderText: PropTypes.string,
  /**
   * Return new lists.
   * @param {Object[]} items - The items list.
   * @param {string} items[].name - The name of an item.
   * @param {string} items[].value - The items's value.
   * @param {bool} items[].selected - Is an item selected.
   */
  showCheckAll: PropTypes.bool,
  showSearch: PropTypes.bool,
  subheader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

const defaultProps = {
  'aria-describedby': undefined,
  'aria-label': undefined,
  'aria-labelledby': undefined,
  actions: null,
  checkAllText: 'Check All',
  classes: {},
  dividers: false,
  footerText: '{checked} of {total} Checked',
  hideFooter: false,
  items: [],
  ListItemTextComponent: ListItemText,
  maxVisibleItems: 7.5,
  noOptions: null,
  noResultsText: 'No results',
  searchLimit: 20,
  searchPlaceholderText: 'Search',
  showCheckAll: true,
  showSearch: true,
  subheader: null,
  title: null
};

class ListBox extends Component {
  /* used for scrolling handling */
  containerRef = createRef();

  constructor(props) {
    super(props);
    const { maxVisibleItems, dividers } = this.props;
    this.state = {
      keyword: null
    };

    this.maxHeight = dividers === true ? ROW_WITH_DIVIDER_HEIGHT * maxVisibleItems : ROW_HEIGHT * maxVisibleItems;

    this.gutter = dividers ? 0 : GUTTER;
  }

  getActualHeight = quantity => {
    const { maxVisibleItems, dividers } = this.props;
    if (quantity >= maxVisibleItems) return this.gutter + this.maxHeight;
    return this.gutter * 2 + (dividers === true ? quantity * ROW_WITH_DIVIDER_HEIGHT : quantity * ROW_HEIGHT);
  };

  handleScroll = ({ target: { scrollTop, scrollLeft } }) =>
    invoke(this.containerRef, gridHandleScrollPath, { scrollTop, scrollLeft });

  /*
    FILTER KEYWORD WITH NORMALIZATION
    done for specific cases such as dynamic field
    with tooltip
  */
  comparator = keyword => item => !keyword || item.name.toLowerCase().includes(keyword.toLowerCase());

  searcher = keyword => {
    const { items } = this.props;
    return items.filter(this.comparator(keyword));
  };

  selector = value => (event, selected) => {
    const { items, onChange } = this.props;
    const { keyword } = this.state;
    const comparator = this.comparator(keyword);
    let internalIndex;

    // eslint-disable-next-line no-confusing-arrow
    const selectedItems = items
      // eslint-disable-next-line no-confusing-arrow
      .filter((item, i) => {
        if (item.value === value) internalIndex = i;
        return (value === null && !item.disabled && comparator(item)) || value === item.value
          ? selected
          : item.selected;
      })
      .map(item => ({ ...item, selected: true }));

    const action = {
      selected,
      value,
      itemsIndex: value === null ? 'all' : internalIndex
    };
    // TODO: turn this into an object so people can destructure what they want
    onChange(event, selectedItems, action);
  };

  getAlternativeAriaLabelledby = (props, uuid) =>
    typeof props['aria-label'] === 'undefined' && typeof props.title === 'string' ? uuid : undefined;

  getAlternativeAriaDescribedby = (props, uuid) => (typeof props.subheader === 'string' ? uuid : undefined);

  RenderTitle = ({ id }) => {
    const { classes, title } = this.props;

    return (
      title && (
        <Grid item xs="auto">
          {typeof title === 'string' ? (
            <Typography className={classes.titleTypography} color="textSecondary" gutterBottom={false} id={id}>
              {title}
            </Typography>
          ) : (
            title
          )}
        </Grid>
      )
    );
  };

  RenderSubheader = ({ id }) => {
    const { subheader } = this.props;

    return (
      subheader && (
        <Grid item xs="auto">
          {typeof subheader === 'string' ? (
            <Box mt={-0.5}>
              <Typography gutterBottom={false} id={id} variant="subtitle2">
                {subheader}
              </Typography>
            </Box>
          ) : (
            subheader
          )}
        </Grid>
      )
    );
  };

  RenderFooter = ({ checkedCount, classes, footerText, hideFooter, totalCount }) =>
    totalCount > 0 &&
    !hideFooter && (
      <Grid item xs="auto">
        <ListBoxFooter checkedCount={checkedCount} classes={classes} footerText={footerText} totalCount={totalCount} />
      </Grid>
    );

  render() {
    const { classes, 'data-uic': dataUIC, dividers, items, showSearch, noOptions, searchLimit } = this.props;

    const createUnsafeId = () => {
      const newMS = new Date().getTime();
      const ranNum = Math.random().toString(36);
      return `${newMS}-${ranNum}`;
    };

    const { keyword } = this.state;
    const filteredItems = this.searcher(keyword);
    const { length: quantity } = filteredItems;
    const actualHeight = this.getActualHeight(quantity);
    const titleId = createUnsafeId();
    const subheaderId = createUnsafeId();
    const actionableItems = filteredItems || items;
    const nonDisabledItemsCount = items.filter(({ disabled }) => !disabled).length;
    const checkedItemsCount = items.filter(({ selected }) => selected === true).length;

    const renderNoOptions = items.length === 0;

    return (
      <Grid className={classes.listBox} container data-uic={dataUIC} direction="column">
        {renderNoOptions ? (
          <>
            <this.RenderTitle id={titleId} />
            <this.RenderSubheader id={subheaderId} />
            <Grid item>{noOptions}</Grid>
          </>
        ) : (
          <>
            <this.RenderTitle id={titleId} />
            <this.RenderSubheader id={subheaderId} />
            {showSearch && gte(items.length, searchLimit) && (
              <Grid item xs="auto">
                <ListBoxSearch {...this.props} onChange={term => this.setState({ keyword: term })} />
              </Grid>
            )}
            <ListBoxActionBar
              {...this.props}
              actionableItems={actionableItems}
              filteredItems={filteredItems}
              onSelectAllChange={this.selector(null)}
              rowHeight={ROW_HEIGHT}
            />
            <ListBoxContainer
              {...this.props}
              aria-describedby={
                this.props['aria-describedby'] || this.getAlternativeAriaDescribedby(this.props, subheaderId)
              }
              aria-label={this.props['aria-label']}
              aria-labelledby={this.props['aria-labelledby'] || this.getAlternativeAriaLabelledby(this.props, titleId)}
              filteredItems={filteredItems}
              gridRef={this.containerRef}
              gutter={this.gutter}
              items={filteredItems}
              noResultsRowHeight={ROW_HEIGHT}
              onSelect={this.selector}
              virtualizationProps={{
                height: actualHeight,
                itemCount: filteredItems.length,
                itemSize: dividers ? ROW_WITH_DIVIDER_HEIGHT : ROW_HEIGHT,
                width: '100%'
              }}
            />
            <this.RenderFooter {...this.props} checkedCount={checkedItemsCount} totalCount={nonDisabledItemsCount} />
          </>
        )}
      </Grid>
    );
  }
}

ListBox.propTypes = propTypes;
ListBox.defaultProps = defaultProps;

export default withStyles(theme, { name: 'MuiListBox' })(ListBox);
