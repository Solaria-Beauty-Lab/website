import { component$ } from "@builder.io/qwik";
import { contactIconImage } from "~/lib/images";

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

export const ContactIcon = component$<ContactIconProps>(
  ({ name, size = "md" }) => {
    const boxSize = size === "sm" ? "h-8 w-8" : "h-11 w-11";

    return (
      <span aria-hidden="true" class={`block shrink-0 ${boxSize}`}>
        <img
          src={contactIconImage(name)}
          alt=""
          width="96"
          height="96"
          loading="eager"
          decoding="async"
          class="h-full w-full object-contain"
        />
      </span>
    );
  },
);
