import { TabProps } from './Tab.types';
import { Tabs as MUITabs } from '@mui/material';
import Tab from './Tab';

export default function ExampleTabs(props: TabProps) {
  const { label, disabled, sx, ...rest } = props;
  return (
    <MUITabs>
      <Tab {...props} />
      <Tab label={'Tab Two'} {...rest} />
      <Tab label={'Tab Three'} {...rest} />
    </MUITabs>
  );
}
