import React from 'react';
import Instagram from 'src/modules/general/components/icons/instagram';
import LinkedinIcon from 'src/modules/general/components/icons/linkedin';
import FacebookIcon from 'src/modules/general/components/icons/facebook';
import { SocialMediaType } from '@/src/modules/layout/libraries/footer-types';

const SoacialMediaData: SocialMediaType[] = [
    {
        title: 'inkedin',
        link: 'https://www.linkedin.com/',
        icon: <LinkedinIcon />
    },
    {
        title: 'Facebook',
        link: 'https://www.facebook.com/',
        icon: <FacebookIcon />
    },
    {
        title: 'Instagram',
        link: 'https://www.instagram.com/',
        icon:<Instagram />
    },
]

export default SoacialMediaData