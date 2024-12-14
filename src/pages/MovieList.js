import React from 'react'
import { Card } from '../components'
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';

export const MovieList = ({apiPath,title}) => {

  const { data: movieslist } = useFetch(apiPath);
  useTitle(title);


 

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
          <div className='flex justify-start flex-wrap other:justify-evenly'>
            {movieslist.map((movie)=>(
              <Card id={movie.id} movie={movie}/>
            ))}
          </div>
      </section>
    </main>
  )
}


