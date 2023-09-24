import * as React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from '@chakra-ui/react'
import { SEO } from 'components/seo/seo'

import { FallInPlace } from 'components/motion/fall-in-place'
import { Hero } from 'components/hero'
import { Link, Br } from '@saas-ui/react'
import { Em } from 'components/typography'
import { NextjsLogo, ChakraLogo } from 'components/logos'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'
import { BackgroundGradient } from 'components/gradients/background-gradient'
import { Faq } from 'components/faq'
import { Pricing } from 'components/pricing/pricing'

import { ButtonLink } from 'components/button-link/button-link'

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from 'components/highlights'

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="AI Tools & Library"
        description="Comprehensive and Filterable Generative AI Tools and ChatGPT with other AI LLM models and AI image generation Prompt Library"
      />
      <Box>
        {/* <HeroSection /> */}
        <HighlightsSection />
        {/* <FeaturesSection /> */}
        {/* <TestimonialsSection />
        <PricingSection />
        <FaqSection /> */}
      </Box>
    </Box>
  )
}


const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  const categoryLinks = [
    {
      category: 'Assistants',
      link: 'https://aitoolslibrary.super.site/assistants',
    },
    {
      category: 'Images',
      link: 'https://aitoolslibrary.super.site/images',
    },
    {
      category: 'Writing',
      link: 'https://aitoolslibrary.super.site/copywriting',
    },
    {
      category: 'Video',
      link: 'https://aitoolslibrary.super.site/video',
    },
    {
      category: 'Social Media',
      link: 'https://aitoolslibrary.super.site/social-media',
    },
    {
      category: 'Marketing',
      link: 'https://aitoolslibrary.super.site/marketing',
    },
    {
      category: 'AI Models & LLMs',
      link: 'https://aitoolslibrary.super.site/ai-models',
    },
    {
      category: 'Music & Voice',
      link: 'https://aitoolslibrary.super.site/music-voice',
    },
    {
      category: 'Management',
      link: 'https://aitoolslibrary.super.site/management',
    },
    {
      category: 'Coding',
      link: 'https://aitoolslibrary.super.site/coding',
    },
    {
      category: 'Plugins',
      link: 'https://aitoolslibrary.super.site/plugins-extensions',
    },
  ];

  const midCategoryLinks = [
    {
      category: 'Realistic',
      link: 'https://aitoolslibrary.super.site/ai-prompts-library/midjourney-prompts-library',
    },
    {
      category: 'Graphics',
      link: 'https://aitoolslibrary.super.site/ai-prompts-library/midjourney-prompts-library',
    },
    {
      category: 'Scenes',
      link: 'https://aitoolslibrary.super.site/ai-prompts-library/midjourney-prompts-library',
    },
    {
      category: 'Illustrations',
      link: 'https://aitoolslibrary.super.site/ai-prompts-library/midjourney-prompts-library',
    },
    {
      category: 'Surreal',
      link: 'https://aitoolslibrary.super.site/ai-prompts-library/midjourney-prompts-library',
    },
    {
      category: 'Design',
      link: 'https://aitoolslibrary.super.site/ai-prompts-library/midjourney-prompts-library',
    },
  ];

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]}>
      <VStack flexDirection={{ base: 'column', md: 'row' }} alignItems="flex-start" spacing="2">
          <Link href="https://aitoolslibrary.super.site" isExternal>
            <Heading as='h2' size='xl'>
            AI Tools Library
            </Heading>
            </Link>
          <Link href="https://aitoolslibrary.super.site" isExternal>
          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="4"
            pe="4"
            ml={{ base: 0, md: 4 }}
            mb="4"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              {' '}
              <Text color="cyan.300" display="inline">
              aitoolslibrary.super.site
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
          </Link>
        </VStack>
        <VStack alignItems="flex-start" spacing="1">
          <Text color="muted" fontSize="xl">
           Comprehensive and filterable <Em>by all the most important Generative AI categories</Em>
           AI Tools Library
          </Text>
          <Wrap mt="8">
           {categoryLinks.map((item) => (
              <Tag
                key={item.category}
                variant="subtle"
                colorScheme="purple"
                rounded="full"
                px="3"
              >
                <Link href={item.link} isExternal>
                  {item.category}
                </Link>
              </Tag>
            ))}
        </Wrap>
        </VStack>
      </HighlightsItem>

      <HighlightsItem>
      <Link href="https://aitoolslibrary.super.site/ai-prompts-library" isExternal>
      <Heading as='h2' size='lg' mb="4">
            ChatGPT Prompts Library
            </Heading>
        </Link>
        <Text color="muted" fontSize="lg">
          Comprehensive and categorize ChatGPT and other LLM models prompts library filterable by the most commonly used categories
        </Text>
        <Link href="https://aitoolslibrary.super.site/ai-prompts-library" isExternal>
        <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="4"
            pe="4"
            mt="4"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              {' '}
              <Text color="cyan.300" display="inline">
              <Link href="https://aitoolslibrary.super.site/ai-prompts-library" isExternal> ChatGPT Prompts</Link>
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
          </Link>
      </HighlightsItem>

      <HighlightsTestimonialItem
        name="Piotr Macai"
        description="Founder"
        avatar="/static/images/piotrmacai.jpg"
        gradient={['pink.200', 'purple.500']}
      >
         <Link href="https://aitoolslibrary.super.site/ai-insider" isExternal>
         <Heading as='h2' size='lg' mt="-1rem" mb="1rem">
            AI Insider
            </Heading>
            </Link>
       AI Blog with the Artificial Intelligence tech and tools insights
       <Link href="https://aitoolslibrary.super.site/ai-insider" isExternal>
       <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="4"
            pe="4"
            mt="4"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              {' '}
              <Text color="cyan.300" display="inline">
              AI Insider
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
          </Link>
      </HighlightsTestimonialItem>

{/* <HighlightsItem title="AI Prompt Frameworks">
        <Text color="muted" fontSize="lg">
        High quality Prompt Frameworks - step by step tutorials with examples to build prompts
        </Text>
        <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="2"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              {' '}
              <Text color="cyan.300" display="inline">
              aitoolslibrary.super.site
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
  </HighlightsItem> */}


      <HighlightsItem
        colSpan={[1, null, 2]}
        // title="Midjourney Prompt Library"
      >
            <VStack flexDirection={{ base: 'column', md: 'row' }} alignItems="flex-start" spacing="2">
            <Link href="https://aitoolslibrary.super.site/ai-prompts-library/midjourney-prompts-library" isExternal>
            <Heading as='h2' size='lg'>
            Midjourney Prompts Library
            </Heading>
            </Link>
          <Link href="https://aitoolslibrary.super.site/ai-prompts-library/midjourney-prompts-library" isExternal>
          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="4"
            pe="4"
            ml={{ base: 0, md: 4 }}
            mb="4"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              {' '}
              <Text color="cyan.300" display="inline">
              <Link href="https://aitoolslibrary.super.site/ai-prompts-library/midjourney-prompts-library" isExternal>
              Midjourney Prompts
              </Link>
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
          </Link>
        </VStack>
        <Text color="muted" fontSize="lg">
          Filterable gallery with the best Midjourney prompts with images
        </Text>
        <Wrap mt="8">
           {midCategoryLinks.map((item) => (
              <Tag
                key={item.category}
                variant="subtle"
                colorScheme="purple"
                rounded="full"
                px="3"
              >
                <Link href={item.link} isExternal>
                  {item.category}
                </Link>
              </Tag>
            ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}



export default Home

export async function getStaticProps() {
  return {
    props: {
      // announcement: {
      //   title: 'Get 50% off Saas UI Pro while in beta.',
      //   href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order',
      // },
    },
  }
}
