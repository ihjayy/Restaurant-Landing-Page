

export interface NavLink{
    label: string;
    href: string;
}

export interface Dish {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
}

export interface Feature {
    title: string;
    description: string;
    icon: string;
}

export interface Testimonial {
    id: number;
    name: string;
    review: string;
    avatar: string;
    rating: number
}

export interface ContactDetail {
    label: string;
    value: string;
}