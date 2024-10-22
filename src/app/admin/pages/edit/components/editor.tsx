'use client';
import React, { SyntheticEvent, useState } from 'react';
import EditorComponents from './components';
import {closestCorners, DndContext } from '@dnd-kit/core';
import { Canvas } from './items/canvas';
import CardItem from './items/Card';
import { DraggableItems } from './components';


export function Editor() {
    const [items, setItems] = useState([]);

    function remove(index: number) {
            const newItems = [...items];
            newItems.splice(index, 1);
            setItems(newItems);
        
    }

     return (
        <>
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <div className="flex flex-row w-full justify-between gap-2">
                <div className="flex-shrink flex-grow h-14 bg-muted/50 h-full w-full">
                    <Canvas
                        id="canvas"
                    />
                    { items.map((item : string, index) => {
                        const Component = DraggableItems[item];
                        return <Component key={'COMP' + index} delete={() => remove(index)}/>;
})}
                </div>
                
            </div>
            <div className="flex h-full w-56 flex-shrink-0 flex-col border">
                <CardItem />
                <EditorComponents />
            </div>
            </DndContext>
        </>
    );

    
    
    // return (
    //     <DndContext onDragEnd={handleDragEnd}>
    //         <div className="flex flex-row w-full justify-between gap-2">
    //             <div className="flex-shrink flex-grow h-14 bg-muted/50 h-full w-full">
    //                <Canvas id="canvas" className="flex-shrink flex-grow h-14 bg-muted/50 h-full w-full"></Canvas>
    //                <pre>{JSON.stringify(droppedItems, null, 2)}</pre>
    //             </div>
    //             <div className="flex h-full w-56 flex-shrink-0 flex-col border">
    //                 <CardItem />
    //                 <EditorComponents />
    //             </div>
    //         </div>
    //         {droppedItems}

    //     </DndContext>
    // );


    function handleDragEnd(event: DragEndEvent) {
        // if (event.over && event.over.id === 'droppable') {
        console.log(event)
        const itemsArray = [...items, event.active.data.current.type];
        setItems(itemsArray);
        // }
    }
}