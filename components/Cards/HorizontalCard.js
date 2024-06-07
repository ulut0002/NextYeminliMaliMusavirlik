import Image from "next/image";

export default function HorizontalCard({ image, title, description }) {
  return (
    <div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
      <div className='overflow-hidden md:w-48 md:h-auto'>
        <Image
          src={image.src}
          alt='image'
          width={300}
          height={200}
          className='object-cover w-full h-96 transition-transform duration-300 transform hover:scale-105 md:rounded-none md:rounded-s-lg'
        />
      </div>
      <div className='flex flex-col justify-between p-4 leading-normal'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}{" "}
        </h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {description}
        </p>
      </div>
    </div>
  );
}
