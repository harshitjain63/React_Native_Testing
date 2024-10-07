import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import MyButton from '../components/CustomButton';

describe('MyButton', () => {
  it('renders correctly with the given title', () => {
    const {getByText} = render(
      <MyButton title="Click Me" onPress={() => {}} />,
    );
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls onPress when the button is pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <MyButton title="Press Me" onPress={onPressMock} />,
    );

    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
