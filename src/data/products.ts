export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
}

export interface CategoryCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const categories: CategoryCard[] = [
  {
    id: 'feminino',
    title: 'Feminino',
    description: 'Peças que traduzem elegância',
    image: 'https://images.pexels.com/photos/27383837/pexels-photo-27383837.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 'masculino',
    title: 'Masculino',
    description: 'Estilo para todos os momentos',
    image: 'https://images.pexels.com/photos/29226094/pexels-photo-29226094.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 'novidades',
    title: 'Novidades',
    description: 'Os lançamentos da estação',
    image: 'https://images.pexels.com/photos/26100317/pexels-photo-26100317.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 'ofertas',
    title: 'Ofertas',
    description: 'Seleção especial com até 30% off',
    image: 'https://images.pexels.com/photos/4210864/pexels-photo-4210864.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Camiseta Essential',
    category: 'Básicos',
    price: 89.9,
    image: 'https://images.pexels.com/photos/37704848/pexels-photo-37704848.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Novo',
  },
  {
    id: 2,
    name: 'Calça Wide Leg',
    category: 'Feminino',
    price: 159.9,
    oldPrice: 199.9,
    image: 'https://images.pexels.com/photos/4210864/pexels-photo-4210864.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: '-20%',
  },
  {
    id: 3,
    name: 'Jaqueta Urban',
    category: 'Outerwear',
    price: 249.9,
    image: 'https://images.pexels.com/photos/16428734/pexels-photo-16428734.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    name: 'Vestido Elegance',
    category: 'Feminino',
    price: 179.9,
    oldPrice: 229.9,
    image: 'https://images.pexels.com/photos/6154323/pexels-photo-6154323.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: '-22%',
  },
  {
    id: 5,
    name: 'Blazer Premium',
    category: 'Feminino',
    price: 299.9,
    image: 'https://images.pexels.com/photos/27383837/pexels-photo-27383837.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Novo',
  },
  {
    id: 6,
    name: 'Camisa Linho',
    category: 'Masculino',
    price: 139.9,
    image: 'https://images.pexels.com/photos/29226094/pexels-photo-29226094.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 7,
    name: 'T-Shirt Mint',
    category: 'Básicos',
    price: 79.9,
    oldPrice: 99.9,
    image: 'https://images.pexels.com/photos/34156905/pexels-photo-34156905.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: '-20%',
  },
  {
    id: 8,
    name: 'Jaqueta Couro',
    category: 'Outerwear',
    price: 399.9,
    image: 'https://images.pexels.com/photos/7679798/pexels-photo-7679798.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const instagramImages: string[] = [
  'https://images.pexels.com/photos/18375179/pexels-photo-18375179.jpeg?auto=compress&cs=tinysrgb&w=500',
  'https://images.pexels.com/photos/11890856/pexels-photo-11890856.jpeg?auto=compress&cs=tinysrgb&w=500',
  'https://images.pexels.com/photos/11232181/pexels-photo-11232181.jpeg?auto=compress&cs=tinysrgb&w=500',
  'https://images.pexels.com/photos/7845447/pexels-photo-7845447.jpeg?auto=compress&cs=tinysrgb&w=500',
  'https://images.pexels.com/photos/29627094/pexels-photo-29627094.jpeg?auto=compress&cs=tinysrgb&w=500',
  'https://images.pexels.com/photos/28686633/pexels-photo-28686633.jpeg?auto=compress&cs=tinysrgb&w=500',
];

export const formatPrice = (value: number): string =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
