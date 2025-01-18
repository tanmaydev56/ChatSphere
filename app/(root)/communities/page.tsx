import CommunityCard from "@/components/cards/CommunityCard";
import Pagination from "@/components/shared/Pagination";
import Searchbar from "@/components/shared/SearchBar";
import { fetchCommunities } from "@/lib/actions/community.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  // Await the dynamic properties of searchParams
  const searchString = searchParams.q || "";
  const pageNumber = searchParams.page ? +searchParams.page : 1;

  const result = await fetchCommunities({
    searchString,
    pageNumber,
    pageSize: 25,
  });

  return (
    <>
      <h1 className="head-text">Communities</h1>

      <div className="mt-5">
        <Searchbar routeType="communities" />
      </div>

      <section className="mt-9 flex flex-wrap gap-4">
        {result.communities.length === 0 ? (
          <p className="no-result">No Result</p>
        ) : (
          <>
            {result.communities.map((community) => (
              <CommunityCard
                key={community.id}
                id={community.id}
                name={community.name}
                username={community.username}
                imgUrl={community.image}
                bio={community.bio}
                members={community.members}
              />
            ))}
          </>
        )}
      </section>

      <Pagination
        path="communities"
        pageNumber={pageNumber}
        isNext={result.isNext}
      />
    </>
  );
}

export default Page;

// Webhooks are a way for applications to send real-time notifications or data to other systems whenever specific events occur. They allow different systems to communicate with each other by sending HTTP POST requests to a predefined URL (the "webhook endpoint") when an event is triggered.

// How Webhooks Work (Based on the Image)
// Event Triggering:

// An event occurs in the source system (e.g., a new user signs up, a payment is processed, or a file is uploaded).
// This triggers the webhook, signaling that the source system should notify the target system about the event.
// we wiill create webhooks communities show krne ke liye joh hum clek me  banayenge