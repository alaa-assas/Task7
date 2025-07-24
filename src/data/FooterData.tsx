import type { LinkItemList } from "../types/Link";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaTwitter, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";

export const ServicesFooterData : LinkItemList = {
    title:"Services",
    links: [
        {
            name: "Bike and Rickshaw rental",
            path: "#"
        },
        {
            name: "Guided Tours of Lucca",
            path: "#"
        },
        {
            name: "Guided Bike Tour of Lucca",
            path: "#"
        },
        {
            name: "Trip In The Tuscan Hills",
            path: "#"
        },
        {
            name: "Transportation With Luxury Cars",
            path: "#"
        },
        {
            name: "Wine Tours By Bus With Guide",
            path: "#"
        }
    ]
}

export const HomeFooterData : LinkItemList = {
    title:"Home",
    links: [
        {
            name: "Home",
            path: "#"
        },
        {
            name: "About Us",
            path: "#"
        },
        {
            name: "Tour Packages",
            path: "#"
        }
    ]
}

export const HelpFooterData : LinkItemList = {
    title:"Help",
    links: [
        {
            name: "Terms of Use",
            path: "#"
        },
        {
            name: "Provicy Policy",
            path: "#"
        }
    ]
}

export const ContactsFooterData : LinkItemList = {
    title:"Contacts",
    links: [
        {
            name: "Piazza Napoleone, Lucca, Tuscany",
            path: "#",
            icons: <FaLocationDot className="text-primary w-5 h-5"/>
        },
        {
            name: "	+39 346 368 5708",
            path: "#",
            icons: <FaPhoneAlt className="text-primary w-5 h-5"/>
        },
        {
            name: "italiainlimo@gmail.com",
            path: "#",
            icons: <MdEmail className="text-primary w-5 h-5"/>
        }
    ]
}

export const SocialMediaFooterData : LinkItemList = {
    title:"Social Media",
    links: [
        {
            name: "",
            path: "#",
            icons: <FaTwitter className="w-8 h-8 text-secondary" />
        },
        {
            name: "",
            path: "#",
            icons: <FaFacebookF className="w-8 h-8 text-secondary" />
        },
        {
            name: "",
            path: "#",
            icons: <FaInstagram className="w-8 h-8 text-secondary" />
        }
    ]
}

export const footerColumns = [
    {
      links: ServicesFooterData,
      type: 'default' as const,
    },
    {
      links: HomeFooterData,
      type: 'default' as const,
    },
    {
      links: HelpFooterData,
      type: 'default' as const,
    },
    {
      links: ContactsFooterData,
      type: 'contact' as const,
    },
    {
      links: SocialMediaFooterData,
      type: 'social' as const,
    },
  ];