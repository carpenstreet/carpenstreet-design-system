export const placementMapping = {
  none: 'bottom',
  // ---
  'top-left': 'top-start',
  top: 'top',
  'top-right': 'top-end',
  // ---
  'right-top': 'right-start',
  right: 'right',
  'right-bottom': 'right-end',
  // ---
  'bottom-left': 'bottom-start',
  bottom: 'bottom',
  'bottom-right': 'bottom-end',
  // ---
  'left-top': 'left-start',
  left: 'left',
  'left-bottom': 'left-end',
} as const;
