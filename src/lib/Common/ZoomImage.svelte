<script>
  export let image,
    active = false,
    zoomOut;
</script>

<div class="zoom-image" class:active on:click={zoomOut}>
  <img src={image} alt="" />
</div>

<style>
  .zoom-image {
    cursor: zoom-out;
    display: none;
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .zoom-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .zoom-image.active {
    display: block;
  }
</style>
