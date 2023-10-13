---
pageClass: home-page

name: Xinyi Zhao
profile: /headshot.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/Hide-A-Pumpkin
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com/in/xinyizhao3274
  - title: instagram
    icon: "/icons/instagram-mono.svg"
    link: https://www.instagram.com/mikasa_jam/

cv: /projects/resume_sde.pdf
bio: Master of Data Science at Columbia University
email: xz3274 (at) columbia (dot) edu
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I am an in-coming master student majoring Data Science at [Columbia University](https://datascience.columbia.edu). 
I attended [Fudan University](https://www.fudan.edu.cn/) in Shanghai studying data science and big data technology.

I am extremely passionate about the field of data science.I have more than 3 years of experience in data analysis and in the field of machine learning and deep learning. My teammates and colleagues consider me as a motivating and proactive person throughout my journey at Columbia University and Fudan University. I am looking for an opportunity in the above fields and can be reached at xz3274@columbia.edu.



## Education & Experiences

- **Data Science Institute, Columbia University**<br/>
September 2023 - December 2024
- **School of Data Science, Fudan University** <br/>
September 2019 - June 2023


## Projects

[→ Full list](/projects/)

<ProjectCard image="/projects/fastspeech.png" hideBorder=true>
**Machine Learning Engineering Intern**

 Advisor: Minchuan Chen, Senior Machine Learning Engineer, Pingan Technology

During the internship, I actively participated in tasks related to speech synthesis. I did extensive research and worked with advanced TTS models like PITS, FastSpeech2, HifiGAN, FastPitch, VITS, Tacotron, and LPCNet. My focus was on improving voice cloning quality, supporting multiple languages, and accommodating multiple speakers. I refined models, fine-tuned synthesis models, and conducted audio quality checks. Achievements include implementing VITS-based speech cloning, Tacotron+lpcnet, and FastSpeech2+HiFiGAN and improved Mean Opinion Score by over 0.2. I plan to enhance audio evaluation and improve naturalness in synthesized speech in the future work.



</ProjectCard>


<ProjectCard image="/projects/eqlens.jpg" hideBorder=true to="/article/meng/">
[**Data Visualization Research Project**](/article/meng/)

 Advisor: Meng Xia, Postdoctoral Faculty, Human-Computer Interaction Institute, CMU

 We hope to explore  teacher behaviors to help improve intelligent tutor systems. We built an interaction interface presenting students’ problem-solving processes, including hint-asking behaviors to help teachers understand student process of solving problems.
 Then we conducted a within-subject user study with math teachers to derive data insights for improving intelligent tutors.
 Paper submitted and under censoring for CHI 2023 as the second author.

<!-- [pdf] -->

</ProjectCard>

<ProjectCard image="/projects/ctat.jpg" hideBorder=true to="/article/vc/">
[**Human Computer Interaction Intern**](/article/vc/)

  Advisor: Vincent Aleven, Professor, Human-Computer Interaction Institute, CMU

 I joined cmu ctat group as summer intern in 2022 summer recommended by my undergraduate tutor. During the job I helped build a web-based intelligent tutoring tool which provides step-wise, personalized and immediate feedback based on a cognitive model for students.
  Specially, I built an editor with formula matcher for student input and bound skills with each interaction

<!-- [pdf] -->

</ProjectCard>

<ProjectCard image="/projects/FFDAugmentor.jpg" hideBorder=true to="/article/nn/">
[**Deep Learning Research Project**](/article/nn/)

  Advisor: Yanwei Fu, Professor, School of Data Science, Fudan University

 This was the final project of Deep Learning and Neural Network(DATA130011.01, Fudan University). I built a neural network framework for few-shot oracle character recognition problems with my teammate.
 We applied non-rigid transformation as a data augmentation method for our training and reached a significant increase of accuracy through comprehensive experiments.
 We extended the augmentation method to sketch recognition problems and contributed our work to ACCV2022. 
 Paper accepted for ACCV2022 as the lead author.

[link](https://openaccess.thecvf.com/content/ACCV2022/html/Zhao_FFD_Augmentor_Towards_Few-Shot_Oracle_Character_Recognition_from_Scratch_ACCV_2022_paper.html)
[code](https://github.com/Hide-A-Pumpkin/FFDAugmentor)

</ProjectCard>

<ProjectCard image="/projects/onelabeler.jpg" hideBorder=true to="/article/one/">
[**Data Visualization Research Project**](/article/one/)

  Advisor: Siming Chen, Professor, School of Data Science, Fudan University

 The first formal research experience in my school. I independently researched on 3D point cloud segmentation, I built a system for interactive point cloud labeling combined with default labeling using deep learning method. The system supports annotating autonomous driving data with over 100k points and explores user interaction behavior. I proposed an innovative interactive labeling method using SVM, density-based clustering and Fitts's law. The annotation time was greatly saved under the new method.


</ProjectCard>

## Services
### Review:

IEEE VIS(2023), Visual Informatics(2023), China Vis(2022), IEEE PacificVis(2022)

## Awards & Honors

### Contests
- China VIS Challenge 2022 Best Project Nomination

### Scholarships
- Fudan University Outstanding Graduate Scholarship [2023]
- Huawei Cloud Scholarship [2022]
- Fudan University Undergraduate Scholarships [2020, 2021, 2022]


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
