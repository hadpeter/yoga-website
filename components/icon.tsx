type Props = {
    platform: string
    picture: string
  }
  
  const Icon = ({ platform, picture }: Props) => {
    return (
      <div className="flex items-center">
        <img src={picture} className="w-12 h-12 mr-4" alt={platform} />
        <div className="text-xl font-bold mr-2">{platform}:</div>
      </div>
    )
  }
  
  export default Icon
  