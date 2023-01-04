import type { NextPage } from 'next';

const Gallery: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Gallery</h1>
      <div className="bg-lightmode-component dark:bg-darkmode-component">
        testing 123
      </div>
      <a>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
      </a>
      <br />
      <a className="font-mono">
        mono space font code code hello world i am writing code console.log
      </a>
    </>
  );
};

export default Gallery;
