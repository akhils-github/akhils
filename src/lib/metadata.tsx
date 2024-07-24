import { Metadata } from "next"

export function constructMetadata({
    title = "Chris Alonzo",
    description = "Sales Representative Turned Code Maestro",
    image = "/thumbnail.png",
    icons = "/svg/logo.svg",
    noIndex = false
  }: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
  } = {}): Metadata {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [image]
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
        creator: "@chrislonzo"
      },
      icons,
      metadataBase: new URL(''),
      ...(noIndex && {
        robots: {
          index: false,
          follow: false
        }
      })
    }
  }
  