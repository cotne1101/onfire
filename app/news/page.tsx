type pageProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function page({ params, searchParams }: pageProps) {
  return (
    <>
      <img src="/images/news.jpg" className="w-full" alt="" />
    </>
  );
}
