<script setup lang="ts">
  import myFetch from "../fetch/fetch";
  let arr:any = []
  let p = myFetch("profile")
  p.then((x) => arr = x)

  for(let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    console.log(obj.id);
}

  /*
  let p2 = myFetch("exercise")
  p2.then((x) => console.log(x))
  */
</script>

<template> 
    TEST VIEW dsd
</template>