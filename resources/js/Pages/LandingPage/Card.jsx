

const Card = ({title, image, TextContent, }) => {
  return (
    <>
      <div className=" h-96  bg-slate-500   flex-col flex mt-20 items-center justify-center gap-5">
        <img  className=" w-20 h-20 "src={image} alt="Card"/>
        <h1>{title}</h1>
        <p className=" text-center">{TextContent}</p>
      </div>
    </>

    
  )
}

export default Card