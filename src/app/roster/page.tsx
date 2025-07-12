'use client';

import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebounce } from 'use-debounce'; // Import useDebonce

import { useAppSelector } from '@/lib/redux/hooks';


import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { useAppDispatch } from '@/lib/redux/hooks';

interface Character {
  rarity: string;
  id: number,
  unitId: number,
  slug: string,
  element: string,
  faction: string,
  name: string,
}

export default function Home() {

  const [searchTerm, setSearchTerm] = useState("");
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);

  //Filters
  const [elementFilter, setElementFilter] = useState<string[]>([]);
  const [rarityFilter, setRarityFilter] = useState<string[]>([]);
  const [ownedFilter, setOwnedFilter] = useState<string>("");


  const [isLoading, setLoading] = useState(true)

  const [debouncedSearchTerm] = useDebounce(searchTerm, 300); // Debounce for 300ms

  const searchParams = useSearchParams();
  const router = useRouter();


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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (debouncedSearchTerm) {
  //       // Fetch data from an API or local data source
  //       // const results = await getCharacters(debouncedSearchTerm);
  //       setFilteredCharacters(allCharacters);
  //     } else {
  //       setFilteredCharacters(allCharacters); // Clear results when the search term is empty
  //     }
  //   };

  //   fetchData();
  // }, [debouncedSearchTerm]);
    const gradiantClass: {
    [key: string]: string;
  } = {
    SSR: 'bg-linear-to-t to-[#00000] from-amber-400',
    SR: 'bg-linear-to-t to-[#00000] to-purple-400',
    R: 'bg-linear-to-t to-[#00000] to-blue-400',
    '*': 'bg-linear-to-t to-[#00000] to-gray-400', // Default case
  }

  const dispatch = useAppDispatch();
  const player = useAppSelector((state) => state.player);
  
  useEffect(() => {
      function generateFilteredCharacters() {
          let characters = allCharacters;

          //Filter characters based on selected rarity, element, and owned status

          //1 Element
          if (elementFilter.length > 0) {
            characters = characters.filter((character:Character) => elementFilter.includes(character.element.toLowerCase()));
          }

          //2 rarity
          if (rarityFilter.length > 0) {
            characters = characters.filter((character:Character) => rarityFilter.includes(character.rarity.toLowerCase()));
          }

          //3 owned status
          if (ownedFilter && ownedFilter.length > 0) {
            if (ownedFilter === 'owned') {
              characters = characters.filter((character:Character) => player.characters.includes(character.unitId));
            } else if (ownedFilter === 'unowned') {
              characters = characters.filter((character:Character) => !player.characters.includes(character.unitId));

            }
          }
          //4 search term'
          if (debouncedSearchTerm) {
            characters = characters.filter((character:Character) => {
              return character.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) 
              // ||
              //   character.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
              //   character.element.toLowerCase().includes(searchTerm.toLowerCase()) ||
              //   character.faction.toLowerCase().includes(searchTerm.toLowerCase());
            });
          }      

          setFilteredCharacters(characters)
        };

    generateFilteredCharacters();
  }, [allCharacters, elementFilter, rarityFilter, ownedFilter, debouncedSearchTerm, player.characters]);


  return (
    <div className="grid grid-rows-1 items-center justify-items-center min-h-screen p-8 pt-4 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] items-center">
        {/* <h1>My box</h1>
        <Card>
          <CardHeader>Box Stats</CardHeader>
          <CardContent>XX / XX Owned</CardContent>
          
        </Card> */}
        <div className="grid grid-cols-2 gap-8 justify-between">
        <div className='flex flex-col'>
          Filter:
          <div className='flex gap-[12px] flex-grow'>
            <Input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..." />
            <ToggleGroup
              variant="outline"
              type="multiple"
              
              defaultValue={elementFilter}
              value={elementFilter}
              onValueChange={(value) => setElementFilter(value as string[])}
            >
              <ToggleGroupItem value="constant">
                <div className='w-20'><img src={`/elements/ele_constant.webp`}
                  alt="Constant"
                  width={20}
                  height={20}
                /></div>
              </ToggleGroupItem>
              <ToggleGroupItem value="disorder">
                <img src={`/elements/ele_disorder.webp`}
                  width={20}
                  height={20}
                  alt="Constant"
                /> </ToggleGroupItem>
              <ToggleGroupItem value="hollow">
                <img src={`/elements/ele_hollow.webp`}
                  width={20}
                  height={20}
                  alt="Constant"
                /> </ToggleGroupItem>
              <ToggleGroupItem value="odd">
                <img src={`/elements/ele_odd.webp`}
                  width={20}
                  height={20}
                  alt="Constant"
                /> </ToggleGroupItem>
              <ToggleGroupItem value="reason">
                <img src={`/elements/ele_reason.webp`}
                  width={20}
                  height={20}
                  alt="Constant"
                /> </ToggleGroupItem>

            </ToggleGroup>

            <ToggleGroup
              variant="outline"
              type="multiple"
              defaultValue={rarityFilter}
              value={rarityFilter}
              onValueChange={(value) => setRarityFilter(value as string[])}
            >
              <ToggleGroupItem value="ssr">
                SSR
              </ToggleGroupItem>
              <ToggleGroupItem value="sr">
                SR
              </ToggleGroupItem>
              <ToggleGroupItem value="r">
                R
              </ToggleGroupItem>
            </ToggleGroup>

            <ToggleGroup
              variant="outline"
              type="single"
              defaultValue={ownedFilter}
              value={ownedFilter}
              onValueChange={(value) => setOwnedFilter(value)}
            >
              <ToggleGroupItem value="owned">
                Owned
              </ToggleGroupItem>
              <ToggleGroupItem value="unowned">
                Unowned
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        {/* <div className='flex flex-col align-start ml-auto text-right'>
        Select:
          <div className=''>

            <div>
              <ToggleGroup
                variant="outline"
                type="single"
                defaultValue={debouncedSearchTerm}
                value={debouncedSearchTerm}
                onValueChange={(value) => {
                  if (value === 'all') {
                    // Add all characters to player's roster
                    const allUnitIds = filteredCharacters.map((character: Character) => character.unitId);
                    dispatch({
                      type: 'player/clearCharacters',
                    });
                  } else if (value === 'none') {
                    // Remove all characters from player's roster
                    dispatch({
                      type: 'player/clearCharacters',
                    });
                  } else {
                    // Handle other cases if needed
                    setFilteredCharacters(allCharacters.filter(character => character.slug.includes(value)));

                  }}
    }
              >
                <ToggleGroupItem value="all">
                  All
                </ToggleGroupItem>
                <ToggleGroupItem value="none">
                  None
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

          </div>
        </div> */}
        </div>
        <div className="grid grid-cols-6 grid-cols-1sm gap-4 justify-between w-full">
          {filteredCharacters.map((character: Character) => {
            return <Card key={character.unitId} className="flex flex-col justify-between" >
              <CardHeader className='text-center'>
                <CardTitle className='text-center'><a className='flex' target="_blank" href={"https://www.prydwen.gg/etheria-restart/characters/" + character.slug}>{character.name}
                  <Image src={'/favicon-32x32.png'}
                    width={15}
                    height={15}
                    alt={'prydwen'} />
                </a></CardTitle>
                </CardHeader>
               <CardContent className='flex flex-col items-center gap-2 text-center'>
                  <CardDescription></CardDescription>
                  <div className={"relative items-center " + gradiantClass[character.rarity]} style={{ height: '136px', width: '100px' }}>
                <div className="absolute top-0 right-0">
                <Image
                  src={`/elements/ele_${character.element.toLowerCase()}.webp`}
                  width="30"
                  height="30"
                  alt={character.element}
                  />
                  </div>
                  <div className="top-0 left-0 w-full text-center">
                <Image
                  src={`/characters/${character.slug}_card.webp`}
                  width="100"
                  height="136"
                  alt={character.name}
                />
                </div>

                </div>
                {/* <div className="flex flex-col items-center mt-2">
                  <Badge variant='secondary' className="text-xs">{character.rarity.toUpperCase()}</Badge>
                  <Badge variant='secondary' className="text-xs">{character.element.toUpperCase()}</Badge>
                  <Badge variant='secondary' className="text-xs">{character.faction.toUpperCase()}</Badge>
                </div> */}
                 <Switch
                  checked={player.characters.some( (unitId:number ) => unitId == character.unitId)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      // Add character to player's roster
                      dispatch({
                        type: 'player/addCharacter',
                        payload: character.unitId
                      });
                    } else {
                      // Remove character from player's roster
                      dispatch({
                        type: 'player/removeCharacter',
                        payload: character.unitId,
                    });
                  }}}
                  ></Switch>
              </CardContent> 
              {/* <CardFooter> <a target="_blank" href={"https://www.prydwen.gg/etheria-restart/characters/" + character.slug} >
                <Badge variant='secondary' asChild>
                  <Image src={'/favicon-32x32.png'}
                    width={10}
                    height={10}
                    alt={'prydwen'} />
                </Badge></a></CardFooter> */}

            </Card>
          })}
        </div>
      </main>
    </div>
  );
}

