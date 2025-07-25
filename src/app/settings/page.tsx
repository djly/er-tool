'use client';

import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebounce } from 'use-debounce'; // Import useDebonce
import useLocalStorage from "@/app/use-local-storage";
import { ModeToggle } from '@/components/ui/mode-toggle';


import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/lib/redux/hooks';

interface Character {
  id: string,
  unitId: number,
  slug: string,
  element: string,
  faction: string,
  name: string,
}

export default function Home() {

  // const [storageValue, setStorageValue] = useState("");
  // const [isLoading, setLoading] = useState(true);
  // const [value, setValue] = useLocalStorage<LocalStorageObject>("account", {});

  // useEffect(() => {
  //   setStorageValue(value);
  //   console.log(value);
  //   setLoading(false)
  // }, [])

  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-sm text-muted-foreground">Manage your account settings and preferences.</p>
          <Button onClick={() => 
            dispatch({
              type: 'player/clearCharacters',
            })
          }>Clear my roster</Button>
        </div>
      </main>
    </div>
  );
}
