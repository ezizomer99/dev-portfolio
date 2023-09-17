import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Skills from '../components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Eziz | Portfolio</title>
      </Head>
    <Main />
    <About />
    <Skills />
    <Experience />
    <Education />
    </div>
  )
}