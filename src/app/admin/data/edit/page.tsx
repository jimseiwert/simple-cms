'use client';
import React from 'react';
import AuthLayout from '@/app/layouts/auth';
import { Editor } from './editor/editor';

export default function EditPage() {
    return (
        <AuthLayout>
            <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50" />
            <div className="mx-auto h-full w-full max-w-3xl rounded-xl bg-muted/50">
               <Editor/>
            </div>
        </AuthLayout>
    );
}