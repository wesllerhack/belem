import { useField } from '@unform/core';
import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiEye, FiEyeOff } from 'react-icons/fi';


import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
}

export const InputLogin: React.FC<InputProps> = ({
  name,
  placeholder,
  type,
  icon: Icon,
  ...rest
}) => {

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [visible, setVisible] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handlePasswordVisibility = (event: any) => {
    event.preventDefault();
    setVisible(state => !state)
  }

  let typeInput = type;

  if (type == 'password') {
    typeInput = !visible ? 'password' : 'text'
  }

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);


  return (
    <InputContainer
      isFilled={isFilled}
      isFocused={isFocused}
    >
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={typeInput}
        autoComplete='off'
        ref={inputRef}
        {...rest}
        required
      />
      {type == 'password' ?
        < span onClick={handlePasswordVisibility}>
          {!visible ? <FiEye /> : <FiEyeOff />}
        </span> : <></>
      }
    </InputContainer >
  );
};
