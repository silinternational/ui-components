<style>
  .chip{
    background-color: #e5e5e5;
    height: 36px;
  }

  .chip-content{
    padding-left: 12px;
    padding-right: 12px;
  }
</style>

<div class="chip black flex justify-center aligned mb-1 mr-2 fs-14 br-16px">
  <div class="chip-content flex aligned">
    <slot></slot>
  </div>  
</div>