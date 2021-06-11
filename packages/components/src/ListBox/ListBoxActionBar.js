import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Divider, FormControlLabel, Grid, ListItem, makeStyles } from '../';

const useStyles = makeStyles(({ palette, spacing }) => ({
  checkbox: {
    margin: spacing(0, 2, 0, 2.5),
    padding: 0
  },
  formControlLabel: {
    opacity: ({ disabled }) => (disabled ? 0.5 : 1),
    marginBottom: 0
  },
  listItem: {
    height: ({ rowHeight }) => rowHeight,
    padding: 0
  },
  selectAllLabel: {
    color: palette.text.main
  }
}));

const ListBoxActionBar = ({
  actions,
  actionableItems,
  checkAllText,
  items,
  onSelectAllChange,
  rowHeight,
  showCheckAll
}) => {
  const noActionableItems = !actionableItems.length;
  const relevantItems = noActionableItems ? items : actionableItems;
  const nonDisabledItems = relevantItems.filter(({ disabled }) => !disabled);
  const noItems = noActionableItems || nonDisabledItems.length === 0;

  const checked = useMemo(() => {
    const allSelected = nonDisabledItems.every(({ selected }) => selected);

    return nonDisabledItems.length > 0 && allSelected;
  }, [nonDisabledItems]);

  const indeterminate = useMemo(() => !checked && relevantItems.some(({ selected }) => selected), [
    relevantItems,
    checked
  ]);

  const toggleSelectAll = useMemo(
    () => !!actionableItems.filter(({ disabled, selected }) => !disabled && !selected).length,
    [actionableItems]
  );

  const localClasses = useStyles({ disabled: noItems, rowHeight });

  return (
    <>
      {(showCheckAll || actions) && (
        <Grid item xs="auto">
          <ListItem className={localClasses.listItem} dense disableGutters>
            <Grid alignItems="center" container>
              {showCheckAll && (
                <Grid item xs="auto">
                  <FormControlLabel
                    className={localClasses.formControlLabel}
                    control={
                      <Checkbox
                        checked={checked || indeterminate}
                        className={localClasses.checkbox}
                        indeterminate={indeterminate}
                        onChange={event => onSelectAllChange(event, toggleSelectAll)}
                      />
                    }
                    disabled={noItems}
                    label={checkAllText}
                  />
                </Grid>
              )}
              <Grid container item justify="flex-end" xs>
                {actions}
              </Grid>
            </Grid>
          </ListItem>
        </Grid>
      )}
      {actionableItems && (
        <Grid item>
          <Divider light />
        </Grid>
      )}
    </>
  );
};

ListBoxActionBar.propTypes = {
  actionableItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  actions: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  checkAllText: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onSelectAllChange: PropTypes.func.isRequired,
  rowHeight: PropTypes.number.isRequired,
  showCheckAll: PropTypes.bool.isRequired
};
ListBoxActionBar.defaultProps = {
  actions: undefined
};

export default ListBoxActionBar;
