<template>
  <div>
    <component :is="nowComponent"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowComponent: null
    };
  },
  props: {
    componentPath: String
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      import(`@/${this.componentPath}`)
        .then(rsp => {
          this.nowComponent = () => import(`@/${this.componentPath}`);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style></style>
