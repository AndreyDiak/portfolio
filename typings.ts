interface SanityBody {
  _createdAt: string
  _updatedAt: string
  _id: string
  _rev: string
}

interface Image {
  type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface Social extends SanityBody {
  _type: 'social'
  title: string
  url: string
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo'
  address: string
  backgroundInfo: string
  email: string
  heroImage: Image
  name: string
  phoneNumber: string
  profilePic: Image
  role: string
}

export interface Experience extends SanityBody {
  _type: 'experience'
  company: string
  dateStarted: string
  dateEnded: string
  isCurrentlyWorkingHere: boolean
  jobTitle: string
  points: string[]
  companyImage?: Image
  technologies: Skill[]
}

export interface Skill extends SanityBody {
  _type: 'skill'
  image: Image
  progress: number
  Title: string
}

export interface Project extends SanityBody {
  _type: 'project',
  image: Image
  linkToBuild: string
  summary: string
  technologies: Skill[]
  title: string
}