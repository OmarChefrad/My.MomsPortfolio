import { GetServerSideProps } from "next"
import Head from "next/head"
import Savoir from "../components/Savoir"
import Header from "../components/Header"
import Mom from "../components/Mom"
import Experience from "../components/Experience"
import Formation from "../components/Formation"
import Project from "../components/Project"
import ContactMe from "../components/ContactMe"
import { Experiences, Formations, Personal, Projects, Social } from "../typings"
import { fetchExperiences } from "../utils/fetchExperiences"
import { fetchFormations } from "../utils/fetchFormations"
import { fetchPersonal } from "../utils/fetchPersonal"
import { fetchProjects } from "../utils/fetchProjects"
import { fetchSocial } from "../utils/fetchSocial"

type Props = {
  personal: Personal[]
  experiences: Experiences[]
  formations: Formations[]
  projects: Projects[]
  social: Social[]
}

const Home = ({
  personal,
  experiences,
  formations,
  projects,
  social,
}: Props) => {
  return (
    <div className="bg-gray-900 text-gray-300 h-screen snap-y snap-proximity overflow-scroll y-0 font-sans overflow-x-hidden z-0  scrollbar-track-gray-900 scrollbar-thin scrollbar-thumb-yellow-600 ">
      <Head>
        <title>Aziza Mouti</title>
        <meta
          name="description"
          content="Code By Umar"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main>
        <Header social={social} />
        <section
          id="Home"
          className="snap-start">
          <Mom />
        </section>
        <section
          id="Savoir"
          className="snap-center">
          <Savoir personal={personal} />
        </section>
        <section
          id="Experience"
          className="snap-center">
          <Experience experiences={experiences} />
        </section>
        <section
          id="Formation"
          className="snap-center">
          <Formation formations={formations} />
        </section>
        <section
          id="Project"
          className="snap-center">
          <Project projects={projects} />
        </section>
        <section
          id="Contact"
          className="snap-center">
          <ContactMe />
        </section>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const personal: Personal[] = await fetchPersonal()
  const experiences: Experiences[] = await fetchExperiences()
  const formations: Formations[] = await fetchFormations()
  const projects: Projects[] = await fetchProjects()
  const social: Social[] = await fetchSocial()

  return {
    props: {
      personal,
      experiences,
      formations,
      projects,
      social,
    },
  }
}
