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
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Why do we use it? It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it has a
      </a>
    </>
  );
};

export default Gallery;
