import {
  contentsAdmin,
  contentsContact,
  contentsNewsLetter,
  contentsSocialLinks
} from '@/contents/globals'
import { useIsMobile, useText } from '@/hooks'
import { getFontSize } from '@/utils'
import React from 'react'
import Button from '../Button'
import Divider from '../Divider'
import ExternalLink from '../ExternalLink'
import Input from '../Input'
import Text from '../Text'
import * as S from './styles'

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
  const isMobile = useIsMobile()
  const texts = {
    address: useText(contentsContact.address),
    zipCode: useText(contentsContact.zipCode),
    city: useText(contentsContact.city),
    email: useText(contentsContact.email),
    phone: useText(contentsContact.phone),
    country: useText(contentsContact.country)
  }
  if (isMobile) {
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
          <Text>{texts.email}</Text>
          <Text>{texts.phone}</Text>
        </S.Part>
      </Section>
    )
  }
  return (
    <Section>
      <S.Part direction="row" align="space-between" fontSize={fontSize}>
        <Text>{texts.address}</Text>
        <Text>
          {texts.zipCode} &nbsp; &nbsp; &nbsp; {texts.city}
        </Text>
        <Text>{texts.country}</Text>
      </S.Part>
      <S.Part direction="row" align="space-between" fontSize={fontSize}>
        <Text>{texts.email}</Text>
        <Text>{texts.phone}</Text>
      </S.Part>
    </Section>
  )
}
const Social = ({ fontSize }: ContentProps) => {
  const isMobile = useIsMobile()
  if (isMobile) {
    return (
      <Section>
        <S.Part direction="row" align="space-between" fontSize={fontSize}>
          <ExternalLink link={contentsSocialLinks.whatsapp.link}>
            <Text>{contentsSocialLinks.whatsapp.label}</Text>
          </ExternalLink>
          <ExternalLink link={contentsSocialLinks.facebook.link}>
            <Text>{contentsSocialLinks.facebook.label}</Text>
          </ExternalLink>
        </S.Part>
        <S.Part direction="row" align="space-between" fontSize={fontSize}>
          <ExternalLink link={contentsSocialLinks.instagram.link}>
            <Text>{contentsSocialLinks.instagram.label}</Text>
          </ExternalLink>
          <ExternalLink link={contentsSocialLinks.linkedin.link}>
            <Text>{contentsSocialLinks.linkedin.label}</Text>
          </ExternalLink>
        </S.Part>
      </Section>
    )
  }
  return (
    <Section>
      <S.Part direction="row" align="space-between" fontSize={fontSize}>
        <ExternalLink link={contentsSocialLinks.whatsapp.link}>
          <Text>{contentsSocialLinks.whatsapp.label}</Text>
        </ExternalLink>
        <ExternalLink link={contentsSocialLinks.instagram.link}>
          <Text>{contentsSocialLinks.instagram.label}</Text>
        </ExternalLink>
        <ExternalLink link={contentsSocialLinks.facebook.link}>
          <Text>{contentsSocialLinks.facebook.label}</Text>
        </ExternalLink>
        <ExternalLink link={contentsSocialLinks.linkedin.link}>
          <Text>{contentsSocialLinks.linkedin.label}</Text>
        </ExternalLink>
      </S.Part>
    </Section>
  )
}
const Admin = ({ fontSize }: ContentProps) => {
  const isMobile = useIsMobile()
  const texts = {
    plan: useText(contentsAdmin.plan),
    backToTop: useText(contentsAdmin.backToTop),
    legalNotice: useText(contentsAdmin.legalNotice),
    hiring: useText(contentsAdmin.hiring),
    hotels: useText(contentsAdmin.hotels)
  }
  if (isMobile) {
    return (
      <Section>
        <S.Part direction="row" align="space-between" fontSize={fontSize}>
          <Text>{texts.plan}</Text>
          <Text>{texts.backToTop}</Text>
        </S.Part>
        <S.Part direction="row" align="space-between" fontSize={fontSize}>
          <Text>{texts.legalNotice}</Text>
          <Text>{texts.hiring}</Text>
        </S.Part>
        <S.Part direction="row" align="space-between" fontSize={fontSize}>
          <Text>{texts.hotels}</Text>
        </S.Part>
      </Section>
    )
  }
  return (
    <Section>
      <S.Part direction="row" align="space-between" fontSize={fontSize}>
        <Text>{texts.legalNotice}</Text>
        <Text>{texts.hotels}</Text>
        <Text>{texts.hiring}</Text>
        <Text>{texts.plan}</Text>
        <Text>{texts.backToTop}</Text>
      </S.Part>
    </Section>
  )
}

type FooterProps = React.ComponentPropsWithoutRef<'footer'>
const Footer = (props: FooterProps) => {
  const isMobile = useIsMobile()
  const texts = {
    label: useText(contentsNewsLetter.label),
    placeHolder: useText(contentsNewsLetter.placeHolder),
    button: useText(contentsNewsLetter.button)
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

  return (
    <S.Wrapper
      className={`${isMobile ? 'mobile' : ''} sc-footer ${props.className}`}
      {...props}
    >
      <Section>
        <S.Part direction="column" align="space-between" fontSize={fontRegular}>
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

export default Footer
