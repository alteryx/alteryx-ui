import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { dataUICMaker } from '../utils';

export default dataUICMaker(Autocomplete, 'Autocomplete');
export { createFilterOptions };
