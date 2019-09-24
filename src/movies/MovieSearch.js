import React from 'react'

import { SearchContainer , SearchInput } from './movieStyled'

const MovieSearch = ({ handleSearchChange, value }) => {
    return (
        <SearchContainer>
            <SearchInput
                type="text"
                id="search"
                placeholder="Busque um filme pelo titulo 🍿"
                onChange={handleSearchChange}
            />
        </SearchContainer>
    )
}

export default MovieSearch
