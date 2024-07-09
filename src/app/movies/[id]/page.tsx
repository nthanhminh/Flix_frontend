'use client'
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';

const OrderMovieTicket = dynamic(() => import('@/components/OrderPage/OrderMovieTicket'), { ssr: false });

const OrderMovieTicketView = () => {
  const { id } = useParams();
  const idNum = parseInt(id.toString(), 10);

  return <OrderMovieTicket id={idNum} />;
};

export default OrderMovieTicketView;
