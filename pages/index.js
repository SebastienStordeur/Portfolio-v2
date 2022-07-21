import { Fragment } from 'react'
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import HeroSection from '../components/Hero/HeroSection'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { ProjectSection, AboutSection } from '../components';


const HomePage = (props) => {
  console.log(props)
  return (
    <Fragment>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Description temporaire" />
      </Head>
      <Header />
          <main className="bg-background max-w-[1240px] m-auto">
        <HeroSection />
        <AboutSection />
        <ProjectSection projects={props.projects}/>
      </main>
      <Footer />
    </Fragment>
  )
}

export default HomePage


export async function getStaticProps() {

  const client = await MongoClient.connect('mongodb+srv://sebastien:@cluster0.oos0jrw.mongodb.net/?retryWrites=true&w=majority');
  const db = client.db();
  const projectsCollection = db.collection('projects');
  const projects = await projectsCollection.find().toArray();
  console.log(projects)
  client.close();


  return {
    props: {
        projects: projects.map(project => ({
          title: project.data.title,
          description: project.data.description,
          github: project.data.github,
          live: project.data.live,
          technologies: project.data.technologies,
          id: project._id.toString()
        }))
    },
    revalidate: 1,
  };
}