import RecomendationsPage from '@/app/Recomendations/RecomendationsPage';


const ListCardRecomendations = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-10 lg:grid-cols-1 gap-10 mb-10'>
      <RecomendationsPage />
      <style jsx>{`
        .grid {
          margin-left: 10px; 
          margin-right: 10px; 
        }
      `}</style>
    </div>
  );
};

export default ListCardRecomendations;
