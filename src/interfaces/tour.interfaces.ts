export interface ITour {
  id: number;
  uId: string;
  name: string;
  summary: string;
  description: string;
  difficulty: string;
  price: number;
  duration: number;
  imageCover: string;
  images: string[];
  createdAt: Date;
  discountPrice: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  maxGroupSize: number;
  startDates: string[];
  guides: string[];
  reviews: IReview;
}

export interface IReview {
  id: string;
  review: string;
  rating: number;
  createdAt: string;
  tourId: number;
  userId: string;
}
