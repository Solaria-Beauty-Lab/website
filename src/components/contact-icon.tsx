import { component$ } from "@builder.io/qwik";

type ContactIconName =
  | "location"
  | "phone"
  | "whatsapp"
  | "email"
  | "instagram"
  | "facebook"
  | "tiktok";

type ContactIconProps = {
  name: ContactIconName;
  size?: "sm" | "md";
};

const iconSources: Record<ContactIconName, string> = {
  location: "/images/icon-location-gold.png",
  phone: "/images/icon-phone-gold.png",
  whatsapp: "/images/icon-whatsapp-gold.png",
  email: "/images/icon-email-gold.png",
  instagram: "/images/icon-instagram-gold.png",
  facebook: "/images/icon-facebook-gold.png",
  tiktok: "/images/icon-tiktok-gold.png",
};

export const ContactIcon = component$<ContactIconProps>(
  ({ name, size = "md" }) => {
    const boxSize = size === "sm" ? "h-8 w-8" : "h-11 w-11";

    return (
      <span aria-hidden="true" class={`block shrink-0 ${boxSize}`}>
        <img
          src={iconSources[name]}
          alt=""
          width="1200"
          height="1200"
          loading="eager"
          decoding="async"
          class="h-full w-full object-contain"
        />
      </span>
    );
  },
);
