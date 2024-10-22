import React from 'react';
import {useDraggable, useDroppable} from '@dnd-kit/core';
import { ButtonTypes, DeleteButton } from '@/components/custom/buttons';

export const componentType = 'row';

export function RowButton() {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: componentType,
    data: {
      type: componentType,
    }
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <button key="rowDrag" className='border-2 border-rose-500 mt-2' ref={setNodeRef} style={style} {...listeners} {...attributes}>
      Add Row
    </button>
  );
}



interface Props {
  id: string;
  collisionDetection?: any;
  containers?: string[];
  children?: React.ReactNode;
  delete: () => void;
}

export function RowView(props: Props) {
  // const {isOver, setNodeRef} = useDroppable({
  //   id: props.id,
  // });
  // const style = {
  //   color: isOver ? 'green' : undefined,
  // };

  return (
    <div className='border-dashed border-2 border-rose-500 p-4'>
      <DeleteButton type={ButtonTypes.Icon_Only}  onClick={props.delete} />
      
      {props.children}
    </div>
  )
}