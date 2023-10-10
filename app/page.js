import Container from './components/Container'
import EmptyState from './components/EmptyState'
import getListings from './actions/getListings'
import ListingCard from './components/listings/ListingCard'
import getCurrentUser from "./actions/getCurrentUser";

export const dynamic = "force-dynamic"

const Home = async ({ searchParams }) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();


  if (listings.length === 0) {
    return (
        <EmptyState showReset />
    );
  }


  return (
    <Container>
          <div className=" pt-64 grid grid-cols-2  sm:grid-cols-2 xs:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {listings.map((listing) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
          </div>
    </Container>
  )
}

export default Home;
