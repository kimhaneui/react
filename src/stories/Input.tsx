import React from 'react';
import './input.css';

export interface InputProps {
  /**
   * How large should the input be?
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const Input: React.FC<InputProps> = ({
  size = 'medium',
  ...props
}) => {
  return (
        <input type='text' className="login-input"
               {...props}
        >
        </input>
  );
};
