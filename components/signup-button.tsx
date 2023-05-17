type Props = {
    url: string
  }
  
  const SignupButton = ({ url }: Props) => {
    return (
      <div className="flex items-center justify-center text-xl fond-bold underline">
          <button>
          <a href={url}>Sign up here</a>
          </button>
      </div>
    )
  }
  
  export default SignupButton
  