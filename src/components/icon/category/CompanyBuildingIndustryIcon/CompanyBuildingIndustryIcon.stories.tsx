import { Meta, StoryObj } from '@storybook/react';
import CompanyBuildingIndustryIcon from './CompanyBuildingIndustryIcon';

const meta: Meta = { title: 'Element/Icon/Category/회사건물산업', component: CompanyBuildingIndustryIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CompanyBuildingIndustryIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};
