<template>
  <div class="md-card" :class="{ 'show-border': !hideBorder}">
    <div v-if="image" class="card-image">
      <!-- <img :src="$withBase(image)" alt="" :href="to"> -->
      <a :href="to" target="_self">
        <img :src="$withBase(image)" alt="">
      </a>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'hideBorder','to']
};
</script>

<style lang="stylus">
@import './styles/config.styl';

.md-card
  background-color $frontColor
  margin-top 1em
  min-height 200px
  display flex
  flex-direction row
  align-items: stretch
  .card-image
    display flex
    align-items center
    padding 0.5rem
    img 
      max-width 200px
      max-height 200px
      height 200px
      border: 1px solid #eee;
      border-radius 0.2rem
      object-fit cover
  .card-content
    padding 0.5rem
    flex-grow 1
    p
      line-height normal
      -webkit-margin-before 0em
      -webkit-margin-after 0.5em
    blockquote 
      font-size 1rem
    a
      color black
.markdown-block a 
  color: red 

.md-card.show-border
  border 1px solid #eee
  border-radius 0.5rem
  box-shadow 0 5px 15px -5px rgba(0,0,0,.1)
  padding 0.5rem

@media (max-width: $MQMobileNarrow)
  .md-card
    display flex
    flex-direction column
    margin 1rem -0.5rem
    padding 0.5rem
    box-sizing border-box
    .card-image
      flex-grow 1
      align-items: stretch
      img 
        width 100%
        max-width 400px
    .card-content
      pre
        margin 0
        border-radius 6px

</style>