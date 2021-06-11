import { KEY_BACK_SPACE, KEY_DOWN, KEY_DELETE, KEY_UP } from 'keycode-js';

export const REMOVAL_KEYS = [KEY_BACK_SPACE, KEY_DELETE];
export const CONTROL_KEYS = [KEY_UP, KEY_DOWN];

export const SPINNER_CHANGE_DELAY = 300;
export const SPINNER_KEYBOARD_INTERVAL = 100;
export const SPINNER_MOUSE_INTERVAL = 150;

export const FORMAT_INTEGER = /^-{0,1}[1-9][0-9]*$/;
export const FORMAT_FLOAT = /(^-{0,1}[1-9][0-9]*[.]{0,1}[0-9]*$)|(^-{0,1}[0-9]([.][0-9]*)?$)/;
export const FORMAT_POSITIVE = /^[^-]*$/;
export const INTERMEDIATE_FORMATS = ['', '-', '0'];
