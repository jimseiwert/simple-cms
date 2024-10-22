'use client';
import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import {Draggable} from './Draggable';
import {Droppable} from './Droppable';
import AuthLayout from '@/app/layouts/auth';

export default function EditPage() {
    const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable">Drag me</Draggable>
  );

  return (
    <AuthLayout>
    <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50" />
    <div className="mx-auto h-full w-full max-w-3xl rounded-xl bg-muted/50" />
    </AuthLayout>
  );

  function handleDragEnd(event) {
    const {over} = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
}