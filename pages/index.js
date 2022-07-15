import { Fragment } from 'react'
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import HeroSection from '../components/Hero/HeroSection'
import ProjectSection from '../components/ProjectSection'

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title></title>
        <meta name="description" content="" />
      </Head>
          <main className="bg-background">
        <HeroSection />
        {/* <ProjectSection/> */}
      </main>
    </Fragment>
  )
}

export default HomePage



export async function getStaticProps() {

  const client = await MongoClient.connect('mongodb+srv://sebastien:<password>@cluster0.oos0jrw.mongodb.net/?retryWrites=true&w=majority');
  const db = client.db();
  const projectsCollection = db.collection('projects');
  const projects = await projectsCollection.find().toArray();
  client.close();


  return {
    props: {
      projects: { //projects.map(project => ({}))

      }
    }
  }

}