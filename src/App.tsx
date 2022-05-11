import React from 'react'
import './App.css'

import { BlocksContextProvider } from './common/context/blocks-context'
import { DrawerContextProvider } from './common/context/drawer-context'
import { Flow, BlocksCatalog, BlocksSearch, BlockDrawer } from './components'

function App() {
    return (
        <BlocksContextProvider>
            <DrawerContextProvider>
                <div className="app-wrapper">
                    <div className="app-sidebar">
                        <BlocksSearch />
                        <BlocksCatalog />
                    </div>
                    <div className="app-flow">
                        <Flow />
                    </div>
                </div>
                <BlockDrawer />
            </DrawerContextProvider>
        </BlocksContextProvider>
    )
}

export default App
