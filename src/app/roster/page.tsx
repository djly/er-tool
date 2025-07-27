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

import { Rating, RatingButton } from '@/components/ui/shadcn-io/rating';
import { newCharacterInvestment } from '@/lib/redux/slices/playerSlice';


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


  const [editMode, setEditMode] = useState(false);
  const [isLoading, setLoading] = useState(true)

  const [debouncedSearchTerm] = useDebounce(searchTerm, 300); // Debounce for 300ms

  const searchParams = useSearchParams();
  const router = useRouter();

  const dispatch = useAppDispatch();
  const player = useAppSelector((state) => state.player);
  const data = useAppSelector((state) => state.data);
  

    // if (!data || !data.characters) {
    //   console.error("Data or characters not found");
    // }
    // console.log("Data loaded", data);
    // if (data.characters.length > 0) {

    //   setAllCharacters(data.characters);
    //   setFilteredCharacters(data.characters);
    //   setLoading(false);

    // } 

  useEffect(() => {
    

      fetch('./data/db.json')
        .then((res) => res.json())
        .then((data) => {
          const characters = data.characters
          setAllCharacters(characters)
          setFilteredCharacters(characters)
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

  // const dispatch = useAppDispatch();
  // const player = useAppSelector((state) => state.player);
  // const data = useAppSelector((state) => state.data);
  
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
              characters = characters.filter((character:Character) => player.characters[character.unitId]);
            } else if (ownedFilter === 'unowned') {
              characters = characters.filter((character:Character) => !player.characters[character.unitId]);
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
                <div className='w-20'><img src={`./elements/ele_constant.webp`}
                  alt="Constant"
                  width={20}
                  height={20}
                /></div>
              </ToggleGroupItem>
              <ToggleGroupItem value="disorder">
                <img src={`./elements/ele_disorder.webp`}
                  width={20}
                  height={20}
                  alt="Constant"
                /> </ToggleGroupItem>
              <ToggleGroupItem value="hollow">
                <img src={`./elements/ele_hollow.webp`}
                  width={20}
                  height={20}
                  alt="Constant"
                /> </ToggleGroupItem>
              <ToggleGroupItem value="odd">
                <img src={`./elements/ele_odd.webp`}
                  width={20}
                  height={20}
                  alt="Constant"
                /> </ToggleGroupItem>
              <ToggleGroupItem value="reason">
                <img src={`./elements/ele_reason.webp`}
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
        <div className='flex flex-col align-start ml-auto text-right'>
          <label className='text-right'>Edit Mode</label>
          <Switch
            checked={editMode}
            onCheckedChange={(checked) => setEditMode(checked)}
          />
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
            // Check if the player owns the character
            const owned = player.characters.hasOwnProperty(character.unitId);

            // Determine if the character should be transparent based on owned status and filter
            //1. If we are looking at unowned characters (filter set to unowned) is should be opaque
            //2. If we are looking at owned characters it should be opaque
            //3. If we have not specified a filter, it should based on the owned status
            const shouldBeTransparent = (ownedFilter === 'unowned' ) || (ownedFilter !== 'unowned' && !owned);

            return <Card key={character.unitId} className={"flex flex-col" + (shouldBeTransparent ? " opacity-30": "")} >
              <CardHeader className='text-center'>
                <CardTitle className='text-center'><a className='flex' target="_blank" href={"https://www.prydwen.gg/etheria-restart/characters/" + character.slug}>{character.name}
                  <Image src={'./favicon-32x32.png'}
                    width={15}
                    height={15}
                    alt={'prydwen'} />
                </a></CardTitle>
                { editMode ? (<Switch
                 className='scale-150 '
                  checked={owned}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      // Add character to player's roster
                      const charI = newCharacterInvestment();
                      charI.starLevel = character.rarity.toUpperCase() === 'SSR' ? 4 : character.rarity.toUpperCase() === 'SR' ? 3 : 2;
                      dispatch({
                        type: 'player/addCharacter',
                        payload: {characterId: character.unitId,
                          ci: charI
                        }
                      });
                    } else {
                      // Remove character from player's roster
                      dispatch({
                        type: 'player/removeCharacter',
                        payload: character.unitId,
                    });
                  }}}
                  ></Switch>)
                :""}
                </CardHeader>
               <CardContent className='flex flex-col items-center gap-2 text-center'>
                  <CardDescription></CardDescription>
                  <div className={"relative items-center " + gradiantClass[character.rarity]} style={{ height: '136px', width: '100px' }}>
               
                  {!editMode ? ( <div className="absolute bottom-0 left-0">
                    <Rating defaultValue={character.rarity.toUpperCase() === 'SSR' ? 4 : character.rarity.toUpperCase() === 'SR' ? 3 : 2} value={player.characters[character.unitId]?.starLevel} readOnly>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <RatingButton key={index} size={11}/>
                  ))}
                </Rating>
                </div>) : ""}
                 
                <div className="absolute top-0 right-0">
                <Image
                  src={`./elements/ele_${character.element.toLowerCase()}.webp`}
                  width="30"
                  height="30"
                  alt={character.element}
                  />
                  </div>
                  <div className="top-0 left-0 w-full text-center">
                <Image
                  src={`./characters/${character.slug}_card.webp`}
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
                 
                {editMode ? (<Rating defaultValue={character.rarity.toUpperCase() === 'SSR' ? 4 : character.rarity.toUpperCase() === 'SR' ? 3 : 2} value={player.characters[character.unitId]?.starLevel} onValueChange={(value) => {dispatch({
                  type: 'player/setCharacterStarLevel',
                  payload: {
                    characterId: character.unitId,
                    starLevel: value,
                  },
                })}}>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <RatingButton key={index}  />
                  ))}
                </Rating>): ""}
                  {/* When in edit mode, if the player owns the unit, show 3 input forms to collect the skill levels of skills 1,2 and 3.
                  Display the inputs in a row, side by side.
                  When not in edit mode just show the 3 skill levels as text */}

                  {player.characters.hasOwnProperty(character.unitId) && (
                    <div className="">
                      <label>Skills</label>
                      {editMode ? (
                        <div className="flex flex-row gap-2">
                          {[1, 2, 3].map((skillNum) => (
                            <Input
                              key={skillNum}
                              name={`skill${skillNum}`}
                              type="number"
                              placeholder={`Skill ${skillNum}`}
                              min={0}
                              max={5}
                              className="w-16"
                              value={
                                player.characters[character.unitId]?.skillLevels[skillNum - 1] ?? '1'
                              }
                              onChange={(e) => {
                                const value = Number(e.target.value);
                                dispatch({
                                  type: 'player/setCharacterSkillLevel',
                                  payload: {
                                    characterId: character.unitId,
                                    skillIndex: skillNum - 1,
                                    level: value,
                                  },
                                });
                              }}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-row gap-2">
                          {/* The color of the span depends on the level (default, green, blue, yellow, red) */}
                          {[1, 2, 3].map((skillNum) => { 
                            
                            
                            const skillLevel = player.characters[character.unitId]?.skillLevels[skillNum - 1] ?? 1;
                            const bgColor = skillLevel >= 5 ? " bg-red-500 text-white" : 
                            skillLevel >= 4 ? " bg-yellow-500 text-white" : 
                            skillLevel >= 3 ? " bg-blue-500 text-white" : 
                            skillLevel >= 2 ? " bg-green-500 text-white" : 
                            " text-white";
                            const skillLevelText = skillLevel >= 5 ? "MAX" : skillLevel;

                            return(
                           
                            <span
                              key={skillNum}
                              className={"px-2 py-1 rounded text-xs" + bgColor}
                              title={`Skill ${skillNum} Level: ${skillLevelText}`}
                            >
                              {skillLevelText ?? 1}
                            </span>
                          )})}
                        </div>
                      )}
                    </div>
                  )}
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

