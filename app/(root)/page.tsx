"use server";
import ThreadCard from "@/components/cards/ThreadCard";
import { fetchPosts } from "@/lib/actions/thread.actions";
import { UserButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const result = await fetchPosts(1, 30);

const user = await currentUser();
  console.log(result);
  return (
    <main className="flex flex-col">
      <h1 className="head-text">Chats</h1>
      
      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">No Chats found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <ThreadCard
                key={post._id}
                id = {post._id}
                currentUserId={user?.id || ""}
                parentId={post.parentId}
                content ={post.text}
                author={post.author}
                community={post.community}
                createAt={post.createdAt}
                comments={post.children}
                
               
              />
               

              
            ))}
          </>
        )}
        
      </section>

      
      </main>
      );
  
}