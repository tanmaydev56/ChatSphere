import Link from "next/link";
import Image from "next/image";

interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  type?: string;
}

function ProfileHeader({
  accountId,
  authUserId,
  name,
  username,
  imgUrl,
  bio,
  type,
}: Props) {
  return (
    <div className='flex w-full flex-col justify-start'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='relative h-20 w-20 object-cover'>
            <Image
              src={imgUrl}
              alt='logo'
              width={100}
              height={100}
              
              className='rounded-full object-cover shadow-2xl'
            />
          </div>

          <div className='flex-1'>
            <h2 className='text-left text-heading3-bold text-dark-1'>
              {name}
            </h2>
            <p className='text-base-medium text-gray-1'>@{username}</p>
          </div>
        </div>
        {accountId === authUserId && type !== "Community" && (
          <Link href='/newprofile/edit'>
            <div className='flex cursor-pointer gap-3 rounded-lg bg-dark-3 px-4 py-2'>
              <Image
                src='/assets/edit.svg'
                alt='logout'
                width={16}
                height={16}
              />

              <p className='text-light-1 max-sm:hidden'>Edit</p>
            </div>
          </Link>
        )}
      </div>

      <p className='mt-6 max-w-lg text-base-regular font-semibold text-dark-1'>{bio}</p>

      <div className='mt-12 h-0.5 w-full bg-dark-3' />
    </div>
  );
}

export default ProfileHeader;

// const page=({parmas:params{id:string}})=>