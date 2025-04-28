    import React, { useContext } from 'react'
    import GlobalContext from './GlobalContext'
    function Counter({name}) {
        const { groupedCart, increaseItemCount, decreaseItemCount } = useContext(GlobalContext);
        const item=groupedCart[name];
 
    return (
        <div>
        {/* <p>{name}: {item.count} шт.</p> */}
            {/* <button onClick={() => increaseItemCount(name)}>Увеличить</button>
            <button onClick={() => decreaseItemCount(name)}>Уменьшить</button> */}
    </div>
        
    )
    }

    export default Counter