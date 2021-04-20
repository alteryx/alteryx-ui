import accordion from './accordion';
import alert from './alert';
import appBar from './app-bar';
import autocomplete from './autocomplete';
import avatar from './avatar';
import backdrop from './backdrop';
import badge from './badge';
import breadcrumbs from './breadcrumbs';
import button from './button';
import card from './card';
import chip from './chip';
import checkbox from './checkbox';
import dialog from './dialog';
import divider from './divider';
import drawer from './drawer';
import form from './form';
import iconButton from './icon-button';
import input from './input';
import linearProgress from './linear-progress';
import link from './link';
import list from './list';
import listBox from './list-box';
import menu from './menu';
import modal from './modal';
import numericInput from './numeric-input';
import paper from './paper';
import popover from './popover';
import radio from './radio';
import skeleton from './skeleton';
import slider from './slider';
import snackbar from './snackbar';
import speedDialIcon from './speed-dial-icon';
import stepper from './stepper';
import svgIcon from './svg-icon';
import switchSelect from './switch';
import table from './table';
import tabs from './tabs';
import togglebutton from './togglebutton';
import tooltip from './tooltip';
import toolbar from './toolbar';
import treeview from './treeview';

export default theme => ({
  ...accordion(theme),
  ...alert(theme),
  ...appBar(theme),
  ...autocomplete(theme),
  ...avatar(theme),
  ...backdrop(theme),
  ...badge(theme),
  ...breadcrumbs(theme),
  ...button(theme),
  ...card(theme),
  ...checkbox(theme),
  ...chip(theme),
  ...dialog(theme),
  ...divider(theme),
  ...drawer(theme),
  ...form(theme),
  ...iconButton(theme),
  ...input(theme),
  ...linearProgress(theme),
  ...link(theme),
  ...list(theme),
  ...listBox(theme),
  ...menu(theme),
  ...modal(theme),
  ...numericInput(theme),
  ...paper(theme),
  ...popover(theme),
  ...radio(theme),
  ...skeleton(theme),
  ...slider(theme),
  ...snackbar(theme),
  ...speedDialIcon(theme),
  ...stepper(theme),
  ...svgIcon(theme),
  ...switchSelect(theme),
  ...table(theme),
  ...tabs(theme),
  ...togglebutton(theme),
  ...toolbar(theme),
  ...tooltip(theme),
  ...treeview(theme)
});
