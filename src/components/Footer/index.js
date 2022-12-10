import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
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
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/portfolio">How it works</FooterLink>
              <FooterLink to="/portfolio">Testimonials</FooterLink>
              <FooterLink to="/portfolio">Careers</FooterLink>
              <FooterLink to="/portfolio">Inverstors</FooterLink>
              <FooterLink to="/portfolio">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/portfolio">How it works</FooterLink>
              <FooterLink to="/portfolio">Testimonials</FooterLink>
              <FooterLink to="/portfolio">Careers</FooterLink>
              <FooterLink to="/portfolio">Inverstors</FooterLink>
              <FooterLink to="/portfolio">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/portfolio">How it works</FooterLink>
              <FooterLink to="/portfolio">Testimonials</FooterLink>
              <FooterLink to="/portfolio">Careers</FooterLink>
              <FooterLink to="/portfolio">Inverstors</FooterLink>
              <FooterLink to="/portfolio">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/portfolio">How it works</FooterLink>
              <FooterLink to="/portfolio">Testimonials</FooterLink>
              <FooterLink to="/portfolio">Careers</FooterLink>
              <FooterLink to="/portfolio">Inverstors</FooterLink>
              <FooterLink to="/portfolio">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/portfolio" onClick={toggleHome}>
              Andrei.
            </SocialLogo>
            <WebsiteRights>
              Copyright © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="/portfolio"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="/portfolio"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="/portfolio"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="/portfolio"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="/portfolio"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
