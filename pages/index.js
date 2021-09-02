import Head from 'next/head'
import Header  from '../components/header'
import Adsmain from '../components/adsmain'
import Goal    from '../components/goal'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Реклама ВКонтакте</title>
        <link rel="stylesheet" href="/css/main.css"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js"></script>
        <script src="/js/swiper.js"></script>
        <script src="/js/slider.js"></script>
      </Head>
      <main>
        <Header/>
        <Adsmain/>
        <Goal/>
      </main>
    </div>
  )
}
