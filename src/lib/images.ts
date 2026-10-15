export const optimizedImage = (name: string, maxWidth = 1200) => {
  const base = `/images/optimized/${name}`;
  const small = `${base}-640.webp`;

  if (maxWidth <= 640) {
    return { src: small, srcset: `${small} 640w` };
  }

  const large = `${base}-1200.webp`;
  return {
    src: large,
    srcset: `${small} 640w, ${large} 1200w`,
  };
};

export const contactIconImage = (name: string) =>
  `/images/optimized/icon-${name}-gold-96.webp`;
