import CalculatorShell from "@/components/CalculatorShell";
import Header from "@/components/Header";

const Page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <Header />
      <div className='flex items-center justify-center'>
        <CalculatorShell />
      </div>
      <p className='text-center text-accent italic text-sm'>Note: Rounds To 10 Places</p>
    </>
  );
};

export default Page;
