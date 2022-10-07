interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface Image {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
}

export interface Personal extends SanityBody {
  _type: "personal"
  name: string
  role: string
  image: Image
  backroundInformation: string
  profilePic: Image
  phoneNumber: string
  email: string
}

export interface Experiences extends SanityBody {
  _type: "experiences"
  jobTitle: string
  institution: string
  dateDeTravail: date
  dateDarretTravail: date
  description: string
  image: Image
}

export interface Formations extends SanityBody {
  _type: "formations"
  title: string
  rating: number
  image: Image
}

export interface Projects extends SanityBody {
  _type: "projects"
  title: string
  description: string
  image: Image
}

export interface Social extends SanityBody {
  _type: "social"
  title: string
  url: url
}
