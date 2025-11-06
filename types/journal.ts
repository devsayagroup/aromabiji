export interface JournalSection {
  heading: string
  body: string
}

export interface Journal {
  id: number
  title: string
  slug: string
  author: string
  date: string
  image: string
  metaDescription: string
  keywords: string[]
  excerpt: string
  content: {
    sections: JournalSection[]
  }
}
