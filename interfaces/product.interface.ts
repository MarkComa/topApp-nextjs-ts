export interface ProductCharacteristics {
    value: string;
    name: string;
}
export interface ReviewModal {
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    createdAt: Date;

}
export interface ProductModel {
    length: any;
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    link: string;
    price: number;
    credit: number;
    oldPrice: number;
    description: string;
    characteristics: ProductCharacteristics[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    image: string;
    initialRating: number;
    reviews: ReviewModal[];
    reviewCount: number;
    reviewAvg?: number;
    advantages?: string;
    disadvantages?: string;

}