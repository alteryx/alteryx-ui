import React from 'react';
import { AlertTriangle, AlertCircle, Check, ChevronDown, Info, XSmall, X, Plus } from '@ayx/icons';

import Checkbox from '../../internal/icons/Checkbox';
import CheckboxChecked from '../../internal/icons/CheckboxChecked';
import CheckboxIndeterminate from '../../internal/icons/CheckboxIndeterminate';
import Radio from '../../internal/icons/Radio';
import RadioChecked from '../../internal/icons/RadioChecked';
import Paper from '../../Paper';
import ChevronDownSvg from '../../internal/icons/ChevronDown';

const props = {
  MuiAccordion: {
    elevation: 0
  },
  MuiAccordionSummary: {
    expandIcon: <ChevronDown />,
    IconButtonProps: {
      edge: false
    }
  },
  MuiAlert: {
    iconMapping: {
      error: <AlertCircle size="small" />,
      info: <Info size="small" />,
      warning: <AlertTriangle size="small" />,
      success: <Check size="small" />
    }
  },
  MuiAppBar: {
    elevation: 2
  },
  MuiAutocomplete: {
    popupIcon: <ChevronDown size="small" />,
    closeIcon: <XSmall size="small" />,
    ChipProps: {
      deleteIcon: <XSmall />,
      size: 'small'
    },
    PaperComponent: React.forwardRef((paperProps, ref) => <Paper elevation={3} ref={ref} {...paperProps} />)
  },
  MuiButtonBase: {
    disableRipple: true
  },
  MuiButtonGroup: {
    disableRipple: true
  },
  MuiCardHeader: {
    titleTypographyProps: {
      variant: 'h2'
    }
  },
  MuiCheckbox: {
    icon: <Checkbox />,
    checkedIcon: <CheckboxChecked />,
    indeterminateIcon: <CheckboxIndeterminate />
  },
  MuiCircularProgress: {
    size: 16
  },
  MuiDialog: {
    disableBackdropClick: true
  },
  MuiExpansionPanel: {
    elevation: 0
  },
  MuiExpansionPanelSummary: {
    expandIcon: <ChevronDown />,
    IconButtonProps: {
      edge: false
    }
  },
  MuiFilledInput: {
    disableUnderline: true
  },
  MuiInput: {
    disableUnderline: true
  },
  MuiInputLabel: {
    shrink: true
  },
  MuiListItemText: {
    secondaryTypographyProps: {
      variant: 'subtitle2'
    }
  },
  MuiRadio: {
    color: 'primary',
    checkedIcon: <RadioChecked />,
    icon: <Radio />
  },
  MuiSelect: {
    IconComponent: ChevronDownSvg,
    autoWidth: true,
    MenuProps: {
      getContentAnchorEl: null,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      transformOrigin: {
        vertical: -4,
        horizontal: 'center'
      }
    }
  },
  MuiSpeedDialIcon: {
    icon: <Plus />,
    openIcon: <X />
  },
  MuiStepper: {
    elevation: 2
  },
  MuiTablePagination: {
    rowsPerPageOptions: [50, 100, 250]
  }
};

export default props;
