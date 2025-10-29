import React from 'react'

// https://cdn.pixabay.com/photo/2025/04/30/13/05/cat-9569386_1280.jpg

const cat = {
  catUrl: 'https://cdn.pixabay.com/photo/',
  description: '2025/04/30/13/05/',
  imageId: 'cat-9569386_1280.jpg',
  name: '응애고양이',
  imageTheme: {
    width: '200px',
    height: '150px'
  },
  theme: {
    backgroundColor: 'black',
    color: 'whihe'
  }
}

function E_JSX() {
  return (
    <>
      <div style={cat.theme}>
        <p>{cat.name}'s Picture</p>
        <img 
          src={cat.catUrl + cat.description + cat.imageId}
          alt={cat.name} 
          width={cat.imageTheme.width}
          height={cat.imageTheme.height}
        />
      </div>
    </>
  )
}

export default E_JSX