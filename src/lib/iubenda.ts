const cookiePolicyId = "20965005";

export const iubenda = {
  widgetUrl:
    "https://embeds.iubenda.com/widgets/ed05e69a-1b4c-4148-91f2-87bae7c3a385.js",
  policyEmbedUrl: "https://cdn.iubenda.com/iubenda.js",
  policyEmbedClass: "iubenda-white iubenda-noiframe iubenda-embed",
  privacyPolicyUrl: `https://www.iubenda.com/privacy-policy/${cookiePolicyId}`,
  cookiePolicyUrl: `https://www.iubenda.com/privacy-policy/${cookiePolicyId}/cookie-policy`,
  googleMapsPurpose: "3",
} as const;
