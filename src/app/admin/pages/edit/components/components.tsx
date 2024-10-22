import {RowButton, RowView } from "./items/Row";

export const DraggableItems = {
    row: RowView,
};

//export const DraggableItems = Items.map(( item )=> {return { type: item.componentType, component: item.DragButton }});

export default function EditorComponents() {
    return (
        <>
            <RowButton/>
        </>
    )
}
