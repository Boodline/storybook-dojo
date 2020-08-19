import * as React from 'react'
import PropTypes from 'prop-types';

export const Input = (
  { primary, backgroundColor, size, ...props }
) => {

  const { 
    id,
    value,
    onChangeValue,
    type,
    label,
    required,
    placeholder,
    disable
   } = props

  const [localValue, changeLocalValue] = React.useState(value)

  const onChangeAction = (event) => {
    const newValue = event.currentTarget.value
    changeLocalValue(newValue)
    onChangeValue(id, newValue)
  }

  React.useEffect(() => {
    if (value !== localValue) {
      changeLocalValue(value)
    }
  }, [value])

  return (
    <div >
      <label>{`${label}${required ? '*' : ''}`}</label>
      <div>
        <input
          disabled={disable}
          id={id}
          value={localValue}
          onChange={onChangeAction}
          type={type}
          placeholder={placeholder}
          style={backgroundColor && { backgroundColor }}
        />
      </div>
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChangeValue: PropTypes.func,
  type: PropTypes.oneOf(['text', 'email', 'number', 'password']),
  label: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
}

Input.defaultProps = {
  id: 'input-component',
  value: '',
  onChangeValue: () => null,
  type: 'text',
  label: 'Label',
  required: false,
  placeholder: 'write here',
  disable: false,
};
