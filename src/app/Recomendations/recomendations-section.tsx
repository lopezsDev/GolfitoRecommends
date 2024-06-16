'use client';

import { useRouter } from 'next/navigation';

import Container from '@/app/Componentes/container';
import Title from '@/app/Componentes/title';
import ListRecomendations from '@/app/Recomendations/list-Recomendations';

const RecomendationsSection = () => {
  const router = useRouter();

  return (
    <section id='recomendations' className='border-b border-gray-500/20 py-5'>
      <Container>
        <Title title='Recomendaciones: ' />
        <ListRecomendations />
      </Container>
    </section>
  );
};

export default RecomendationsSection;
