<script setup lang="ts">
import { usePageContext } from 'vike-vue/usePageContext'
const {app,urlOriginal} = usePageContext() as any;
console.log('!!!!oCA globals', urlOriginal, app?.config?.globalProperties);
</script>

<template>
  <h1>Test page</h1>
  <p>this is a loalized string: {{$t('test')}}</p>
</template>
