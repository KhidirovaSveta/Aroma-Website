import React from 'react'

const Wishlest = ({wishlist, setWishlist}) => {
  const handleWishDelete = (_id) =>{
    let deleted = wishlist.filter((w) => w._id !== _id)
    setWishlist(deleted)
  }

  const handleRemoveAll = () => {
    setWishlist([])
  }
  return (
    <div>
      {wishlist.map((wish) => {
        return(
          <>
          <img src={wish.img} alt="" width={"350px"} height={"250"} />
          <button onClick={() => handleWishDelete(wish._id)}> Remove </button>
          </>
        )
      })}
      <button onClick={() => handleRemoveAll()}> Remove All</button>
    </div>
  )
}

export default Wishlest