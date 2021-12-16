export interface Feedback {
  sender: {
    name: string;
    role: string;
    img: string
    date?: string;
    linkedIn: string
  },
  comment: string
}
