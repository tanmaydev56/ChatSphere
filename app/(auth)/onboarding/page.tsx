// import { TypewriterEffectSmoothDemo } from "@/components/typewriterdemo";
// import { FeaturesSectionDemo } from "@/components/ui/BentoGrid";
import { currentUser } from "@clerk/nextjs/server";
// import Link from 'next/link'; 
// import { currentUser } from "@clerk/nextjs";
// import { redirect } from "next/navigation";

// import { fetchUser } from "@/lib/actions/user.actions";
import AccountProfile from "@/components/forms/AccountProfile";


async function Page() {
    const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo ={
    
  };
  // if (userInfo?.onboarded) redirect("/");

  const userData = {
  id:user?.id,
  objectId:userInfo?._id,
  name:userInfo?.name || user?.firstName || "",
  username:userInfo?.username || user?.username || "",
  bio:userInfo?.bio || "",
  image:userInfo?.image || user?.imageUrl || "",

  
    
  };

    return (
    //     <section className="flex flex-col items-center w-full min-h-screen relative">
    //         {/* Header with logo and user image */}
    //         <div className="absolute top-4 left-4 flex items-center gap-2">
    //             {/* Logo */}
    //             <img 
    //                 src="/assets/logo.webp" 
    //                 alt="ChatSphere Logo" 
    //                 className="w-14 h-14 rounded-full border border-gray-300 shadow" 
    //             />
    //             {/* ChatSphere Text */}
    //             <h1 className="text-[22px] font-bold">ChatSphere</h1>
    //         </div>

    //         {/* User Profile Image at the top-right corner */}
    //         <div className="absolute top-4 right-4">
    //             <img
    //                 src={user?.imageUrl || "/assets/user.svg"} 
    //                 alt="User Profile"
    //                 className="w-[3.3rem] h-[3.3rem] rounded-full border border-gray-300 shadow"
    //             />
    //         </div>

    //         {/* Main content */}
    //         <h1 className="head-text flex flex-col items-center text-center my-6">
    //             {/* On larger screens, display the Typewriter effect */}
    //             <div className="hidden lg:flex flex-col items-center gap-4">
    //                 <TypewriterEffectSmoothDemo />
    //             </div>

    //             {/* On smaller screens, display a simple greeting */}
    //             <div className="lg:hidden lg:py-0 py-24">
    //                 <span className="text-2xl font-semibold">
    //                     Hello, <span className="text-primary">{user?.username}</span>!
    //                 </span>
    //             </div>
    //         </h1>

    //         <div className="w-full h-full flex flex-col flex-center">
    //             <FeaturesSectionDemo />
    //         </div>

    //         {/* Use Link component to navigate */}
    //         <Link href="/" passHref>
    //             <button
    //                 className="px-[250px] py-4 mb-[100px] mt-10 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg"
    //             >
    //                 Get Started!
    //             </button>
    //         </Link>
    //         

    //     </section>
    <section className='mt-9 bg-dark-2 p-10'>
       <AccountProfile user={userData} btnTitle='Continue' />
      </section>
    );
}

export default Page;
