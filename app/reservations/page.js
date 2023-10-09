
import EmptyState from "@/components/EmptyState";
import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "./ReservationsClient";

import TripsClient from "../trips/TripsClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
       
        <EmptyState
          title="Unauthorized"
          subtitle="Please login"
        />
      
    )
  }

  const reservations = await getReservations(currentUser.id);

  if (reservations.length === 0) {
    return (
      
        <EmptyState
          title="No reservations found"
          subtitle="Looks like you have no reservations on your properties."
        />
      
    );
  }

  return (
    
      <TripsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    
  );
}
 
export default ReservationsPage;