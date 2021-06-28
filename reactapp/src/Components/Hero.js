import React from 'react'

function Hero({heroName}) {       // 这里没有写 props，这里是用 destructuring: we destructuring and take what we need, 可能还有其他 props 但我们只要 heroName
    if (heroName === 'Joker') {
        throw new Error('Not a Joker')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
