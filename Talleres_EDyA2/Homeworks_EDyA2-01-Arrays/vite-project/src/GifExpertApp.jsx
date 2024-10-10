import { useState } from 'react';
import { AddCategory, GifGrid } from './components'; // Importar los componentes hijos

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Zodiac']) // Estado inicial con una categoría

  // Función para agregar una nueva categoría
  const onAddCategory = (category) => {
    setCategories(list => [...list, category]) // Actualiza la lista de categorías
  }

  return (
    <>
      <h1>GifExpert</h1>

      <AddCategory onAddCategory={onAddCategory} />
        {
        categories.map((category, key) => 
        {
          return <GifGrid category={category} key={key} /> // Pasar cada categoría al componente GifGrid
        }
        )
        }
      </>
  )
}
