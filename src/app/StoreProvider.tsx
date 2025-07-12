'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { initializePlayer } from '../lib/features/player/initializePlayer'
import { Player } from './classes/player.class'
export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={storeRef.current.__persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}