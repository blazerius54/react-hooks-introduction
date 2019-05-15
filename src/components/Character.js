import React, { useState, useEffect, memo } from 'react';
import { useHttp } from '../hooks/http';
import Summary from './Summary';

const Character = (props) => {
  const [ isLoading, fetchedCharacter ] =
      useHttp(`https://swapi.co/api/people/${props.selectedChar}`, [props.selectedChar]);

  const loadedCharacter = fetchedCharacter ? {
    id: props.selectedChar,
    name: fetchedCharacter.name,
    height: fetchedCharacter.height,
    colors: {
      hair: fetchedCharacter.hair_color,
      skin: fetchedCharacter.skin_color
    },
    gender: fetchedCharacter.gender,
    movieCount: fetchedCharacter.films.length
  } : {};

  useEffect(() => () => {
      console.log('component did unmount')
  }, []);

  let content = <p>Loading Character...</p>;

  if (!isLoading && fetchedCharacter) {
    content = (
      <Summary
        name={loadedCharacter.name}
        gender={loadedCharacter.gender}
        height={loadedCharacter.height}
        hairColor={loadedCharacter.colors.hair}
        skinColor={loadedCharacter.colors.skin}
        movieCount={loadedCharacter.movieCount}
      />
    );
  } else if (!isLoading && !fetchedCharacter) {
    content = <p>Failed to fetch character.</p>;
  }
  return content;
}

export default memo(Character);
