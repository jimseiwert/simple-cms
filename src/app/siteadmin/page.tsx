import { auth, clerkClient } from '@clerk/nextjs/server';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Page() {
  return <h1>Hello, Admin page!</h1>
}
