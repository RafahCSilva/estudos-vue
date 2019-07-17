<template>
  <div class="gift">
    <div class="gift-tie-v"></div>
    <div class="gift-tie-h"></div>
    <div class="gift-top"></div>
    <div class="gift-body"></div>
  </div>
</template>

<script>
  export default {
    name: 'Gift'
  }
</script>

<style lang="scss">
  .gift {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;

    .gift {
      &-top {
        width: 100px;
        height: 25px;
        background-color: #7aa944;
      }

      &-body {
        width: 90px;
        height: 60px;
        background-color: #5c7e23;
      }

      &-tie {
        &-v, &-h {
          position: absolute;
          background-color: red;
        }

        &-v {
          width: 15px;
          height: 85px;
        }

        &-h {
          top: 40px;
          width: 90px;
          height: 15px;
        }
      }
    }
  }

</style>
