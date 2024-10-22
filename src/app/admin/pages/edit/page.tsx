'use client';
import React from 'react';
import AuthLayout from '@/app/layouts/auth';
import { Editor } from './components/editor';
import { Settings2, FileText, Link, Copy, CornerUpRight, Trash2, CornerUpLeft, LineChart, GalleryVerticalEnd, Trash, Bell, ArrowUp, ArrowDown } from 'lucide-react';

const data = [
    {
        items: [
            {
                label: "Customize Page",
                icon: Settings2,
            },
            {
                label: "Turn into wiki",
                icon: FileText,
            },
        ]
    },
    {
        items: [
            {
                label: "Copy Link",
                icon: Link,
            },
            {
                label: "Duplicate",
                icon: Copy,
            },
            {
                label: "Move to",
                icon: CornerUpRight,
            },
            {
                label: "Move to Trash",
                icon: Trash2,
            },
        ]
    },
    {
        items: [{
            label: "Undo",
            icon: CornerUpLeft,
        },
        {
            label: "View analytics",
            icon: LineChart,
        },
        {
            label: "Version History",
            icon: GalleryVerticalEnd,
        },
        {
            label: "Show delete pages",
            icon: Trash,
        },
        {
            label: "Notifications",
            icon: Bell,
        },
        ]
    },
    {
        items: [
            {
                label: "Import",
                icon: ArrowUp,
            },
            {
                label: "Export",
                icon: ArrowDown,
            },
        ]
    },
]
export default function EditPage() {
    const breadcrumbs = ["Admin", "Pages", "Edit"];
    return (
        <AuthLayout navActions={data} subLabel="Hello Jim" breadcrumbs={breadcrumbs}>
            <div className="flex flex-row w-full justify-between gap-2">
            <Editor />
            </div>
        </AuthLayout>
    );
}