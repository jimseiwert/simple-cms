'use client';
import React, { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';

import { Draggable } from './Draggable';
import { Droppable } from './Droppable';
import AuthLayout from '@/app/layouts/auth';

export default function EditPage() {
    const [isDropped, setIsDropped] = useState(false);
    const draggableMarkup = (
        <Draggable id="test">Drag me</Draggable>
    );
    return (
        <AuthLayout>
            <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50" />
            <div className="mx-auto h-full w-full max-w-3xl rounded-xl bg-muted/50">
                <DndContext onDragEnd={handleDragEnd}>
                    {!isDropped ? draggableMarkup : null}
                    <Droppable id="droptest">
                        {isDropped ? draggableMarkup : 'Drop here'}
                    </Droppable>
                </DndContext>
            </div>
        </AuthLayout>
    );

    function handleDragEnd(event: DragEndEvent) {
        if (event.over && event.over.id === 'droppable') {
          setIsDropped(true);
        }
      }
}