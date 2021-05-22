<template>
  <div id="experience">
    <template v-for="item in items">
      <div
        :key="item.company"
        class="columns is-centered"
        data-aos="fade-up"
        data-aos-delay="75"
      >
        <div class="column is-three-quarters">
          <experience-card
            :company="item.company"
            :title="item.title"
            :length="item.length"
            :location="item.location"
            :imgSrc="item.src"
            :link="item.link"
            :description="item.description"
          ></experience-card>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import ExperienceCard from './ExperienceCard.vue';

export default {
  name: 'Experience',
  props: {},
  data() {
    return {
      items: [
        {
          company: 'Lawrence Livermore National Lab',
          title: 'Software Developer',
          length: '2020 - Present',
          location: 'Livermore, CA',
          link: 'http://llnl.gov/',
          src: 'llnl.jpg',
          description: `I recently joined LLNL on the Analytics, Informatics,
          and Management Systems (AIMS) group. I am leading development of
          MetaGrid, the next-gen Earth System Grid Federation (ESGF) climate modeling
          search portal using React, TypeScript, Django REST Framework,
          PostgreSQL, and Docker Compose.`
        },
        {
          company: 'Energeia USA',
          title: 'Software Engineer',
          length: '2018 - 2020',
          location: 'Davis, CA',
          src: 'energeia.png',
          link: 'http://energeia-usa.com/',
          description: `I was the lead software engineer for uSim, Energeia's
            SaaS Python energy simulation platform. I was tasked with refactoring
            and optimizing uSim's codebase, while also integrating new features. I also
            performed data analytics with Pandas and developed visualization dashboards
            using Plotly, which aided the work of the consulting team. It was a
            rewarding experience developing cutting edge tools for the energy
            industry.`
        },
        {
          company: 'Intel Corporation',
          title: 'Technical Marketing Engineer Intern',
          length: '2017 - 2018',
          location: 'Folsom, CA',
          src: 'intel.svg',
          link: 'https://intel.com',
          description: `At Intel, I was able to apply my engineering skills directly in
           the context of marketing and business. I aided internal
            research on market segments by implementing Python scripts to automate
            the flow of data collection. My research lead to key decisions in
            product roadmap planning for Embedded SSDs. In the process, I
            learned foundational skills such managing projects and understanding
            the role of stakeholders in within those projects.`
        },
        {
          company: 'University of the Pacific',
          title: 'Bachelor of Science, Computer Science',
          length: '2014 - 2018',
          location: 'Stockton, CA',
          src: 'uop_tower.jpg',
          link: 'https://pacific.edu',
          description: `UOP's computer science program built the groundwork
           for me to become a software engineer. The co-op internship curriculum pushes students
            to seek professional working experience while earning course units.
            Through the program, I was fortunate enough to intern at Intel.
            I was deeply engaged in community service as a member of Alpha
            Phi Omega, an international service organization. My experience at
            UOP helped shape critical life skills, including empathy,
            understanding, communication, and leadership.`
        }
      ]
    };
  },
  components: { ExperienceCard }
};
</script>

<style></style>
