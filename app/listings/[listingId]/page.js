
import getCurrentUser from "../../actions/getCurrentUser";
import getListingById from "../../actions/getListingById";
import getReservations from "../../actions/getReservations";
import EmptyState from "../../components/EmptyState";

import ListingClient from "./ListingClient";


const ListingPage = async ({ params }) => {

  const listing =  await getListingById(params);
  const reservations =  await getReservations(params);
  const currentUser =  await getCurrentUser();



  if (!listing) {
    return (
  
        <EmptyState />
     
    );
  }

  return (
   
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    
  );
}
 
export default ListingPage;