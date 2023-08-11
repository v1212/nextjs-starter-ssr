export async function getServerSideProps() {
  var data = process.env.testsetting;
  if(!data)
  {
    data = null
  }
  return { props: { data } };
}

export default function Test({ data }: { data: any }) {

  return (
        "<h1 className={styles.title}>" +
          "Welcome to <a href='https://nextjs.org'>Next.js! The setting data is " + data +
          " </a></h1>"
  )
}
