import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIconLink,
  SocialLogo,
  SocialIcons,
  WebsiteRights,
} from './FooterElements';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink href='/'>How it works</FooterLink>
                <FooterLink href='/'>Testimonials</FooterLink>
                <FooterLink href='/'>Careers</FooterLink>
                <FooterLink href='/'>Investors</FooterLink>
                <FooterLink href='/'>Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink href='/'>Contact</FooterLink>
                <FooterLink href='/'>Support</FooterLink>
                <FooterLink href='/'>Destinations</FooterLink>
                <FooterLink href='/'>Sponsorships</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle href='/'>Videos</FooterLinkTitle>
                <FooterLink href='/'>Submit Video</FooterLink>
                <FooterLink href='/'>Ambassadors</FooterLink>
                <FooterLink href='/'>Agency</FooterLink>
                <FooterLink href='/'>Influencer</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink>Instagram</FooterLink>
                <FooterLink href='/'>Facebook</FooterLink>
                <FooterLink href='/'>Youtube</FooterLink>
                <FooterLink href='/'>Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo>nextlab</SocialLogo>
              <WebsiteRights>
                Nextlab &copy; {new Date().getFullYear()} All rights reserved.{' '}
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
