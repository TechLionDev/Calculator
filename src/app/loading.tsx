import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = async () => {
  return (
    <>
      <Header />
      <div className='flex items-center justify-center'>
        <div className='m-4 w-fit'>
          <div className='p-4 flex flex-col gap-4'>
            <Skeleton className='flex h-10 w-full rounded-md px-3 py-2 text-sm text-right p-6 font-bold' />
            <div className='flex flex-col gap-4'>
              <div className='flex gap-4'>
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
              </div>
              <div className='flex gap-4'>
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
              </div>
              <div className='flex gap-4'>
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
              </div>
              <div className='flex gap-4'>
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
              </div>
              <div className='flex gap-4'>
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
              </div>
              <div className='flex gap-4'>
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
                <Skeleton className='h-10 px-4 py-2 flex-auto size-10 p-6' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
