import { chakra, HTMLChakraProps, useColorModeValue, Image } from '@chakra-ui/react'
import AiwareLogo from './aiwarelogo.svg'
// import AiwareLogo from './aiwarelogo.png'
interface LogoProps extends HTMLChakraProps<'svg'> {
  color?: string;
  width?: string | number;
  height?: string | number;
}

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const color = useColorModeValue('#231f20', '#fff')
  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 72"
      {...props}
    >
        <AiwareLogo/>
    </chakra.svg>
  )
}
