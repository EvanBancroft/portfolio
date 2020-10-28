export const MEDIA_QUERIES = {
  PHONE_SMALL: 360, // ex. iPhone 5/SE
  PHONE: 0, // phone default
  TABLET: 600, // ex. iPad portrait
  TABLET_LARGE: 1024, // ex. iPad landscape
  DESKTOP: 1280, // 720p
  DESKTOP_LARGE: 1920, // 1080p
  DESKTOP_XL: 2560, // 1440p
  DESKTOP_XXL: 3840, // 4k
}

export const MQ = {
  PHONE_SMALL: `@media (max-width: ${MEDIA_QUERIES.PHONE_SMALL}px)`,
  PHONE: `@media (min-width: ${MEDIA_QUERIES.PHONE})`,
  TABLET: `@media (min-width: ${MEDIA_QUERIES.TABLET}px)`,
  TABLET_LARGE: `@media (min-width: ${MEDIA_QUERIES.TABLET_LARGE}px)`,
  DESKTOP: `@media (min-width: ${MEDIA_QUERIES.DESKTOP}px)`,
  DESKTOP_LARGE: `@media (min-width: ${MEDIA_QUERIES.DESKTOP_LARGE}px)`,
  DESKTOP_XL: `@media (min-width: ${MEDIA_QUERIES.DESKTOP_XL}px)`,
  DESKTOP_XXL: `@media (min-width: ${MEDIA_QUERIES.DESKTOP_XXL}px)`,
}
