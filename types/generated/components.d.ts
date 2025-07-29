import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAboutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_hero_sections';
  info: {
    displayName: 'About Hero Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

export interface BlocksCareerPageHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_career_page_heroes';
  info: {
    displayName: 'Career Page Hero';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image1: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image2: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image3: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image4: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksCareerSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_career_sections';
  info: {
    displayName: 'Career Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    largeImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    smallImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksCaseStudiesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_case_studies_sections';
  info: {
    displayName: 'Case Studies Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    project_description: Schema.Attribute.Text & Schema.Attribute.Required;
    project_label: Schema.Attribute.String;
    project_title: Schema.Attribute.String & Schema.Attribute.Required;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksCaseStudyHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_case_study_heroes';
  info: {
    displayName: 'Case Study Hero';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    button: Schema.Attribute.Component<'elements.link', false>;
    tags: Schema.Attribute.Component<'elements.list', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksContactSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_sections';
  info: {
    displayName: 'Contact Section';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    mail: Schema.Attribute.Email & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksCsSection1 extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cs_section_1s';
  info: {
    displayName: 'CS Section 1';
  };
  attributes: {
    client_details: Schema.Attribute.Component<
      'elements.client-details',
      false
    >;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface BlocksCsSection2 extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cs_section_2s';
  info: {
    displayName: 'CS Section 2';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    image1: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image2: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    stats: Schema.Attribute.Component<'elements.stats', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface BlocksCsSection3 extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cs_section_3s';
  info: {
    displayName: 'CS Section 3';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface BlocksCsSection4 extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cs_section_4s';
  info: {
    displayName: 'CS Section 4';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    image1: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image2: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface BlocksFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_sections';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    faqs: Schema.Attribute.Component<'elements.accordion', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksFooterCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_footer_cta_sections';
  info: {
    displayName: 'Footer CTA Section';
  };
  attributes: {
    button: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta_1: Schema.Attribute.Component<'elements.button', false>;
    cta_2: Schema.Attribute.Component<'elements.button', false>;
    main_content: Schema.Attribute.Component<'elements.hero-content', true>;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

export interface BlocksIndustriesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_industries_sections';
  info: {
    displayName: 'Industries Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    faqs: Schema.Attribute.Component<'elements.accordion', true>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_sections';
  info: {
    displayName: 'Info Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface BlocksInsightsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_insights_sections';
  info: {
    displayName: 'Insights Section';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    button: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksIntroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_intro_sections';
  info: {
    displayName: 'Intro Section';
  };
  attributes: {
    button: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface BlocksLifeAtRim extends Struct.ComponentSchema {
  collectionName: 'components_blocks_life_at_rims';
  info: {
    displayName: 'Life At Rim';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksLocationSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_location_sections';
  info: {
    displayName: 'Location Section';
    icon: 'pinMap';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    location_1: Schema.Attribute.Component<'elements.location', false>;
    location_2: Schema.Attribute.Component<'elements.location', false>;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksOurSystemSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_our_system_sections';
  info: {
    displayName: 'Our System Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.our-system-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksProjectsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_projects_sections';
  info: {
    displayName: 'Projects Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    projects: Schema.Attribute.Component<'elements.project-card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksServiceDetailsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_service_details_sections';
  info: {
    displayName: 'Service Details Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    details: Schema.Attribute.Component<'elements.service-card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksServiceHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_service_hero_sections';
  info: {
    displayName: 'Service Hero Section';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services_sections';
  info: {
    displayName: 'Services Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.service-card', true>;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksStorySection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_story_sections';
  info: {
    displayName: 'Story Section';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    largeImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    smallImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_team_sections';
  info: {
    displayName: 'Team Section';
  };
  attributes: {
    team_section: Schema.Attribute.Component<'elements.team-card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksTermsOfServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_terms_of_service_sections';
  info: {
    displayName: 'Terms of Service Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    terms: Schema.Attribute.Component<'elements.list', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
  };
  attributes: {
    testimonials: Schema.Attribute.Component<
      'elements.testimonial-card',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_values_sections';
  info: {
    displayName: 'Values Section';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    values: Schema.Attribute.Component<'elements.values-card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
  };
}

export interface BlocksWhoWeAre extends Struct.ComponentSchema {
  collectionName: 'components_blocks_who_we_ares';
  info: {
    displayName: 'Who We Are';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    cards: Schema.Attribute.Component<'elements.who-we-are-card', true>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsAccordion extends Struct.ComponentSchema {
  collectionName: 'components_elements_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsClientDetails extends Struct.ComponentSchema {
  collectionName: 'components_elements_client_details';
  info: {
    displayName: 'Client Details';
  };
  attributes: {
    details: Schema.Attribute.Component<'elements.details-list', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ElementsDetailsList extends Struct.ComponentSchema {
  collectionName: 'components_elements_details_lists';
  info: {
    displayName: 'Details List';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsHeroContent extends Struct.ComponentSchema {
  collectionName: 'components_elements_hero_contents';
  info: {
    displayName: 'Hero Content';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_info_cards';
  info: {
    displayName: 'Info Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsInsightsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_insights_cards';
  info: {
    displayName: 'Insights Card';
  };
  attributes: {
    date: Schema.Attribute.Date;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsList extends Struct.ComponentSchema {
  collectionName: 'components_elements_lists';
  info: {
    displayName: 'List';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLocation extends Struct.ComponentSchema {
  collectionName: 'components_elements_locations';
  info: {
    displayName: 'Location';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    mail: Schema.Attribute.Email & Schema.Attribute.Required;
    mapUrl: Schema.Attribute.Component<'elements.link', false>;
    office: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
    icon: 'crown';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    logoText: Schema.Attribute.String;
  };
}

export interface ElementsLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    logoText: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsOurSystemCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_our_system_cards';
  info: {
    displayName: 'Our System Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsProjectCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_project_cards';
  info: {
    displayName: 'Project Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    project: Schema.Attribute.Relation<
      'oneToOne',
      'api::case-study.case-study'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_cards';
  info: {
    displayName: 'Service Card';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsStats extends Struct.ComponentSchema {
  collectionName: 'components_elements_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    symbol: Schema.Attribute.Enumeration<['plus', 'percentage']>;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTag extends Struct.ComponentSchema {
  collectionName: 'components_elements_tags';
  info: {
    displayName: 'Tag';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ElementsTeamCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_team_cards';
  info: {
    displayName: 'Team Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    linkedin_url: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonial_cards';
  info: {
    displayName: 'Testimonial Card';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    testimonial: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ElementsValuesCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_values_cards';
  info: {
    displayName: 'Values Card';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsWhoWeAreCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_who_we_are_cards';
  info: {
    displayName: 'Who We Are Card';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    symbol: Schema.Attribute.Enumeration<['plus,', 'percentage']>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    follow_us: Schema.Attribute.Component<'elements.link', true>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    privacy_policy: Schema.Attribute.Component<'elements.link', false>;
    quick_links: Schema.Attribute.Component<'elements.link', true>;
    terms: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
    icon: 'layer';
  };
  attributes: {
    cta: Schema.Attribute.String & Schema.Attribute.Required;
    logo_black: Schema.Attribute.Component<'elements.logo', false> &
      Schema.Attribute.Required;
    logo_white: Schema.Attribute.Component<'elements.logo', false>;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about-hero-section': BlocksAboutHeroSection;
      'blocks.career-page-hero': BlocksCareerPageHero;
      'blocks.career-section': BlocksCareerSection;
      'blocks.case-studies-section': BlocksCaseStudiesSection;
      'blocks.case-study-hero': BlocksCaseStudyHero;
      'blocks.contact-section': BlocksContactSection;
      'blocks.cs-section-1': BlocksCsSection1;
      'blocks.cs-section-2': BlocksCsSection2;
      'blocks.cs-section-3': BlocksCsSection3;
      'blocks.cs-section-4': BlocksCsSection4;
      'blocks.faq-section': BlocksFaqSection;
      'blocks.footer-cta-section': BlocksFooterCtaSection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.industries-section': BlocksIndustriesSection;
      'blocks.info-section': BlocksInfoSection;
      'blocks.insights-section': BlocksInsightsSection;
      'blocks.intro-section': BlocksIntroSection;
      'blocks.life-at-rim': BlocksLifeAtRim;
      'blocks.location-section': BlocksLocationSection;
      'blocks.our-system-section': BlocksOurSystemSection;
      'blocks.projects-section': BlocksProjectsSection;
      'blocks.service-details-section': BlocksServiceDetailsSection;
      'blocks.service-hero-section': BlocksServiceHeroSection;
      'blocks.services-section': BlocksServicesSection;
      'blocks.story-section': BlocksStorySection;
      'blocks.team-section': BlocksTeamSection;
      'blocks.terms-of-service-section': BlocksTermsOfServiceSection;
      'blocks.testimonial-section': BlocksTestimonialSection;
      'blocks.values-section': BlocksValuesSection;
      'blocks.who-we-are': BlocksWhoWeAre;
      'elements.accordion': ElementsAccordion;
      'elements.button': ElementsButton;
      'elements.client-details': ElementsClientDetails;
      'elements.details-list': ElementsDetailsList;
      'elements.hero-content': ElementsHeroContent;
      'elements.info-card': ElementsInfoCard;
      'elements.insights-card': ElementsInsightsCard;
      'elements.link': ElementsLink;
      'elements.list': ElementsList;
      'elements.location': ElementsLocation;
      'elements.logo': ElementsLogo;
      'elements.logo-link': ElementsLogoLink;
      'elements.our-system-card': ElementsOurSystemCard;
      'elements.project-card': ElementsProjectCard;
      'elements.service-card': ElementsServiceCard;
      'elements.stats': ElementsStats;
      'elements.tag': ElementsTag;
      'elements.team-card': ElementsTeamCard;
      'elements.testimonial-card': ElementsTestimonialCard;
      'elements.values-card': ElementsValuesCard;
      'elements.who-we-are-card': ElementsWhoWeAreCard;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
