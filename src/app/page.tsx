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

interface Character {
  id: string,
  unitId: number,
  slug: string,
  element: string,
  faction: string,
  name: string,
}


export default function Home() {

  const [searchTerm, setSearchTerm] = useState("");
  const [allCharacters, setAllCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true)

  const [debouncedSearchTerm] = useDebounce(searchTerm, 300); // Debounce for 300ms

  const searchParams = useSearchParams();
  const router = useRouter();
  
  var filterFields = "*";

  useEffect(() => {
    fetch('http://192.168.2.140:4000/characters')
      .then((res) => res.json())
      .then((data) => {
        setAllCharacters(data)
        setFilteredCharacters(data)
        setLoading(false)
      })
  }, [])
  
  useEffect(() => {
    if (debouncedSearchTerm) {
      router.push(`?query=${debouncedSearchTerm}`, { scroll: false });
    } else {
      router.push('', { scroll: false }); //remove query param when empty
    }
  }, [debouncedSearchTerm, router]);

  useEffect(() => {
    const fetchData = async () => {
      if (debouncedSearchTerm) {
        // Fetch data from an API or local data source
        // const results = await getCharacters(debouncedSearchTerm);
        setFilteredCharacters(allCharacters);
      } else {
        setFilteredCharacters(allCharacters); // Clear results when the search term is empty
      }
    };

    fetchData();
  }, [debouncedSearchTerm]);

  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      </main>
    </div>
  );
}
