---
pageClass: about-page
description: 'The biography and information about me.'
avatar: /profile.jpg
head: 'Xinyi Zhao'
info: 'Student at Fudan University'
interests: 'I am looking for a graduate school! Contact me if any problems.'
socials:
- title: github
  link: https://github.com/HIDE-A-PUMPKIN
- title: linkedin
  link: https://www.linkedin.com
- title: instagram
  link: https://www.instagram.com
- title: email
  link: 'zxy1337445805[at]gmail[dot]com'
footer: Powered by VuePress
---

<AboutCard :frontmatter="$page.frontmatter" >


I attended [Fudan University](https://www.fudan.edu.cn/) in Shanghai to study data science.

I'm now in FDUVIS lab supervised by Siming Chen and other professors. My research area includes data visualization and intelligent interaction.

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background-color #B4DDCF
  min-height calc(100vh)
  
  .last-updated
    display none

</style>