import React from 'react';
import { useTransition } from 'react-spring';

import { Toast } from './Toast';

import { ToastMessages } from '../../context/toast';
import { Container } from './styles';
interface ToastContainerProps {
  messages: ToastMessages[];
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, {
    keys: message => message.id,
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <Container>
      {messagesWithTransitions((style, item, t) => (
        <Toast key={t.key} style={style} message={item} />
      ))}
    </Container>
  );
};
