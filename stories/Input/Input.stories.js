import React from 'react';
import { Input } from './Input';
import { action } from '@storybook/addon-actions'

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  id: 'input-component',
  value: '',
  onChangeValue: action('changeValue'),
  type: 'text',
  label: 'Label',
  required: false,
  placeholder: 'write here',
  disable: false,
};
