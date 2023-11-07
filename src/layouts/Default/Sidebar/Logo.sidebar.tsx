import Image from 'next/image'

export function LogoSidebar({ src }: { src: string }) {
  return (
    <div className="flex flex-col justify-center items-center mx-1 my-6">
      <Image src={src} alt="logo" width={90} height={50} />
    </div>
  )
}

export default LogoSidebar
