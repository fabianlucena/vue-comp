<script setup>
import Form from '../components/Form.vue';
import MenuBar from '../components/MenuBar.vue';

</script>

<template>
  <div >
    <h1>Vue Comp Examples</h1>
    <MenuBar
      :items="[
        {
          name: 'Home',
          items: [
            { name: 'Sub Home 1', link: '/subhome1' },
            { name: 'Sub Home 2', link: '/subhome2' },
          ]
        },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
      ]"
    />
    <Form
      @submit="evt => console.log('Form submitted', evt)"
      @cancel="evt => console.log('Form cancelled', evt)"
    >
      Otra cosa
    </Form> 
  </div>
</template>
