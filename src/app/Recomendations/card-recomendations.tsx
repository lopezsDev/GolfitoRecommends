import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/app/Componentes/badge';

interface CardRecomendationsProps {
  href: string;
  image: string;
  category: string;
  title: string;
  rating: number;
  metadata: string;
}

const CardRecomendations = ({
  href,
  image,
  category,
  title,
  rating,
  metadata,
}: CardRecomendationsProps) => {
  return (
    <Link href={href} className='group'>
      <div className='relative w-full h-80 mb-5 overflow-hidden rounded-xl'>
        <Image
          src={image}
          alt='Image'
          fill
          className='object-cover rounded-xl group-hover:scale-110 transition-all duration-300'
        />
      </div>
      
      <Badge label={category} />
      <h3 className='text-xl text-white group-hover:text-primary transition-colors duration-300'>
        {title}
      </h3>
      <p className='text-sm text-gray-400'>Calificación: {rating} / 5</p>
      <p className='text-sm text-gray-400'>{metadata}</p>
    </Link>
    
  );
};

export default CardRecomendations;
