'use client';
import EditorJS from '@editorjs/editorjs';






export default function AdminPage() {
    const editor = new EditorJS({
        holder: 'editorjs',
    });

    return  <div id='editorjs' className='editor' />
}