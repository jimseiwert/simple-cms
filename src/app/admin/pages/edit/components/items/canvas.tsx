import React from 'react';
import {useDroppable} from '@dnd-kit/core';

interface Props {
  id: string;
  collisionDetection?: any;
  containers?: string[];
  children?: React.ReactNode;
}

export function Canvas(props: Props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
    {props.children}
  </div>
  );

}
