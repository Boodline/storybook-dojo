import * as renderer from 'react-test-renderer'
import { fireEvent, render } from '@testing-library/react'
import { Input } from '../Input'
import * as React from 'react'


describe('Input component tests', () => {
  it('should render component', () => {
    const inputComponent = <Input
      id='input-component'
      value=''
      onChangeValue={null}
      type='text'
      label='Label'
      required={false}
      placeholder='write here'
      disable={false}
    />

    const component = renderer.create(inputComponent)
    const componentJSON = component.toJSON()
    expect(componentJSON).toMatchSnapshot()
  })

  it('should execute sent function on keyTyped', () => {
    const act = jest.fn()
    const { getByTestId } = render(<Input
      id='input-component'
      value=''
      onChangeValue={act}
      type='text'
      label='Label'
      required={false}
      placeholder='write here'
      disable={false}
    />)

    renderer.act(() => {
      fireEvent.change(getByTestId('input-component'), { target: { value: 'Hello World!' }})
    })
    expect(act).toBeCalledTimes(1)
  })

  it('should change component value', () => {
    const act = jest.fn()
    const { getByTestId } = render(<Input
      id='input-component'
      value=''
      onChangeValue={act}
      type='text'
      label='Label'
      required={false}
      placeholder='write here'
      disable={false}
    />)

    renderer.act(() => {
      fireEvent.change(getByTestId('input-component'), { target: { value: 'Hello World!' }})
    })
    expect(getByTestId('input-component').getAttribute('value')).toBe('Hello World!')
  })

})