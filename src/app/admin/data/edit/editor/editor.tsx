'use client';
import React, { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';

import { Draggable } from './components/Draggable';
import { Droppable } from './components/Droppable';

export function Editor() {
    const [isDropped, setIsDropped] = useState(false);
    const draggableMarkup = (
        <Draggable id="test">Drag me</Draggable>
    );
    return (
                       <DndContext onDragEnd={handleDragEnd}>
                    {!isDropped ? draggableMarkup : null}
                    <Droppable id="droptest">
                        {isDropped ? draggableMarkup : 'Drop here'}
                    </Droppable>
                </DndContext>
    );

    function handleDragEnd(event: DragEndEvent) {
        if (event.over && event.over.id === 'droppable') {
          setIsDropped(true);
        }
      }
}