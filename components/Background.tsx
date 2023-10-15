import Image from 'next/image'
 
const Background = (props: { background: string }) => {
  return (
    <Image
      alt="Ankara"
      src={`/background/${props.background}.webp`}
      quality={ 100 }
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  )
}

export default Background;