import {
  contentsAdmin,
  contentsContact,
  contentsNewsLetter,
  contentsSocialLinks
} from '@/contents/globals'
import { useIsMobile, useText } from '@/hooks'
import { getFontSize } from '@/utils'
import React, { useEffect } from 'react'
import Button from '../Button'
import Divider from '../Divider'
import ExternalLink from '../ExternalLink'
import Input from '../Input'
import Text from '../Text'
import * as S from './styles'
import Image from 'next/image'
import imgCastle from '../../../public/assets/images/global/castle.svg'
import Column from '../Column'
import Row from '../Row'
import { TCssSize } from '@/interfaces'
import { useRouter } from 'next/router'

const linkHiring = 'https://careers.werecruit.io/fr/collection-adresses-hotels'

const Section = ({ children }: { children: React.ReactNode }) => (
  <>
    <Divider />
    <S.Section>{children}</S.Section>
  </>
)

type ContentProps = {
  fontSize: string
}
const Contact = ({ fontSize }: ContentProps) => {
  const texts = {
    address: useText(contentsContact.address),
    zipCode: useText(contentsContact.zipCode),
    city: useText(contentsContact.city),
    email: useText(contentsContact.email),
    phone: useText(contentsContact.phone),
    country: useText(contentsContact.country)
  }
  return (
    <Section>
      <S.Part direction="row" align="center" fontSize={fontSize}>
        <Text opt_align="center">{texts.address}</Text>
      </S.Part>
      <S.Part direction="row" align="center" fontSize={fontSize}>
        <Text>
          {texts.zipCode} &nbsp; {texts.city}
        </Text>
      </S.Part>
      <S.Part direction="row" align="space-around" fontSize={fontSize}>
        <ExternalLink link={`mailto:${texts.email}`}>
          <Text>{texts.email}</Text>
        </ExternalLink>
        <ExternalLink link={`tel:${texts.phone}`}>
          <Text>{texts.phone}</Text>
        </ExternalLink>
      </S.Part>
    </Section>
  )
}
const Social = ({ fontSize }: ContentProps) => {
  const router = useRouter()
  const [links, setLinks] = React.useState({
    whatsapp: contentsSocialLinks.whatsapp.link,
    facebook: contentsSocialLinks.facebook.link,
    instagram: contentsSocialLinks.instagram.link,
    linkedin: contentsSocialLinks.linkedin.link
  })

  useEffect(() => {
    if (
      ['/restaurant-les-pecheurs', '/en/les-pecheurs-restaurant'].includes(
        router.asPath
      )
    ) {
      setLinks({
        whatsapp: contentsSocialLinks.whatsapp.linkRestoPecheur,
        facebook: contentsSocialLinks.facebook.linkRestoPecheur,
        instagram: contentsSocialLinks.instagram.linkRestoPecheur,
        linkedin: contentsSocialLinks.linkedin.linkRestoPecheur
      })
    } else if (
      ['/restaurant-baba', '/en/baba-restaurant'].includes(router.asPath)
    ) {
      setLinks({
        whatsapp: contentsSocialLinks.whatsapp.linkRestoBaba,
        facebook: contentsSocialLinks.facebook.linkRestoBaba,
        instagram: contentsSocialLinks.instagram.linkRestoBaba,
        linkedin: contentsSocialLinks.linkedin.linkRestoBaba
      })
    } else {
      setLinks({
        whatsapp: contentsSocialLinks.whatsapp.link,
        facebook: contentsSocialLinks.facebook.link,
        instagram: contentsSocialLinks.instagram.link,
        linkedin: contentsSocialLinks.linkedin.link
      })
    }
  }, [router.asPath])

  return (
    <Section>
      <S.Part direction="row" align="space-between" fontSize={fontSize}>
        <ExternalLink link={links.whatsapp}>
          <Text>{contentsSocialLinks.whatsapp.label}</Text>
        </ExternalLink>
        <ExternalLink link={links.facebook}>
          <Text>{contentsSocialLinks.facebook.label}</Text>
        </ExternalLink>
      </S.Part>
      <S.Part direction="row" align="space-between" fontSize={fontSize}>
        <ExternalLink link={links.instagram}>
          <Text>{contentsSocialLinks.instagram.label}</Text>
        </ExternalLink>
        <ExternalLink link={links.linkedin}>
          <Text>{contentsSocialLinks.linkedin.label}</Text>
        </ExternalLink>
      </S.Part>
    </Section>
  )
}
const Admin = ({ fontSize }: ContentProps) => {
  const texts = {
    plan: useText(contentsAdmin.plan),
    backToTop: useText(contentsAdmin.backToTop),
    legalNotice: useText(contentsAdmin.legalNotice),
    hiring: useText(contentsAdmin.hiring),
    hotels: useText(contentsAdmin.hotels)
  }
  const backToTopClick = () => window.scrollTo(0, 0)
  return (
    <Section>
      <S.Part direction="row" align="space-between" fontSize={fontSize}>
        <Text>{texts.plan}</Text>
        <div onClick={backToTopClick}>
          <Text>{texts.backToTop}</Text>
        </div>
      </S.Part>
      <S.Part direction="row" align="space-between" fontSize={fontSize}>
        <Text>{texts.legalNotice}</Text>
        <ExternalLink link={linkHiring}>
          <Text>{texts.hiring}</Text>
        </ExternalLink>
      </S.Part>
      <S.Part direction="row" align="space-between" fontSize={fontSize}>
        <Text>
          <Image
            style={{ height: fontSize, marginRight: '10px' }}
            src={imgCastle}
            alt="logo"
          />{' '}
          {texts.hotels}
        </Text>
      </S.Part>
    </Section>
  )
}

type FooterProps = React.ComponentPropsWithoutRef<'footer'>
const Footer = (props: FooterProps) => {
  const [links, setLinks] = React.useState({
    whatsapp: contentsSocialLinks.whatsapp.link,
    facebook: contentsSocialLinks.facebook.link,
    instagram: contentsSocialLinks.instagram.link,
    linkedin: contentsSocialLinks.linkedin.link
  })
  const router = useRouter()
  const isMobile = useIsMobile()
  const spacing: TCssSize = {
    unit: 'px',
    value: 15
  }

  useEffect(() => {
    if (
      ['/restaurant-les-pecheurs', '/en/les-pecheurs-restaurant'].includes(
        router.asPath
      )
    ) {
      setLinks({
        whatsapp: contentsSocialLinks.whatsapp.linkRestoPecheur,
        facebook: contentsSocialLinks.facebook.linkRestoPecheur,
        instagram: contentsSocialLinks.instagram.linkRestoPecheur,
        linkedin: contentsSocialLinks.linkedin.linkRestoPecheur
      })
    } else if (
      ['/restaurant-baba', '/en/baba-restaurant'].includes(router.asPath)
    ) {
      setLinks({
        whatsapp: contentsSocialLinks.whatsapp.linkRestoBaba,
        facebook: contentsSocialLinks.facebook.linkRestoBaba,
        instagram: contentsSocialLinks.instagram.linkRestoBaba,
        linkedin: contentsSocialLinks.linkedin.linkRestoBaba
      })
    } else {
      setLinks({
        whatsapp: contentsSocialLinks.whatsapp.link,
        facebook: contentsSocialLinks.facebook.link,
        instagram: contentsSocialLinks.instagram.link,
        linkedin: contentsSocialLinks.linkedin.link
      })
    }
  }, [router.asPath])

  const texts = {
    label: useText(contentsNewsLetter.label),
    labelBis: useText(contentsNewsLetter.labelBis),
    placeHolder: useText(contentsNewsLetter.placeHolder),
    button: useText(contentsNewsLetter.button),
    buttonBis: useText(contentsNewsLetter.buttonBis),
    collection: useText(contentsContact.collection),
    address: useText(contentsContact.address),
    zipCode: useText(contentsContact.zipCode),
    city: useText(contentsContact.city),
    email: useText(contentsContact.email),
    phone: useText(contentsContact.phone),
    country: useText(contentsContact.country),
    plan: useText(contentsAdmin.plan),
    backToTop: useText(contentsAdmin.backToTop),
    legalNotice: useText(contentsAdmin.legalNotice),
    hiring: useText(contentsAdmin.hiring),
    hotels: useText(contentsAdmin.hotels)
  }
  const fontSizeLaptop = {
    regular: {
      current: '1.1vw',
      middle: 17
    },
    small: {
      current: '0.8vw',
      middle: 12
    }
  }
  const fontSizeMobile = {
    regular: {
      current: '2.2vw',
      middle: 17
    },
    small: {
      current: '2.2vw',
      middle: 12
    }
  }

  const fontSize = isMobile ? fontSizeMobile : fontSizeLaptop
  const fontRegular = getFontSize(
    fontSize.regular.current,
    fontSize.regular.middle
  )
  const fontSmall = getFontSize(fontSize.small.current, fontSize.small.middle)

  if (isMobile) {
    return (
      <S.Wrapper className={`mobile sc-footer ${props.className}`} {...props}>
        <Section>
          <S.Part
            direction="column"
            align="space-between"
            fontSize={fontRegular}
          >
            <form>
              <Text>{texts.label}</Text>
              <Input
                type="email"
                placeholder={texts.placeHolder}
                opt_fontSize={fontRegular}
              />
              <Button type="submit">
                <Text>{texts.button}</Text>
              </Button>
            </form>
          </S.Part>
        </Section>
        <Contact fontSize={fontRegular} />
        <Social fontSize={fontSmall} />
        <Admin fontSize={fontSmall} />
      </S.Wrapper>
    )
  }
  return (
    <S.Wrapper className={`large sc-footer ${props.className}`} {...props}>
      <Section>
        <Column opt_spacing={spacing} opt_alignItems="flex-start">
          <Text className="first">{texts.address}</Text>
          <ExternalLink link={links.whatsapp}>
            <Text>{contentsSocialLinks.whatsapp.label}</Text>
          </ExternalLink>
          <ExternalLink link={`mailto:${texts.email}`}>
            <Text>{texts.email}</Text>
          </ExternalLink>
          <Text>
            <Image
              style={{ height: fontSmall, marginRight: '10px' }}
              src={imgCastle}
              alt="logo"
            />
            {texts.hotels}
          </Text>
        </Column>
        <Column opt_spacing={spacing} opt_alignItems="stretch">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {texts.collection.split(' ').map((item, index) => (
              <Text key={index} className="first">
                {item}
              </Text>
            ))}
          </div>
          <Row opt_justifyContent="space-between">
            <ExternalLink link={links.instagram}>
              <Text>{contentsSocialLinks.instagram.label}</Text>
            </ExternalLink>
            <ExternalLink link={links.facebook}>
              <Text opt_align="right">
                {contentsSocialLinks.facebook.label}
              </Text>
            </ExternalLink>
          </Row>
          <form className="large-form">
            <Text>{texts.labelBis}</Text>
            <Input className="large" type="email" opt_fontSize={fontRegular} />
            <button type="submit">
              <Text opt_align="right">{texts.buttonBis}</Text>
            </button>
          </form>
          <Row opt_justifyContent="space-between">
            <Text>{texts.legalNotice}</Text>
            <ExternalLink link={linkHiring}>
              <Text opt_align="right">{texts.hiring}</Text>
            </ExternalLink>
          </Row>
        </Column>
        <Column opt_spacing={spacing} opt_alignItems="flex-end">
          <Text className="first">
            {texts.zipCode} &nbsp; {texts.city}
          </Text>
          <ExternalLink link={links.linkedin}>
            <Text>{contentsSocialLinks.linkedin.label}</Text>
          </ExternalLink>
          <ExternalLink link={`tel:${texts.phone}`}>
            <Text>{texts.phone}</Text>
          </ExternalLink>
          <Text>{texts.plan}</Text>
        </Column>
      </Section>
    </S.Wrapper>
  )
}

export default Footer
