// components/UserMenu.tsx
'use client';

import { UserButton } from '@clerk/nextjs';

export default function Dashboard() {
  return (
    <div className="flex items-center space-x-4">
      <UserButton
        appearance={{
          elements: {
            userButtonAvatarBox: "w-10 h-10",
            userButtonTrigger: "focus:shadow-md",
          }
        }}
      />
    </div>
  );
}