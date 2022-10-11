---
pageClass: home-page

name: Xinyi Zhao
profile: /profile2.JPG

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/Hide-A-Pumpkin
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com/in/%E5%BF%83%E6%80%A1-%E8%B5%B5-572ba8228
  - title: instagram
    icon: "/icons/instagram-mono.svg"
    link: https://www.instagram.com/mikasa_jam/

cv: /projects/cv_xinyi_9.17.pdf
bio: Undergraduate Student at Fudan University
email: zxy1337445805 (at) gmail (dot) com
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I attended [Fudan University](https://www.fudan.edu.cn/) in Shanghai to study data science.

I'm now in FDUVIS lab supervised by Siming Chen and other professors. My research area includes data visualization and intelligent interaction.


## Education & Experiences

- **School of Data Science, Fudan University** <br/>
Sept 2019 - June 2023


## Projects

[→ Full list](/projects/)

<ProjectCard image="/projects/eqlens.jpg" hideBorder=true>
**Human Computer Interaction Research Project**

 Advisor: Meng Xia, Postdoctoral Faculty, Human-Computer Interaction Institute, CMU

 We hope to explore  teacher behaviors to help improve intelligent tutor systems. We built an interaction interface presenting students’ problem-solving processes, including hint-asking behaviors to help teachers understand student process of solving problems.
 Then we conducted a within-subject user study with math teachers to derive data insights for improving intelligent tutors.
 Paper submitted and under censoring for CHI 2023 as the second author.

<!-- [pdf] -->

</ProjectCard>

<ProjectCard image="/projects/ctat.jpg" hideBorder=true>
**Human Computer Interaction Intern**

  Advisor: Vincent Aleven, Professor, Human-Computer Interaction Institute, CMU

 I joined cmu ctat group as summer intern in 2022 summer recommended by my undergraduate tutor. During the job I helped build a web-based intelligent tutoring tool which provides step-wise, personalized and immediate feedback based on a cognitive model for students.
  Specially, I built an editor with formula matcher for student input and bound skills with each interaction

<!-- [pdf] -->

</ProjectCard>

<ProjectCard image="/projects/FFDAugmentor.jpg" hideBorder=true>
**Deep Learning Research Project**

  Advisor: Yanwei Fu, Professor, School of Data Science, Fudan University

 This was the final project of Deep Learning and Neural Network(DATA130011.01, School of Data Science, Fudan University.). In the project I built a neural network framework for few-shot oracle character recognition problems with my teammate.
 We applied non-rigid transformation as a data augmentation method for our training and reached a significant increase of accuracy through comprehensive experiments.
 We extended the augmentation method to sketch recognition problems and contributed our work to ACCV2022. Paper accepted for ACCV2022 as the lead author.

<!-- [pdf] -->

</ProjectCard>

<ProjectCard image="/projects/onelabeler.jpg" hideBorder=true>
**Data Visualization Research Project**

  Advisor: Siming Chen, Professor, School of Data Science, Fudan University

 The first formal research experience in my school. I independently researched on 3D point cloud segmentation, I built a system for interactive point cloud labeling combined with default labeling using deep learning method. The system supports annotating autonomous driving data with over 100k points and explores user interaction behavior. I proposed an innovative interactive labeling method using SVM, density-based clustering and Fitts's law. The annotation time was greatly saved under the new method.

<!-- [pdf] -->

</ProjectCard>


## Awards & Honors

### Contests
- Fudan University Undergraduate Scholarships [2020, 2021, 2022]
- Nomination Award in China VIS Challenge 2022

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
