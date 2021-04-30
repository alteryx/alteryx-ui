import React from 'react';
import PropTypes from 'prop-types';
import MaterialChip from '@material-ui/core/Chip';
import { XSmall } from '@alteryx/icons';

import { dataUICMaker } from '../utils';

const Chip = React.forwardRef(({ deleteIcon, ...props }, ref) => {
  // eslint-disable-next-line ui-core/no-empty-divs
  return <MaterialChip deleteIcon={<div>{deleteIcon}</div>} ref={ref} {...props} />;
});

Chip.defaultProps = {
  deleteIcon: <XSmall />
};

Chip.propTypes = {
  deleteIcon: PropTypes.node
};

export default dataUICMaker(Chip, 'Chip');
