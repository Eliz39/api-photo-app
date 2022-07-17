const Photos = ({photos, text}) => {
  return (
    <div className="photo-container" >
      {photos?.map(item => (
        <img key={item?.id} src={item?.urls?.raw} alt='' className="photo-item" />
      ))}
      <p className="text" >{text}</p>
    </div>
  )
}

export default Photos;