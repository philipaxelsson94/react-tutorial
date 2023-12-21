import React from 'react'
import ItemList from './ItemList';

export default function Content({items, handleCheck, handleDelete}) {
    
    
    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>List is empty</p>
            )}
        </main>
    )
}
