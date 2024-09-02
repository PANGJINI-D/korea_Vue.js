<template>
    <div>
        <h1>Hello {{ name }}</h1>
        <p>single file component</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '황진'
        }
    },
}
</script>