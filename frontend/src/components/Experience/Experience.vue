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
          description: ` I recently became a member of the Analytics, Informatics, and
            Management Systems Team.`
        },
        {
          company: 'Energeia USA',
          title: 'Software Engineer',
          length: '2018 - 2020',
          location: 'Davis, CA',
          src: 'energeia.png',
          link: 'http://energeia-usa.com/',
          description: `At Energeia, I was a lead software engineer for uSim, an advanced
            Python energy simulation software based on machine learning. I also
            performed data analytics on modeling data sets to develop
            dashboards, which aided the work of the consulting team. It was an
            awesome being apart a face-paced start-up environment performing
            cutting-edge research for the energy industry.`
        },
        {
          company: 'Intel Corporation',
          title: 'Technical Marketing Engineer Intern',
          length: '2017 - 2018',
          location: 'Folsom, CA',
          src: 'intel.svg',
          link: 'https://intel.com',
          description: `Interning at Intel was an amazing experience where I flexed my
            engineering muscles within the business world. I aided internal
            research on market segments by implenting Python scripts to automate
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
          description: `UOP's computer science program helped me build the fundamentals
            in becoming an engineer. Faculty push students to seek real world
            experience through co-op, which I was forunate enough to partake in
            with Intel. I was deeply engaged in community service through Alpha
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
