/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { rgba } from 'polished';
import Service from 'components/cards/service';
import icon4 from 'assets/images/icons/service4.png';
import icon5 from 'assets/images/icons/service5.png';
import icon6 from 'assets/images/icons/service6.png';
import icon7 from 'assets/images/icons/service7.png';
import icon8 from 'assets/images/icons/service8.png';
import icon9 from 'assets/images/icons/service9.png';

const data = [
  {
    id: 1,
    icon: icon4,
    moreLink: '#learn-more',
    title: 'Salesforce Administrator',
    description: `Administrators at Salesforce collaborate with stakeholders to determine system needs and customise the platform. Simply put, they make it possible for users to get the most out of Salesforce technology.`,
  },
  {
    id: 2,
    icon: icon5,
    moreLink: '#learn-more',
    title: 'Platform Builer',
    description: `App Builder is for people who want to show  their skills in designing, creating, and deploying custom applications leveraging the Lightning Platform's declarative customization features.`,
  },
  {
    id: 3,
    icon: icon6,
    moreLink: '#learn-more',
    title: 'Flow Builder',
    description: `Flow Builder is the declarative interface used to build individual flows. Flow Builder can be used to build code-like logic without using a programming language.`,
  },
  {
    id: 4,
    icon: icon7,
    moreLink: '#learn-more',
    title: 'Experience Cloud',
    description: `Experience Cloud enables companies to build content in one place and deliver it anywhere; websites, portals, mobile apps and storefronts.`,
  },
  {
    id: 5,
    icon: icon8,
    moreLink: '#learn-more',
    title: 'Lightning Web Component',
    description: `Lightning web components are custom HTML elements built using HTML and modern JavaScript. LWC and Aura components can coexist and interoperate on a page.`,
  },
  {
    id: 6,
    icon: icon9,
    moreLink: '#learn-more',
    title: 'Mulesoft',
    description: `MuleSoft is a data integration platform built to connect a variety of data sources and applications, and perform analytics and ETL processes. `,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Explore Our Courses"
          description="Choose the course that best suits you and begin with us your journey to master Salesforce."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default OtherServices;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    // backgroundColor: '#F9FAFC',
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: '10px auto 0',
    },
  },
  contentWrapper: {
    gap: ['30px 30px', '30px 30px', '30px 30px', '80px 30px'],
    display: 'grid',
    justifyContent: ['center', 'center', 'center', 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
